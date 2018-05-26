<!-- Fixed navbar -->
<template>
  <div class="widget-text-editable--toolbox">
    <div v-if="groups.indexOf('text') > -1"
         class="widget-text-editable--toolbox--group">
      <!--DropDown Example-->
      <div class="dropdown">
        <button class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
          <icon :style="{'width': styles['font-size']}"
                name="font"></icon>
        </button>
        <div class="dropdown-menu"
             aria-labelledby="dropdownMenuButton">
          <a :class="{'widget-text-editable--selected': styles['font-size'] == '44px'}"
             class="dropdown-item"
             @click="setSize('44px')">x-large</a>
          <a :class="{'widget-text-editable--selected': styles['font-size'] == '18px'}"
             class="dropdown-item"
             @click="setSize('18px')">large</a>
          <a :class="{'widget-text-editable--selected': styles['font-size'] == '16px'}"
             class="dropdown-item"
             @click="setSize('16px')">Medium</a>
          <a :class="{'widget-text-editable--selected': styles['font-size'] == '14px'}"
             class="dropdown-item"
             @click="setSize('14px')">small</a>
          <a :class="{'widget-text-editable--selected': styles['font-size'] == '12px'}"
             class="dropdown-item"
             @click="setSize('12px')">x-small</a>
          <a :class="{'widget-text-editable--selected': styles['font-size'] == '10px'}"
             class="dropdown-item"
             @click="setSize('10px')">xx-small</a>
        </div>
      </div>
      <!--DropDown Example-->
      <div class="dropdown">
        <button class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                type="button"
                id="dropdownMenuButton2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
          <icon v-if="styles['text-align'] != 'inherit'" :name="'align-'+ styles['text-align']"></icon>
          <icon v-else name="align-left"></icon>
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
      <!--Button Example-->
      <button title="bold"
              @click="toggleBold()"
              :class="{'widget-text-editable--selected': styles['font-weight'] == 'bold'}"
              class="btn btn-sm widget-text-editable--toolbox--button">
        <icon name="bold"></icon>
      </button>
      <button title="underline"
              @click="toggleTextDecoration()"
              :class="{'widget-text-editable--selected': styles['text-decoration'] == 'underline'}"
              class="btn btn-sm widget-text-editable--toolbox--button">
        <icon name="underline"></icon>
      </button>
      <button title="line-through"
              @click="toggleThroughDecoration()"
              :class="{'widget-text-editable--selected': styles['text-decoration'] == 'line-through'}"
              class="btn btn-sm widget-text-editable--toolbox--button">
        <icon name="strikethrough"></icon>
      </button>
      <button title="direction"
              @click="toggleDirection()"
              class="btn btn-sm widget-text-editable--toolbox--button">
        <icon v-if="styles.direction == 'ltr'"
              name="arrow-left"></icon>
        <icon v-if="styles.direction == 'rtl'"
              name="arrow-right"></icon>
      </button>
      <button :class="{'widget-text-editable--selected': styles['text-indent'] != '0'}"
              title="indent"
              @click="toggleTextIndent()"
              class="btn btn-sm widget-text-editable--toolbox--button">
        ind
      </button>

      <!--DropDown Example-->
      <div class="dropdown">
        <button class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                type="button"
                id="dropdownMenuButton4"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
          line height
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
      <button class="btn btn-sm widget-text-editable--toolbox--button">
        color
        <input type="color"
               @input="updateColor"/>
      </button>
    </div>
    <div v-if="groups.indexOf('border') > -1"
         class="widget-text-editable--toolbox--group">
      <div class="dropdown">
        <button class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                type="button"
                title="border width"
                id="dropdownMenuButto5"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
          Border Width
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
                 value="10"
                 step="1">
        </div>
      </div>
      <button class="btn btn-sm widget-text-editable--toolbox--button">
        border color
        <input type="color"
               @input="updateBorderColor"/>
      </button>
      <div class="dropdown">
        <button class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                type="button"
                id="dropdownMenuButton6"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
          border style
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
    </div>
    <div v-if="groups.indexOf('background') > -1"
         class="widget-text-editable--toolbox--group">
      <button class="btn btn-sm widget-text-editable--toolbox--button">
        bg
        <input type="color"
               @input="updateBgColor"/>
      </button>
    </div>
    <div v-if="groups.indexOf('general') > -1"
         class="widget-text-editable--toolbox--group">
      <div class="dropdown">
        <button class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                type="button"
                title="opacity"
                id="dropdownMenuButto3"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
          opacity
        </button>
        <div class="dropdown-menu"
             aria-labelledby="dropdownMenuButton3">
          <input type="text"
                 v-model="styles['opacity']"/>
          <br>
          <input @input="setOpacityColor"
                 type="range"
                 min="0.0"
                 max="1.0"
                 value="100"
                 step="0.01">
        </div>
      </div>
    </div>
    <!-- closed button-->
    <button @click="hide"
            class="btn btn-sm btn-danger float-right widget-text-editable--toolbox--close">
      <icon name="times"></icon>
    </button>
  </div>
