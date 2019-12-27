import IconEditable from '@/components/editable-parts/Icon.vue'
import TextEditable from '@/components/editable-parts/Text.vue'
import ImageEditable from '@/components/editable-parts/Image.vue'
import VideoEditable from '@/components/editable-parts/Video.vue'
import BgEditable from '@/components/editable-parts/Bg.vue'
import PlayerEditable from '@/components/editable-parts/Player.vue'
import WidgetToolbox from '../components/partial/WidgetToolbox'
import faker from 'faker'

const Mixin = {
  components: {IconEditable, TextEditable, ImageEditable, BgEditable, WidgetToolbox, VideoEditable, PlayerEditable},
  name: 'EventBody',
  data () {
    return {
      fullWidth: false,
      touchedData: {}
    }
  },
  beforeCreate () {
    this.faker = Object.assign(faker, {
      icon: {
        normal (name = 'fa-tree', color = '333', width = 48, height = 48) {
          return `https://imgplaceholder.com/${width}x${height}/transparent/${color}/${name}`
        }
      },
      img: {
        size (width = 300, height = 300) {
          return `https://picsum.photos/${width}/${height}`
        },
        big () {
          return 'imgs/wide.jpg'
        },
        tall () {
          return 'imgs/tall.jpg'
        },
        icon () {
          return 'imgs/img_square_1.svg'
        },
        wide () {
          return 'imgs/wider.jpg'
        },
        rounded () {
          return 'imgs/img_circle_300.png'
        },
        logo () {
          return 'imgs/img_logo.png'
        },
        customer_1 () {
          return 'imgs/customers/adobe.svg'
        },
        customer_2 () {
          return 'imgs/customers/discovery.svg'
        },
        customer_3 () {
          return 'imgs/customers/ebay.svg'
        },
        customer_4 () {
          return 'imgs/customers/samsung.svg'
        },
        customer_5 () {
          return 'imgs/customers/orange.svg'
        },
        customer_6 () {
          return 'imgs/customers/salesforce.svg'
        }
      },
      footer: {
        copyright () {
          return '© 2018 Maize. All Rights Reserved'
        }
      }
    })
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
    editMode: {
      default: false,
      require: false
    },
    demoMode: {
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
    updateData (e = {name: null, data: null}) {
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
