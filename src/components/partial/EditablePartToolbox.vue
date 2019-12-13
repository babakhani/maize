<!-- Fixed navbar -->
<template>
  <v-popover
    trigger="manual"
    placement="top"
    offset="20"
    :open="true"
    :auto-hide="false">
    <template slot="popover">
      <div class="widget-text-editable--toolbox ">
        <div v-if="groups.indexOf('text') > -1"
             class="widget-text-editable--toolbox--group">
          <!--Font Family -->
          <div class="dropdown">
            <button :title="$t('toolbox.font-family')"
                    v-b-tooltip.hover.top.small
                    class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                    type="button"
                    id="dropdownMenuButtonFamily"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
              <maizcon name="font"></maizcon>
            </button>
            <div class="dropdown-menu"
                 aria-labelledby="dropdownMenuButtonFamily">
              <a :class="{'widget-text-editable--selected': styles['font-family'] == 'monospace'}"
                 class="dropdown-item"
                 @click="setFontFamily('monospace')">monospace</a>
              <a :class="{'widget-text-editable--selected': styles['font-family'] == 'serif'}"
                 class="dropdown-item"
                 @click="setFontFamily('serif')">serif</a>
              <a :class="{'widget-text-editable--selected': styles['font-family'] == 'fantasy'}"
                 class="dropdown-item"
                 @click="setFontFamily('fantasy')">fantasy</a>
            </div>
          </div>
          <!--Font Size -->
          <div class="dropdown">
            <button :title="$t('toolbox.font-size')"
                    v-b-tooltip.hover.top.small
                    class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
              <maizcon name="size"></maizcon>
            </button>
            <div class="dropdown-menu"
                 aria-labelledby="dropdownMenuButton">
              <a :class="{'widget-text-editable--selected': styles['font-size'] == '44px'}"
                 class="dropdown-item"
                 @click="setSize('44px')">{{$t('toolbox.x-large')}}</a>
              <a :class="{'widget-text-editable--selected': styles['font-size'] == '18px'}"
                 class="dropdown-item"
                 @click="setSize('18px')">{{$t('toolbox.large')}}</a>
              <a :class="{'widget-text-editable--selected': styles['font-size'] == '16px'}"
                 class="dropdown-item"
                 @click="setSize('16px')">{{$t('toolbox.Medium')}}</a>
              <a :class="{'widget-text-editable--selected': styles['font-size'] == '14px'}"
                 class="dropdown-item"
                 @click="setSize('14px')">{{$t('toolbox.small')}}</a>
              <a :class="{'widget-text-editable--selected': styles['font-size'] == '12px'}"
                 class="dropdown-item"
                 @click="setSize('12px')">{{$t('toolbox.x-small')}}</a>
              <a :class="{'widget-text-editable&#45;&#45;selected': styles['font-size'] == '10px'}"
                 class="dropdown-item"
                 @click="setSize('10px')">{{$t('toolbox.xx-small')}}</a>
            </div>
          </div>
          <!-- Bold -->
          <button :title="$t('toolbox.bold')"
                  v-b-tooltip.hover.top.small
                  @click="toggleBold()"
                  :class="{'widget-text-editable--selected': styles['font-weight'] == 'bold'}"
                  class="btn btn-sm widget-text-editable--toolbox--button">
            <maizcon name="bold"></maizcon>
          </button>
          <!-- UnderLine -->
          <button :title="$t('toolbox.underline')"
                  v-b-tooltip.hover.top.small
                  @click="toggleTextDecoration()"
                  :class="{'widget-text-editable--selected': styles['text-decoration'] == 'underline'}"
                  class="btn btn-sm widget-text-editable--toolbox--button">
            <maizcon name="underline"></maizcon>
          </button>
          <button :title="$t('toolbox.line-through')"
                  v-b-tooltip.hover.top.small
                  @click="toggleThroughDecoration()"
                  :class="{'widget-text-editable--selected': styles['text-decoration'] == 'line-through'}"
                  class="btn btn-sm widget-text-editable--toolbox--button">
            <maizcon name="strikethrough"></maizcon>
          </button>

          <button :title="$t('toolbox.link')"
                  v-b-tooltip.hover.top.small
                  @click="setPickLinkMode"
                  class="btn btn-sm widget-text-editable--toolbox--button">
            <maizcon name="link"></maizcon>
          </button>

          <!--Alignment-->
          <div class="dropdown">
            <button class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                    :title="$t('toolbox.alignment')"
                    v-b-tooltip.hover.top.small
                    type="button"
                    id="dropdownMenuButton2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
              <maizcon name="align-center"></maizcon>
            </button>
            <div class="dropdown-menu"
                 aria-labelledby="dropdownMenuButton2">
              <button title="align left"
                      @click="align('left')"
                      :class="{'widget-text-editable--selected': styles['text-align'] == 'left'}"
                      class="btn btn-sm widget-text-editable--toolbox--button ">
                <icon name="align-left"></icon>
              </button>
              <button title="align right"
                      @click="align('right')"
                      :class="{'widget-text-editable--selected': styles['text-align'] == 'right'}"
                      class="btn btn-sm widget-text-editable--toolbox--button">
                <icon name="align-right"></icon>
              </button>
              <button title="align center"
                      @click="align('center')"
                      :class="{'widget-text-editable--selected': styles['text-align'] == 'center'}"
                      class="btn btn-sm widget-text-editable--toolbox--button">
                <icon name="align-center"></icon>
              </button>
              <button title="align justify"
                      @click="align('justify')"
                      :class="{'widget-text-editable--selected': styles['text-align'] == 'justify'}"
                      class="btn btn-sm widget-text-editable--toolbox--button">
                <icon name="align-justify"></icon>
              </button>
            </div>
          </div>


          <!-- Line Space!-->
          <div class="dropdown">
            <button class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                    :title="$t('toolbox.line-space')"
                    v-b-tooltip.hover.top.small
                    type="button"
                    id="dropdownMenuButton4"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
              <maizcon name="line-space"></maizcon>
            </button>
            <div class="dropdown-menu"
                 aria-labelledby="dropdownMenuButton4">
              <a :class="{'widget-text-editable--selected': styles['line-height'] == '1em'}"
                 class="dropdown-item"
                 @click="setLineHeight('1em')">1</a>
              <a :class="{'widget-text-editable--selected': styles['line-height'] == '1.2em'}"
                 class="dropdown-item"
                 @click="setLineHeight('1.2em')">1.2</a>
              <a :class="{'widget-text-editable--selected': styles['line-height'] == '1.5e'}"
                 class="dropdown-item"
                 @click="setLineHeight('1.5em')">1.5</a>
              <a :class="{'widget-text-editable--selected': styles['line-height'] == '2em'}"
                 class="dropdown-item"
                 @click="setLineHeight('2em')">2</a>
              <a :class="{'widget-text-editable--selected': styles['line-height'] == '3em'}"
                 class="dropdown-item"
                 @click="setLineHeight('3em')">3</a>
            </div>
          </div>

          <button :class="{'widget-text-editable--selected': styles['text-indent'] != '0'}"
                  :title="$t('toolbox.indent')"
                  v-b-tooltip.hover.top.small
                  @click="toggleTextIndent()"
                  class="btn btn-sm widget-text-editable--toolbox--button">
            <maizcon name="indent-increase"></maizcon>
          </button>

          <!--TODO: ask reza about direction-->
          <button title="direction"
                  v-b-tooltip.hover.top.small
                  class="btn btn-sm widget-text-editable--toolbox--button"
                  @click="toggleDirection()">
            <icon v-if="styles.direction == 'ltr'"
            name="arrow-left"></icon>
            <icon v-if="styles.direction == 'rtl'"
            name="arrow-right"></icon>
            <icon v-if="styles.direction == 'auto'"
            name="arrow-left"></icon>
          </button>
          <div class="dropdown">
            <button class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                    :title="$t('toolbox.font-color')"
                    v-b-tooltip.hover.top.small
                    type="button"
                    id="dropdownMenuButtonColor"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
              <maizcon name="back-color"></maizcon>
              <div 
                :style="{'background-color': styles['color']}"
                class="color-indicator"></div>
            </button>
            <div class="dropdown-menu"
                 aria-labelledby="dropdownMenuButtonColor">
              <compact-picker :value="styles['color']"
                              @input="updateColor">
              </compact-picker>
            </div>
          </div>

        </div>

        <div v-if="groups.indexOf('border') > -1"
             class="widget-text-editable--toolbox--group">


          <div class="dropdown">
            <button class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                    :title="$t('toolbox.bg-color')"
                    v-b-tooltip.hover.top.small
                    type="button"
                    id="dropdownMenuButtonBgColor"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
              <maizcon name="color-fill"></maizcon>
              <div 
                :style="{'background-color': styles['background-color']}"
                class="color-indicator"></div>
            </button>
            <div class="dropdown-menu"
                 aria-labelledby="dropdownMenuButtonBgColor">
              <compact-picker :value="styles['background-color']"
                              @input="updateBgColor">
              </compact-picker>
            </div>
          </div>

          <div class="dropdown">
            <button :title="$t('toolbox.border-width')"
                    v-b-tooltip.hover.top.small
                    class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                    type="button"
                    id="dropdownMenuButto5"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
              <maizcon name="border"></maizcon>
            </button>
            <div class="dropdown-menu"
                 aria-labelledby="dropdownMenuButton5">
              <input type="text"
                     v-model="styles['border-width']"/>
              <br>
              <input @input="borderWidth"
                     type="range"
                     min="0"
                     max="10"
                     :value="styles['border-width']"
                     step="1">
            </div>
          </div>

          <div class="dropdown">
            <button :title="$t('toolbox.border-style')"
                    v-b-tooltip.hover.top.small
                    class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                    type="button"
                    id="dropdownMenuButton6"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
              <maizcon name="border-style"></maizcon>
            </button>
            <div class="dropdown-menu"
                 aria-labelledby="dropdownMenuButton6">
              <a :class="{'widget-text-editable--selected': styles['border-style'] == 'none'}"
                 class="dropdown-item"
                 @click="setBorderStyle('none')">none</a>
              <a :class="{'widget-text-editable--selected': styles['border-style'] == 'solid'}"
                 class="dropdown-item"
                 @click="setBorderStyle('solid')">solid</a>
              <a :class="{'widget-text-editable--selected': styles['border-style'] == 'dashed'}"
                 class="dropdown-item"
                 @click="setBorderStyle('dashed')">dashed</a>
              <a :class="{'widget-text-editable--selected': styles['border-style'] == 'double'}"
                 class="dropdown-item"
                 @click="setBorderStyle('double')">double</a>
              <a :class="{'widget-text-editable--selected': styles['border-style'] == 'dotted'}"
                 class="dropdown-item"
                 @click="setBorderStyle('dotted')">dotted</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                    :title="$t('toolbox.border-color')"
                    v-b-tooltip.hover.top.small
                    type="button"
                    id="dropdownMenuButtonBorderColor"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
              <maizcon name="border-color"></maizcon>
              <div 
                :style="{'background-color': styles['border-color']}"
                class="color-indicator"></div>
            </button>
            <div class="dropdown-menu"
                 aria-labelledby="dropdownMenuButtonBorderColor">
              <compact-picker :value="styles['border-color']"
                              @input="updateBorderColor">
              </compact-picker>
            </div>
          </div>

          <div class="dropdown">
            <button :title="$t('toolbox.opacity')"
                    v-b-tooltip.hover.top.small
                    class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                    type="button"
                    id="dropdownMenuButtonOpacity"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
              <maizcon name="opacity"></maizcon>
            </button>
            <div class="dropdown-menu"
                 aria-labelledby="dropdownMenuButtonOpacity">
              <input type="text"
                     v-model="styles['opacity']"/>
              <br>
              <input @input="setOpacityColor"
                     type="range"
                     min="0.0"
                     max="1.0"
                     :value="styles['opacity']"
                     step="0.01">
            </div>
          </div>
        </div>

        <div v-if="groups.indexOf('general') > -1"
             class="widget-text-editable--toolbox--group">
          <div class="dropdown">
            <button :title="$t('toolbox.width')"
                    v-b-tooltip.hover.top.small
                    class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                    type="button"
                    id="dropdownMenuButtonWidth"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
               <maizcon name="width"></maizcon>
            </button>
            <div class="dropdown-menu"
                 aria-labelledby="dropdownMenuButtonWidth">
              <input @input="setWidth"
                     type="text"
                     v-model="styles['width']"/>
            </div>
          </div>

          <div class="dropdown">
            <button :title="$t('toolbox.height')"
                    v-b-tooltip.hover.top.small
                    class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                    type="button"
                    id="dropdownMenuButtonHeight"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
               <maizcon name="height"></maizcon>
            </button>
            <div class="dropdown-menu"
                 aria-labelledby="dropdownMenuButtonHeight">
              <input @input="setheight"
                     type="text"
                     v-model="styles['height']"/>
            </div>
          </div>

          <div class="dropdown">
            <button :title="$t('toolbox.margin')"
                    v-b-tooltip.hover.top.small
                    class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                    type="button"
                    id="dropdownMenuButtonMargin"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
              <maizcon name="margin"></maizcon>
            </button>
            <div class="dropdown-menu"
                 aria-labelledby="dropdownMenuButtonMargin">
              <label> {{ $t('toolbox.margin') }} </label>       
              <input @input="setMargin"
                     type="text"
                     v-model="styles['margin']"/>
              <br/>       
              <label> {{ $t('toolbox.padding') }} </label>       
              <input @input="setPadding"
                     type="text"
                     v-model="styles['padding']"/>
            </div>
          </div>

        </div>
        <button @click="hide"
                class="btn btn-sm btn-danger float-right widget-text-editable--toolbox--close">
          <icon name="times"></icon>
        </button>
      </div>
      <!--
      <div v-if="groups.indexOf('background') > -1"
           class="widget-text-editable--toolbox--group">
        <button :title="$t('toolbox.input-file')"
                v-b-tooltip.hover.top.small
                class="btn btn-sm widget-text-editable--toolbox--button color-box-btn">
          <maizcon name="upload-photo"></maizcon>
          <input type="file"/>
        </button>
      </div>
      -->
      <!--<div v-if="groups.indexOf('background') > -1"-->
      <!--class="widget-text-editable&#45;&#45;toolbox&#45;&#45;group">-->

      <!--</div>-->
      <!--<div v-if="groups.indexOf('general') > -1"-->
      <!--class="widget-text-editable&#45;&#45;toolbox&#45;&#45;group">-->
      <!--&lt;!&ndash; closed button&ndash;&gt;-->
      <!---->
      <!--</div>-->
    </template>
  </v-popover>
