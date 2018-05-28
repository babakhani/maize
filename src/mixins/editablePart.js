import EditablePartToolbox from '@/components/partial/EditablePartToolbox'
import {EventBus} from '../events/event-bus'

const Mixin = {
  components: {EditablePartToolbox},
  created () {
    this.touchedStyle = this.text
    this.touchedStyle = this.styles
  },
  mounted () {
    this.touchedText = this.text
    EventBus.$on('igotoeditmode', (uid) => {
      if (this._uid != uid) {
        this.toolboxVisible = false
      }
    })
  },
  methods: {
    toggleEditMode () {
      this.$parent.toggleEditMode()
    },
    goToEditMode () {
      if (this.editMode === false)
        this.$parent.toggleEditMode()
      // this.$emit('goToEditMode')
    },
    updateData (payload) {
      this.$parent.updateData(payload)
    },
    updateWidget (payload) {
      // this.$emit('update', payload)
      this.$parent.updateData(payload)
    },
    updatePastedText (payload) {
      this.touchedText = payload
      this.updateWidget({
        name: this.name,
        data: {
          text: this.touchedText
        }
      })
    },
    updateTextOnBlur () {
      this.updateWidget({
        name: this.name,
        data: {
          text: this.touchedText
        }
      })
    },
    updateText (e) {
      this.touchedText = e.target.innerText
    },
    updateStyles (e) {
      this.touchedStyle = e
      this.updateWidget({
        name: this.name,
        data: {
          styles: this.touchedStyle
        }
      })
    },
    hideToolbox () {
      this.toolboxVisible = false
    },
    showToolbox () {
      this.toolboxVisible = true
      EventBus.$emit('igotoeditmode', this._uid)
    }
  },
  watch: {
    text () {
      this.touchedText = this.text
    }
  },
  data () {
    return {
      updateTextTimeout: null,
      uniqeKey: null,
      touchedStyle: {},
      toolboxVisible: false
    }
  },
  props: {
    text: {
      default: "please replace me",
      required: false
    },
    src: {
      default: null,
      require: false
    },
    tag: {
      default: 'p',
      required: false
    },
    name: {
      default: false
    },
    editMode: {
      default: false
    },
    styles: {
      default () {
        return {}
      }
    }
  }
}


export default Mixin
