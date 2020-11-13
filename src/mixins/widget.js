import IconEditable from '@/components/editable-parts/Icon.vue'
import TextEditable from '@/components/editable-parts/Text.vue'
import ImageEditable from '@/components/editable-parts/Image.vue'
import BgEditable from '@/components/editable-parts/Bg.vue'
import ButtonEditable from '@/components/editable-parts/Button.vue'
import MapEditable from '@/components/editable-parts/Map.vue'
import WidgetToolbox from '@/components/partial/WidgetToolbox'
import Store from '@/store'

const Mixin = {
  components: { MapEditable, ButtonEditable, IconEditable, TextEditable, ImageEditable, BgEditable, WidgetToolbox },
  name: 'EventBody',
  data () {
    return {
      fullWidth: false,
      touchedData: {}
    }
  },
  beforeCreate () {
    this.siteSettings = this._.cloneDeep(Store.getters['main/settings'])
  },
  mounted () {
    this.touchedData = this._.extend(this.defaultData, this.widgetData)
  },
  computed: {
    notFullWidth () {
      return this.touchedData.config && !this.touchedData.config.fullWidth
    }
  },
  watch: {
    widgetData () {
      this.touchedData = Object.assign(this.defaultData, this.widgetData)
    }
  },
  props: {
    // TODO: merge widget data expect default pattern
    widgetData: {
      default () {
        return {}
      },
      require: false
    },
    uniqeKey: {
      default: null,
      require: true
    },
    demoMode: {
      default: false,
      require: false
    },
    editMode: {
      default: false,
      require: false
    }
  },
  methods: {
    moveUp () {
      this.$store.dispatch('main/moveWidget', {
        direction: 'up',
        key: this.uniqeKey
      })
    },
    moveDown () {
      this.$store.dispatch('main/moveWidget', {
        direction: 'down',
        key: this.uniqeKey
      })
    },
    updateWidget (data) {
      this.touchedData = this._.extend(this.touchedData, data)
      this.$store.dispatch('main/updateWidgetByUniqeId', {
        key: this.uniqeKey, // id of this widget in cuurentWidgetList
        data: data
      })
    },
    updateData (e = { name: null, data: null }) {
      this.$store.dispatch('main/updateItemOfCurrentWidgetList', {
        key: this.uniqeKey, // id of this widget in cuurentWidgetList
        name: e.name, // name of editble part that his data must be update
        data: e.data
      })
    },
    toggleFullWidth () {
      this.touchedData.config.fullWidth = !this.touchedData.config.fullWidth
      this.updateData({
        name: 'config',
        data: {
          fullWidth: this.touchedData.config.fullWidth
        }
      })
    },
    deleteWidget () {
      this.$store.dispatch('main/removeFromCurrentWidgetList', this.uniqeKey)
    }
  }
}

export default Mixin
