const Mixin = {
  props: {
    styles: {
      default() {
        return {
          'color': '#333',
          'direction': 'rtl',
          'font-size': null,
          'font-weight': 'normal',
          'font-family': 'Tahoma',
          'text-align': 'center',
          'text-decoration': 'none',
          'white-space': 'wrap',

          'text-indent': '0',
          'background-color': 'transparent',
          'line-height': 'inherit',
          'border-width': '1px',
          'border-color': 'transparent',
          'border-style': 'solid',
          'border-radius': '0',
          'opacity': '1',
          'overflow': 'visible'
        }
      }
    }
  },
  methods: {
    toggleBold() {
      if (this.styles['font-weight'] == 'bold') {
        this.styles['font-weight'] = 'normal'
      } else {
        this.styles['font-weight'] = 'bold'
      }
    },
    updateColor(e) {
      this.styles['color'] = e.target.value
    },
    updateBgColor(e) {
      this.styles['background-color'] = e.target.value
    },
    align(direction) {
      this.styles['text-align'] = direction
    },
    setSize (size) {
      this.styles['font-size'] = size
    },
    toggleDirection() {
      if (this.styles['direction'] == 'rtl') {
        this.styles['direction'] = 'ltr'
      } else {
        this.styles['direction'] = 'rtl'
      }
    },
    toggleTextIndent() {
      if (this.styles['text-indent'] == '0') {
        this.styles['text-indent'] = '15px'
      } else {
        this.styles['text-indent'] = '0'
      }
    },
    setLineHeight(payload) {
      this.styles['line-height'] = payload
    },
    toggleOverflow () {
      if (this.styles['overflow'] == 'hidden') {
        this.styles['overflow'] = 'visible'
      } else {
        this.styles['overflow'] = 'hidden'
      }
    },
    opacityColor(e) {
      this.styles['opacity'] = e.target.value
    },
    toggleTextDecoration() {
      if (this.styles['text-decoration'] == 'none') {
        this.styles['text-decoration'] = 'underline'
      } else {
        this.styles['text-decoration'] = 'none'
      }
    },
    toggleThroughDecoration() {
      if (this.styles['text-decoration'] == 'none') {
        this.styles['text-decoration'] = 'line-through'
      } else {
        this.styles['text-decoration'] = 'none'
      }
    },
    updateBorderColor(e) {
        this.styles['border-color'] = e.target.value
    },
    borderWidth (e) {
        this.styles['border-width'] = e.target.value + 'px'
    },
    borderStyle (style) {
      this.styles['border-style'] = style
    },
  }
}


export default Mixin