</template>
<script>
  import maizcon from '../partial/MaizeCon.vue'
  import {Material, Compact, Swatches, Slider, Sketch, Chrome, Photoshop} from 'vue-color'
  export default {
    name: 'EditablePartToolbox',
    components: {
      'maizcon': maizcon,
      'material-picker': Material,
      'compact-picker': Compact,
      'swatches-picker': Swatches,
      'slider-picker': Slider,
      'sketch-picker': Sketch,
      'chrome-picker': Chrome,
      'photoshop-picker': Photoshop
    },
    props: {
      currentStyles: {
        default () {
          return {}
        },
        required: true
      },
      groups: {
        default () {
          return ['text', 'background', 'border', 'general']
        },
        required: false
      },
      styles: {
        default () {
          return {
            'color': 'inherit',
            'direction': 'auto',
            'font-size': null,
            'font-weight': 'inherit',
            'font-family': 'inherit',
            'text-align': 'inherit',
            'text-decoration': 'inherit',
            'white-space': 'inherit',
            'text-indent': '0',
            'background-color': 'transparent',
            'line-height': 'inherit',
            'border-width': 'inherit',
            'border-color': 'transparent',
            'border-style': 'solid',
            'border-radius': '0',
            'opacity': '1',
            'overflow': 'hidden',
            'letter-spacing': 'normal',
            'padding': 'inherit',
            'margin': 'inherit',
            'width': 'auto',
            'height': 'auto'
          }
        }
      }
    },
    created () {
      this.styles = this._.extend(this.styles, this.currentStyles)
    },
    methods: {
      setPickLinkMode () {
        this.$emit('setPickLinkMode')
      },
      update () {
        //  TODO: send only changed data to update methods
        this.$emit('update', this.styles)
      },
      hide () {
        this.$emit('hide')
      },
      toggleBold () {
        if (this.styles['font-weight'] == 'bold') {
          this.styles['font-weight'] = 'normal'
        } else {
          this.styles['font-weight'] = 'bold'
        }
        this.update()
      },
      updateColor (e) {
        this.styles['color'] = e.hex
        this.update()
      },
      updateBgColor (e) {
        this.styles['background-color'] = e.hex
        this.update()
      },
      align (direction) {
        this.styles['text-align'] = direction
        this.update()
      },
      setSize (size) {
        this.styles['font-size'] = size
        this.update()
      },
      setFontFamily (family) {
        this.styles['font-family'] = family
        this.update()
      },

      toggleDirection () {
        if (this.styles['direction'] == 'rtl') {
          this.styles['direction'] = 'ltr'
        } else {
          this.styles['direction'] = 'rtl'
        }
        this.update()
      },
      toggleTextIndent () {
        if (this.styles['text-indent'] == '0') {
          this.styles['text-indent'] = '15px'
        } else {
          this.styles['text-indent'] = '0'
        }
        this.update()
      },
      setLineHeight (payload) {
        this.styles['line-height'] = payload
        this.update()
      },
      toggleOverflow () {
        if (this.styles['overflow'] == 'hidden') {
          this.styles['overflow'] = 'visible'
        } else {
          this.styles['overflow'] = 'hidden'
        }
        this.update()
      },
      setOpacityColor (e) {
        this.styles['opacity'] = e.target.value
        this.update()
      },
      toggleTextDecoration () {
        if (this.styles['text-decoration'] == 'none') {
          this.styles['text-decoration'] = 'underline'
        } else {
          this.styles['text-decoration'] = 'none'
        }
        this.update()
      },
      toggleThroughDecoration () {
        if (this.styles['text-decoration'] == 'none') {
          this.styles['text-decoration'] = 'line-through'
        } else {
          this.styles['text-decoration'] = 'none'
        }
        this.update()
      },
      updateBorderColor (e) {
        this.styles['border-color'] = e.hex
        this.update()
      },
      borderWidth (e) {
        this.styles['border-width'] = e.target.value + 'px'
        this.update()
      },
      setBorderStyle (style) {
        this.styles['border-style'] = style
        this.update()
      },
      letterSpacing (e) {
        this.styles['letter-spacing'] = e.target.value + 'px'
        this.update()
      },
      setPadding (e) {
        this.styles['padding'] = e.target.value
        this.update()
      },
      setMargin (e) {
        this.styles['margin'] = e.target.value
        this.update()
      },
      setWidth (e) {
        this.styles['width'] = e.target.value
        this.update()
      },
      setheight (e) {
        this.styles['height'] = e.target.value
        this.update()
      }
    }
  }
</script>
