<!-- Fixed navbar -->
<template>
  <div class="widget-text-editable--toolbox">
        <div v-if="groups.indexOf('text') > -1"
             class="widget-text-editable--toolbox--group">
        </div>
        <template
          v-if="visibileImageSelector">
          <button :title="$t('toolbox.icon_picker')"
            v-b-tooltip.hover.top.small
            @click="pickImage"
            class="btn btn-sm widget-text-editable--toolbox--button">
            <icon name="image"></icon>
          </button>
          <div class="widget-text-editable--toolbox--group-separator"></div>
        </template>

        <template
          v-if="visibileIconSelector">
          <button :title="$t('toolbox.icon_picker')"
            v-b-tooltip.hover.top.small
            @click="pickIcon"
            class="btn btn-sm widget-text-editable--toolbox--button">
            <maizcon name="shuffle"></maizcon>
          </button>
          <div class="widget-text-editable--toolbox--group-separator"></div>
        </template>

        <template
          v-if="visibileLinkSelector">
          <button :title="$t('toolbox.link')"
            v-b-tooltip.hover.top.small
            @click="setPickLinkMode"
            class="btn btn-sm widget-text-editable--toolbox--button">
            <maizcon name="link"></maizcon>
          </button>
          <div class="widget-text-editable--toolbox--group-separator"></div>
        </template>

        <!-- Background Settings -->
        <!-- ---------------------------------------------------------------------------- -->
        <div
          v-if="groups.indexOf('background') > -1"
          class="widget-text-editable--toolbox--group">
          <b-dropdown
            :title="$t('toolbox.background_color')"
            v-b-tooltip.hover.top.small
            size="sm"
            class="">
            <template v-slot:button-content>
              <maizcon name="color-fill"></maizcon>
              <div
                :style="{'background-color': styles['background-color']}"
                class="color-indicator"></div>
            </template>
            <b-dropdown-text>
              <div
                @click="(e) => {e.stopPropagation()}"
                aria-labelledby="dropdownMenuButtonBgColor">
                <color-picker :value="styles['background-color']"
                @input="updateBgColor">
                </color-picker>
              </div>
            </b-dropdown-text>
          </b-dropdown>
          <template
            v-if="groups.indexOf('backgroundimage') > -1">
            <b-dropdown
            :title="$t('toolbox.background_size')"
            v-b-tooltip.hover.top.small
            size="sm"
            class="">
              <template v-slot:button-content>
                <maizcon name="size"></maizcon>
              </template>
              <b-dropdown-item
                :class="{'widget-text-editable--selected': styles['background-size'] === 'cover'}"
                class="dropdown-item"
                @click="setBgSize('cover')"> {{ $t('toolbox.cover') }}
              </b-dropdown-item>
              <b-dropdown-item
                :class="{'widget-text-editable--selected': styles['background-size'] === 'contain'}"
                class="dropdown-item"
                @click="setBgSize('contain')">
                {{ $t('toolbox.contain') }}
              </b-dropdown-item>
              <b-dropdown-item
                :class="{'widget-text-editable--selected': styles['background-size'] === 'auto'}"
                class="dropdown-item"
                @click="setBgSize('auto')">{{ $t('toolbox.auto') }}
              </b-dropdown-item>
            </b-dropdown>

            <b-dropdown
            :title="$t('toolbox.background_size')"
            v-b-tooltip.hover.top.small
            size="sm"
            class="">
              <template v-slot:button-content>
                <maizcon name="size"></maizcon>
              </template>
              <b-dropdown-item
                         :class="{'widget-text-editable--selected': styles['background-size'] === 'no-repeat'}"
                         class="dropdown-item"
                         @click="setBgRepeat('no-repeat')">
                {{ $t('toolbox.no-repeat') }}
              </b-dropdown-item>
              <b-dropdown-item
                         :class="{'widget-text-editable--selected': styles['background-size'] === 'no-repeat'}"
                         class="dropdown-item"
                         @click="setBgRepeat('repeat')">
                {{ $t('toolbox.repeat') }}
              </b-dropdown-item>
              <b-dropdown-item
                         :class="{'widget-text-editable--selected': styles['background-size'] === 'no-repeat'}"
                         class="dropdown-item"
                         @click="setBgRepeat('repeat-x')">
                {{ $t('toolbox.repeat-x') }}
              </b-dropdown-item>
              <b-dropdown-item
                         :class="{'widget-text-editable--selected': styles['background-size'] === 'no-repeat'}"
                         class="dropdown-item"
                         @click="setBgRepeat('repeat-y')">
                {{ $t('toolbox.repeat-y') }}
              </b-dropdown-item>
            </b-dropdown>

            <b-dropdown
            :title="$t('toolbox.background_size')"
            v-b-tooltip.hover.top.small
            size="sm"
            class="">
              <template v-slot:button-content>
                <maizcon name="size"></maizcon>
              </template>
              <b-dropdown-form>
                <b-form-group >
                <b-form-input @input="setBackgroundPosition"
                   type="text"
                   v-model="styles['background-position']"/>
                </b-form-group >
              </b-dropdown-form>
            </b-dropdown>

            <button :title="$t('toolbox.background_image')"
                   v-b-tooltip.hover.top.small
                   class="btn btn-sm widget-text-editable--toolbox--button"
                   @click="pickBackgroundImage">
              <icon name="image"></icon>
            </button>
          </template>
          <div class="widget-text-editable--toolbox--group-separator"></div>
        </div>

        <!-- Text Settings -->
        <!-- ---------------------------------------------------------------------------- -->
        <template
          v-if="groups.indexOf('text') > -1">
          <div class="widget-text-editable--toolbox--group">

            <!-- Color -->
            <b-dropdown
            :title="$t('toolbox.font-color')"
            v-b-tooltip.hover.top.small
            size="sm"
            class="">
              <template v-slot:button-content>
                <maizcon name="back-color"></maizcon>
                <div
                         :style="{'background-color': styles['color']}"
                         class="color-indicator"></div>
              </template>
              <b-dropdown-text>
                <div
                         @click="(e) => {e.stopPropagation()}"
                         aria-labelledby="dropdownMenuButtonColor">
                         <color-picker :value="styles['color']"
                         @input="updateColor">
                         </color-picker>
                </div>
              </b-dropdown-text>
            </b-dropdown>

            <!--Font Family -->
            <b-dropdown
            :title="$t('toolbox.font-family')"
            v-b-tooltip.hover.top.small
            size="sm"
            class="">
              <template v-slot:button-content>
                <maizcon name="font"></maizcon>
              </template>
              <b-dropdown-item
                         :class="{'widget-text-editable--selected': styles['font-family'] === 'monospace'}"
                         @click="setFontFamily('monospace')">
                {{ $t('monospace') }}
              </b-dropdown-item>
              <b-dropdown-item
                         :class="{'widget-text-editable--selected': styles['font-family'] === 'serif'}"
                         @click="setFontFamily('serif')">
                {{ $t('serif') }}
              </b-dropdown-item>
              <b-dropdown-item
                         :class="{'widget-text-editable--selected': styles['font-family'] === 'fantasy'}"
                         @click="setFontFamily('fantasy')">
                {{ $t('fantasy') }}
              </b-dropdown-item>
            </b-dropdown>

            <!--Font Size -->
            <b-dropdown
                         :title="$t('toolbox.font-size')"
                         v-b-tooltip.hover.top.small
                         size="sm"
                         class="">
              <template v-slot:button-content>
                <maizcon name="size"></maizcon>
              </template>
              <b-dropdown-item :class="{'widget-text-editable--selected': styles['font-size'] === '44px'}"
                         @click="setSize('44px')">{{$t('toolbox.x-large')}}</b-dropdown-item>
              <b-dropdown-item :class="{'widget-text-editable--selected': styles['font-size'] === '18px'}"
                         @click="setSize('18px')">{{$t('toolbox.large')}}</b-dropdown-item>
              <b-dropdown-item :class="{'widget-text-editable--selected': styles['font-size'] === '16px'}"
                         @click="setSize('16px')">{{$t('toolbox.Medium')}}</b-dropdown-item>
              <b-dropdown-item :class="{'widget-text-editable--selected': styles['font-size'] === '14px'}"
                         @click="setSize('14px')">{{$t('toolbox.small')}}</b-dropdown-item>
              <b-dropdown-item :class="{'widget-text-editable--selected': styles['font-size'] === '12px'}"
                         @click="setSize('12px')">{{$t('toolbox.x-small')}}</b-dropdown-item>
              <b-dropdown-item :class="{'widget-text-editable&#45;&#45;selected':
                                       styles['font-size'] === '10px'}"
                         @click="setSize('10px')">{{$t('toolbox.xx-small')}}</b-dropdown-item>
            </b-dropdown>
            <!-- Bold -->
            <button :title="$t('toolbox.bold')"
                   v-b-tooltip.hover.top.small
                   @click="toggleBold()"
                   :class="{'widget-text-editable--selected': styles['font-weight'] === 'bold'}"
                   class="btn btn-sm widget-text-editable--toolbox--button">
              <maizcon name="bold"></maizcon>
            </button>
            <!-- UnderLine -->
            <button :title="$t('toolbox.underline')"
                       v-b-tooltip.hover.top.small
                       @click="toggleTextDecoration()"
                       :class="{'widget-text-editable--selected': styles['text-decoration'] === 'underline'}"
                       class="btn btn-sm widget-text-editable--toolbox--button">
              <maizcon name="underline"></maizcon>
            </button>
            <button :title="$t('toolbox.line-through')"
                       v-b-tooltip.hover.top.small
                       @click="toggleThroughDecoration()"
                       :class="{'widget-text-editable--selected': styles['text-decoration'] === 'line-through'}"
                       class="btn btn-sm widget-text-editable--toolbox--button">
              <maizcon name="strikethrough"></maizcon>
            </button>

            <!--Alignment-->
            <b-dropdown
                       :title="$t('toolbox.alignment')"
                       v-b-tooltip.hover.top.small
                       size="sm"
                       class="">
              <template v-slot:button-content>
                <maizcon name="align-center"></maizcon>
              </template>
              <b-dropdown-item title="align left"
                               @click="align('left')"
                               :class="{'widget-text-editable--selected': styles['text-align'] ==
                                        'left'}">
                <icon name="align-left"></icon>
              </b-dropdown-item>
              <b-dropdown-item title="align right"
                               @click="align('right')"
                               :class="{'widget-text-editable--selected': styles['text-align'] ==
                                        'right'}">
                <icon name="align-right"></icon>
              </b-dropdown-item>
              <b-dropdown-item title="align center"
                               @click="align('center')"
                               :class="{'widget-text-editable--selected': styles['text-align'] ==
                                        'center'}">
                <icon name="align-center"></icon>
              </b-dropdown-item>
              <b-dropdown-item title="align justify"
                               @click="align('justify')"
                               :class="{'widget-text-editable--selected': styles['text-align'] ==
                                        'justify'}">
                <icon name="align-justify"></icon>
              </b-dropdown-item>
            </b-dropdown>

            <!-- Line Space!-->
            <b-dropdown
                      :title="$t('toolbox.line-space')"
                      v-b-tooltip.hover.top.small
                      size="sm"
                      class="">
              <template v-slot:button-content>
                <maizcon name="line-space"></maizcon>
              </template>
              <b-dropdown-item :class="{'widget-text-editable--selected': styles['line-height'] === '1em'}"
                         @click="setLineHeight('1em')">1</b-dropdown-item>
              <b-dropdown-item :class="{'widget-text-editable--selected': styles['line-height'] === '1.2em'}"
                         @click="setLineHeight('1.2em')">1.2</b-dropdown-item>
              <b-dropdown-item :class="{'widget-text-editable--selected': styles['line-height'] === '1.5e'}"
                         @click="setLineHeight('1.5em')">1.5</b-dropdown-item>
              <b-dropdown-item :class="{'widget-text-editable--selected': styles['line-height'] === '2em'}"
                         @click="setLineHeight('2em')">2</b-dropdown-item>
              <b-dropdown-item :class="{'widget-text-editable--selected': styles['line-height'] === '3em'}"
                         @click="setLineHeight('3em')">3</b-dropdown-item>
            </b-dropdown>

            <button :class="{'widget-text-editable--selected': styles['text-indent'] != '0'}"
                         :title="$t('toolbox.indent')"
                         v-b-tooltip.hover.top.small
                         @click="toggleTextIndent()"
                         class="btn btn-sm widget-text-editable--toolbox--button">
              <maizcon name="indent-increase"></maizcon>
            </button>

            <!--TODO: ask reza about direction-->
            <button :title="$t('toolbox.direction')"
                       v-b-tooltip.hover.top.small
                       class="btn btn-sm widget-text-editable--toolbox--button"
                       @click="toggleDirection()">
              <icon v-if="styles.direction === 'ltr'"
                    name="arrow-left"></icon>
              <icon v-if="styles.direction === 'rtl'"
                    name="arrow-right"></icon>
              <icon v-if="styles.direction === 'auto'"
                    name="arrow-left"></icon>
            </button>
          </div>
          <div class="widget-text-editable--toolbox--group-separator"></div>
        </template>

        <!-- Border Settings -->
        <!-- ---------------------------------------------------------------------------- -->
        <template
          v-if="groups.indexOf('border') > -1">
          <div class="widget-text-editable--toolbox--group">
            <b-dropdown
               :title="$t('toolbox.border-color')"
               v-b-tooltip.hover.top.small
               size="sm"
               class="">
              <template v-slot:button-content>
                <maizcon name="border-color"></maizcon>
                <div
                         :style="{'background-color': styles['border-color']}"
                         class="color-indicator"></div>
              </template>
              <b-dropdown-text
                         @click="(e) => {e.stopPropagation()}"
                         aria-labelledby="dropdownMenuButtonBorderColor">
                         <color-picker :value="styles['border-color']"
                         @input="updateBorderColor">
                         </color-picker>
              </b-dropdown-text>
            </b-dropdown>

            <b-dropdown
               :title="$t('toolbox.border-width')"
               v-b-tooltip.hover.top.small
               size="sm"
               class="">
              <template v-slot:button-content>
                <maizcon name="border"></maizcon>
              </template>
              <b-dropdown-form>
                <b-form-group >
                <b-input-group size="sm" append="px">
                  <b-form-input
                    type="number"
                    @change="setBorderWidth"
                    v-model="defaultStyles.borderWidth" >
                  </b-form-input>
                </b-input-group>
                <br>
                <input @input="setBorderWidth"
                    type="range"
                    min="0"
                    max="10"
                    step="1"
                    v-model="defaultStyles.borderWidth"/>
                </b-form-group >
              </b-dropdown-form>
            </b-dropdown>

            <b-dropdown
               :title="$t('toolbox.border-style')"
               v-b-tooltip.hover.top.small
               size="sm"
               class="">
              <template v-slot:button-content>
                <maizcon name="border-style"></maizcon>
              </template>
                <b-dropdown-item :class="{'widget-text-editable--selected': styles['border-style']
                         === 'none'}"
                   @click="setBorderStyle('none')">{{ $t('none') }}</b-dropdown-item>
                <b-dropdown-item :class="{'widget-text-editable--selected': styles['border-style']
                         === 'solid'}"
                   @click="setBorderStyle('solid')">{{ $t('solid') }}</b-dropdown-item>
                <b-dropdown-item :class="{'widget-text-editable--selected': styles['border-style']
                         === 'dashed'}"
                   @click="setBorderStyle('dashed')">{{ $t('dashed') }}</b-dropdown-item>
                <b-dropdown-item :class="{'widget-text-editable--selected': styles['border-style']
                         === 'double'}"
                   @click="setBorderStyle('double')">{{ $t('double') }}</b-dropdown-item>
                <b-dropdown-item :class="{'widget-text-editable--selected': styles['border-style']
                         === 'dotted'}"
                   @click="setBorderStyle('dotted')">{{ $t('dotted') }}</b-dropdown-item>
            </b-dropdown>

            <b-dropdown
               :title="$t('toolbox.opacity')"
               v-b-tooltip.hover.top.small
               size="sm"
               class="">
              <template v-slot:button-content>
                <maizcon name="opacity"></maizcon>
              </template>
              <b-dropdown-form>
                <b-form-group >
                  <input type="text"
                         v-model="styles['opacity']"/>
                  <br>
                  <input @input="setOpacityColor"
                         type="range"
                         min="0.0"
                         max="1.0"
                         :value="styles['opacity']"
                         step="0.01">
                </b-form-group >
              </b-dropdown-form>
            </b-dropdown>
          </div>
          <div class="widget-text-editable--toolbox--group-separator"></div>
        </template>

        <!-- General Settings -->
        <!-- ---------------------------------------------------------------------------- -->
        <template
          v-if="groups.indexOf('general') > -1">
          <div class="widget-text-editable--toolbox--group">

            <b-dropdown
               :title="$t('toolbox.width')"
               v-b-tooltip.hover.top.small
               size="sm"
               class="">
              <template v-slot:button-content>
                <maizcon name="width"></maizcon>
              </template>
              <b-dropdown-form>
                <b-form-group >
                  <input @input="setWidth"
                         type="text"
                         v-model="styles['width']"/>
                </b-form-group >
              </b-dropdown-form>
            </b-dropdown>

            <b-dropdown
               :title="$t('toolbox.height')"
               v-b-tooltip.hover.top.small
               size="sm"
               class="">
              <template v-slot:button-content>
                <maizcon name="height"></maizcon>
              </template>
              <b-dropdown-form>
                <b-form-group >
                  <input @input="setWidth"
                         type="text"
                         v-model="styles['height']"/>
                </b-form-group >
              </b-dropdown-form>
            </b-dropdown>

            <b-dropdown
               :title="$t('toolbox.margin')"
               v-b-tooltip.hover.top.small
               size="sm"
               class="">
              <template v-slot:button-content>
                <maizcon name="margin"></maizcon>
              </template>
              <b-dropdwon-form>
                <div
                         class="dropdown-menu--margin"
                         @click="(e) => {e.stopPropagation()}"
                         aria-labelledby="dropdownMenuButtonMargin">
                         <label> {{ $t('toolbox.margin') }} </label>
                         <b-row class="m-0 mb-2 w-100">
                           <input @input="setMargin"
                                type="number"
                                class="dropdown-input--odd"
                                v-model="styles['margin']"/>
                           <input @input="setMargin"
                                type="number"
                                class="dropdown-input--even mt-2"
                                v-model="styles['margin']"/>
                         </b-row>
                         <b-row class="m-0 mb-1 w-100">
                           <label> {{ $t('toolbox.padding') }} </label>
                           <input @input="setPadding"
                                type="number"
                                class="dropdown-input--odd"
                                v-model="styles['padding']"/>
                           <input @input="setPadding"
                                type="number"
                                class="dropdown-input--even mt-2"
                                v-model="styles['padding']"/>
                         </b-row>
                </div>
              </b-dropdwon-form>
            </b-dropdown>
          </div>
        </template>

        <b-button @click="hide"
                    class="btn btn-sm btn-danger float-right widget-text-editable--toolbox--close">
          <icon name="times"></icon>
        </b-button>
      </div>
