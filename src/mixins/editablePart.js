import EditablePartToolbox from '@/components/partial/EditablePartToolbox'
import {EventBus} from '../events/event-bus'
const Mixin = {
  components: {EditablePartToolbox},
  mounted() {
    EventBus.$on('igotoeditmode', (uid) => {
      if ( this._uid != uid) {
        this.toolboxVisible = false
      }
    })
  },
  methods: {
    hideToolbox() {
      this.toolboxVisible = false
    },
    showToolbox () {
      this.toolboxVisible = true
      EventBus.$emit('igotoeditmode', this._uid)
    }
  },
  data() {
    return {
      toolboxVisible: false
    }
  },
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
          'overflow': 'visible',
          'letter-spacing': 'normal'
        }
      }
    }
  }
}


export default Mixin
