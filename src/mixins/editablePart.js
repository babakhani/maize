import EditablePartToolbox from '@/components/partial/EditablePartToolbox'
import {EventBus} from '../events/event-bus'

const Mixin = {
  components: {EditablePartToolbox},
  mounted () {
    if (this.partData) {
      this.touchedData = this.partData
      this.touchedText = this.partData.text
    }
    this.touchedData.cssClass = this.cssClass
    EventBus.$on('igotoeditmode', (uid) => {
      if (this._uid != uid) {
        this.toolboxVisible = false
      }
    })
  },
  computed: {
    editMode () {
      return this.$store ? !this.$store.state.layout.previewMode : false
    },
    selectedItemProperties () {
      return this.$store ? this.$store.state.layout.selectedItemProperties : null
    }
  },
  methods: {
    onblur () {
      console.log('onblur ***************')
      this.showToolboxButton = false
      this.toolboxVisible = false
    },
    mouseLeaveElement (e) {
      clearTimeout(this.hideTooltipTimer)
      if (!this.toolboxVisible) {
        this.hideTooltipTimer = setTimeout(() => {
          this.showToolboxButton = false
        }, 1000)
      }
    },
    mouseInElement (e) {
      clearTimeout(this.hideTooltipTimer)
      if (!this.toolboxVisible) {
        this.showToolboxButton = true
      }
    },
    toggleEditMode () {
      if (this.$parent.toggleEditMode) {
        this.$parent.toggleEditMode()
      }
    },
    goToEditMode () {
      if (this.editMode === false) {
        this.$parent.toggleEditMode()
      }
    },
    updateData (payload) {
      this.$parent.updateData(payload)
    },
    updateWidget () {
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
      clearTimeout(this.hideTooltipTimer)
      this.toolboxVisible = false
      this.showToolboxButton = false
    },
    hideOnEscape (e) {
      if (e.code === 'Escape') {
        this.hideToolbox()
        document.removeEventListener('keyup', this.hideOnEscape)
      }
    },
    showToolbox (e) {
      e.preventDefault()
      this.toolboxVisible = true
      EventBus.$emit('igotoeditmode', this._uid)
      document.addEventListener('keyup', this.hideOnEscape)
    }
  },
  watch: {
    selectedItemProperties () {
      if (this.underEditModeProps) {
        this.updateStyles(this.selectedItemProperties)
      }
    },
    text () {
      this.touchedText = this.text
    },
    partData () {
      if (this.partData) {
        this.touchedData = this.partData
        this.touchedText = this.partData.text
      }
    }
  },
  data () {
    return {
      hideTooltipTimer: null,
      updateTextTimeout: null,
      uniqeKey: null,
      showToolboxButton: false,
      toolboxVisible: false,
      src: null,
      touchedData: {},
      underEditModeProps: false
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
