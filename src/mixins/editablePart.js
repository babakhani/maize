import EditablePartToolbox from '@/components/partial/EditablePartToolbox'
import {EventBus} from '../events/event-bus'

const Mixin = {
  components: {EditablePartToolbox},
  created () {
    this.touchedStyle = this.styles
  },
  mounted() {
    EventBus.$on('igotoeditmode', (uid) => {
      if (this._uid != uid) {
        this.toolboxVisible = false
      }
    })
  },
  methods: {
    updateText(e) {
      this.touchedText = e.target.innerText
      this.update()
    },
    updateStyles(e) {
      this.touchedStyle = e
      this.update()
    },
    update() {
      this.$emit('update', {
        name: this.name,
        data: {
          styles: this.touchedStyle,
          text: this.touchedText,
          src: this.src
        }
      })
    },
    hideToolbox() {
      this.toolboxVisible = false
    },
    showToolbox() {
      this.toolboxVisible = true
      EventBus.$emit('igotoeditmode', this._uid)
    }
  },
  data() {
    return {
      touchedStyle: {},
      toolboxVisible: false
    }
  },
  props: {
    name: {
      default: false
    },
    editMode: {
      default: false
    },
    styles: {
      default() {
        return {}
      }
    }
  }
}


export default Mixin
