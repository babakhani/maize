import EditablePartToolbox from '@/components/partial/EditablePartToolbox'
import EditablePartSidebar from '../components/partial/EditablePartSidebar'
import {EventBus} from '../events/event-bus'

const Mixin = {
  components: {EditablePartToolbox , EditablePartSidebar},
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
    showPageSidebar () {
      this.$store.dispatch('layout/setPageSideBarIsActive', true)
    },
    mouseLeaveElement (e) {
      clearTimeout(this.showToolboxButtonTimer)
      if (!this.toolboxVisible) {
        this.showToolboxButtonTimer = setTimeout(() => {
          this.showToolboxButton = false
        }, 1000)
      }
    },
    mouseInElement (e) {
      clearTimeout(this.showToolboxButtonTimer)
      if (!this.toolboxVisible) {
        this.showToolboxButton = true
      }
    },
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
      this.showToolboxButton = false
    },
    showToolbox () {
      clearTimeout(this.showToolboxButtonTimer)
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
      showToolboxButton: false,
      showToolboxButtonTimer: null,
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
