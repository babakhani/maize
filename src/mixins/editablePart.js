import EditablePartToolbox from '@/components/partial/EditablePartToolbox'
import {EventBus} from '../events/event-bus'

const Mixin = {
  components: {EditablePartToolbox},
  mounted() {
    EventBus.$on('igotoeditmode', (uid) => {
      if (this._uid != uid) {
        this.toolboxVisible = false
      }
    })
  },
  methods: {
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