</template>
<script>
  export default {
    name: 'EditablePartToolbox',
    props: {
      currentStyles: {
        default() {
          return {}
        },
        required: true
      },
      groups: {
        default() {
          return ['text', 'background', 'border', 'general']
        },
        required: false
      },
      styles: {
        default() {
          return {
            'color': 'inherit',
            'direction': 'inherit',
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
            'overflow': 'visible',
            'letter-spacing': 'normal'
          }
        }
      }
    },
    created() {
      this.styles = this._.extend(this.styles, this.currentStyles)
    },
    methods: {
      update() {
        //  TODO: send only changed data to update methods
        this.$emit('update', this.styles)
      },
      hide() {
        this.$emit('hide')
      },
      toggleBold() {
        if (this.styles['font-weight'] == 'bold') {
          this.styles['font-weight'] = 'normal'
        } else {
          this.styles['font-weight'] = 'bold'
        }
        this.update()
      },
      updateColor(e) {
        this.styles['color'] = e.target.value
        this.update()
      },
      updateBgColor(e) {
        this.styles['background-color'] = e.target.value
        this.update()
      },
      align(direction) {
        this.styles['text-align'] = direction
        this.update()
      },
      setSize(size) {
        this.styles['font-size'] = size
        this.update()
      },
      toggleDirection() {
        if (this.styles['direction'] == 'rtl') {
          this.styles['direction'] = 'ltr'
        } else {
          this.styles['direction'] = 'rtl'
        }
        this.update()
      },
      toggleTextIndent() {
        if (this.styles['text-indent'] == '0') {
          this.styles['text-indent'] = '15px'
        } else {
          this.styles['text-indent'] = '0'
        }
        this.update()
      },
      setLineHeight(payload) {
        this.styles['line-height'] = payload
        this.update()
      },
      toggleOverflow() {
        if (this.styles['overflow'] == 'hidden') {
          this.styles['overflow'] = 'visible'
        } else {
          this.styles['overflow'] = 'hidden'
        }
        this.update()
      },
      setOpacityColor(e) {
        this.styles['opacity'] = e.target.value
        this.update()
      },
      toggleTextDecoration() {
        if (this.styles['text-decoration'] == 'none') {
          this.styles['text-decoration'] = 'underline'
        } else {
          this.styles['text-decoration'] = 'none'
        }
        this.update()
      },
      toggleThroughDecoration() {
        if (this.styles['text-decoration'] == 'none') {
          this.styles['text-decoration'] = 'line-through'
        } else {
          this.styles['text-decoration'] = 'none'
        }
        this.update()
      },
      updateBorderColor(e) {
        this.styles['border-color'] = e.target.value
        this.update()
      },
      borderWidth(e) {
        this.styles['border-width'] = e.target.value + 'px'
        this.update()
      },
      setBorderStyle(style) {
        this.styles['border-style'] = style
        this.update()
      },
      letterSpacing(e) {
        this.styles['letter-spacing'] = e.target.value + 'px'
        this.update()
      },
    }
  }
</script>