</template>
<script>
import maizcon from '../partial/MaizeCon.vue'
import { EventBus } from '../../events/event-bus'
// import { Material, Compact, Swatches, Slider, Sketch, Chrome, Photoshop } from 'vue-color'
import { Sketch } from 'vue-color'
// import CssInput from './CssInput'
export default {
  name: 'EditablePartToolbox',
  components: {
    // CssInput,
    'maizcon': maizcon,
    'color-picker': Sketch
    // 'compact-picker': Compact,
    // 'swatches-picker': Swatches,
    // 'slider-picker': Slider,
    // 'sketch-picker': Sketch,
    // 'chrome-picker': Chrome,
    // 'photoshop-picker': Photoshop
  },
  data () {
    return {
      defaultStyles: {
        borderWidth: this.styles['border-width'] ? this.styles['border-width'] : 0
      }
    }
  },
  props: {
    target: {
      default: false,
      required: false
    },
    visibileImageSelector: {
      default: false,
      required: false
    },
    visibileIconSelector: {
      default: false,
      required: false
    },
    visibileLinkSelector: {
      default: false,
      required: false
    },
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
    editableData: {
      default: true,
      required: false
    },
    styles: {
      default () {
        return {
          'color': 'inherit',
          // 'direction': 'auto',
          // 'font-size': null,
          // 'font-weight': 'inherit',
          // 'font-family': null,
          // 'text-align': 'inherit',
          // 'text-decoration': 'inherit',
          // 'white-space': 'inherit',
          // 'text-indent': '0',
          'background-color': 'transparent',
          // 'line-height': 'normal',
          // 'border-width': 'inherit',
          'border-color': 'transparent'
          // 'border-style': 'solid',
          // 'border-radius': '0',
          // 'opacity': '1',
          // 'overflow': 'visible',
          // 'letter-spacing': 'normal',
          // 'width': 'auto',
          // 'height': 'auto',
          // 'background-position': 'center center',
          // 'background-size': 'cover',
          // 'background-repeat': 'no-repeat',
          // 'background-image': ``,
        }
      }
    }
  },
  created () {
    this.styles = this._.extend(this.styles, this.currentStyles)
  },
  methods: {
    pickImage () {
      this.$store.dispatch('layout/setModalView', {
        name: 'image',
        data: this.editableData
      })
      EventBus.$once('UPDATE_WIDGET_DATA', (widgetData) => {
        this.$emit('updatewidget', widgetData)
      })
      return false
    },
    pickIcon () {
      this.$store.dispatch('layout/setModalView', {
        name: 'icon',
        data: this.editableData
      })
      EventBus.$once('UPDATE_WIDGET_DATA', (widgetData) => {
        this.$emit('updatewidget', widgetData)
      })
      return false
    },
    getBgURL () {
      let out = null
      if (this.styles['background-image']) {
        out = this.styles['background-image'].match(/\((.*?)\)/)[1].replace(/('|")/g, '')
      }
      return out
    },
    pickBackgroundImage () {
      this.$store.dispatch('layout/setModalView', {
        name: 'image',
        data: {
          src: this.getBgURL()
        }
      })
      EventBus.$once('UPDATE_WIDGET_DATA', (widgetData) => {
        this.styles['background-image'] = `url('${widgetData.src}')`
        this.update()
      })
      return false
    },
    setPickLinkMode (e) {
      this.$store.dispatch('layout/setModalView', {
        name: 'link',
        data: this.editableData
      })
      EventBus.$once('UPDATE_WIDGET_DATA', (widgetData) => {
        this.$emit('updatewidget', widgetData)
      })
      return false
    },
    update () {
      //  TODO: send only changed data to update methods
      this.$emit('update', this.styles)
      this.$forceUpdate()
    },
    hide (e) {
      e.preventDefault()
      setTimeout(() => {
        this.$emit('hide')
      }, 100)
      return false
    },
    toggleBold () {
      if (this.styles['font-weight'] === 'bold') {
        this.styles['font-weight'] = 'normal'
      } else {
        this.styles['font-weight'] = 'bold'
      }
      this.update()
    },
    updateColor (e) {
      this.styles['color'] = `rgba(${e.rgba.r},${e.rgba.g},${e.rgba.b},${e.rgba.a})`
      this.update()
    },
    updateBgColor (e) {
      this.styles['background-color'] = `rgba(${e.rgba.r},${e.rgba.g},${e.rgba.b},${e.rgba.a})`
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
      if (this.styles['direction'] === 'rtl') {
        this.styles['direction'] = 'ltr'
      } else {
        this.styles['direction'] = 'rtl'
      }
      this.update()
    },
    toggleTextIndent () {
      if (this.styles['text-indent'] === '0') {
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
      if (this.styles['overflow'] === 'hidden') {
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
      if (this.styles['text-decoration'] === 'none') {
        this.styles['text-decoration'] = 'underline'
      } else {
        this.styles['text-decoration'] = 'none'
      }
      this.update()
    },
    toggleThroughDecoration () {
      if (this.styles['text-decoration'] === 'none') {
        this.styles['text-decoration'] = 'line-through'
      } else {
        this.styles['text-decoration'] = 'none'
      }
      this.update()
    },
    updateBorderColor (e) {
      this.styles['border-color'] = `rgba(${e.rgba.r},${e.rgba.g},${e.rgba.b},${e.rgba.a})`
      this.update()
    },
    setBorderWidth (e) {
      this.styles['border-width'] = this.defaultStyles.borderWidth + 'px'
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
    },
    setBgSize (e) {
      this.styles['background-size'] = e
      this.update()
    },
    setBgRepeat (e) {
      this.styles['background-repeat'] = e
      this.update()
    },
    setBackgroundPosition (e) {
      this.styles['background-position'] = e.target.value
      this.update()
    }
  }
}
</script>
