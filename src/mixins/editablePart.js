import EditablePartToolbox from '@/components/partial/EditablePartToolbox'
import {EventBus} from '../events/event-bus'

const Mixin = {
  components: {EditablePartToolbox},
  created () {
  },
  mounted () {
    this.touchedData.styles = this.cssClass
    this.touchedData = this.partData
    this.touchedText = this.partData.text
    EventBus.$on('igotoeditmode', (uid) => {
      if (this._uid != uid) {
        this.toolboxVisible = false
      }
    })
  },
  computed: {
    editMode () {
      return !this.$store.state.layout.previewMode
    }
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
    updateWidget () {
      console.log('updateWidget -------------')
      console.log(this.touchedData)
      this.$parent.updateData({
        name: this.name,
        data: this.touchedData
      })
    },
    updatePastedText (payload) {
      this.touchedData.text = payload
      this.updateWidget()
    },
    updateTextOnBlur () {
      this.touchedData.text = this.touchedText
      this.updateWidget()
    },
    updateText (e) {
      this.touchedText = e.target.innerText
    },
    updateStyles (e) {
      this.touchedData.styles = e
      this.updateWidget()
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
      toolboxVisible: false,
      src: null,
      styles: {},
      touchedData: {}
    }
  },
  props: {
    partData: {
      default: '',
      required: true
    },
    cssClass: {
      default: () => {
        return {}
      },
      required: false
    },
    text: {
      default: 'please replace me',
      required: false
    },
    name: {
      default: '',
      required: false
    },
    tag: {
      default: 'p',
      required: false
    }
  }
}


export default Mixin
