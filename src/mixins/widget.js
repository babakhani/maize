import TextEditable from '@/components/editable-parts/Text.vue'
import ImageEditable from '@/components/editable-parts/Image.vue'
import VideoEditable from '@/components/editable-parts/Video.vue'
import BgEditable from '@/components/editable-parts/Bg.vue'
import PlayerEditable from '@/components/editable-parts/Player.vue'
import WidgetToolbox from '../components/partial/WidgetToolbox'
import faker from 'faker'

const Mixin = {
  components: {TextEditable, ImageEditable, BgEditable, WidgetToolbox, VideoEditable, PlayerEditable},
  name: 'EventBody',
  data () {
    return {
      editMode: false,
      fullWidth: false,
      touchedData: {}
    }
  },
  beforeCreate () {
    this.faker = $.extend(faker, {
      img: {
        big () {
          return '/static/imgs/colors_wide_1.jpg'
        },
        tall () {
          return '/static/imgs/img_tall.png'
        },
        icon () {
          return '/static/imgs/img_square_1.svg'
        },
        wide () {
          return '/static/imgs/img_very_wide.svg'
        },
        rounded () {
          return '/static/imgs/img_round.svg'
        },
        logo () {
          return '/static/imgs/img_logo.png'
        },
        customer_1 () {
          return '/static/imgs/customers/adobe.svg'
        },
        customer_2 () {
          return '/static/imgs/customers/discovery.svg'
        },
        customer_3 () {
          return '/static/imgs/customers/ebay.svg'
        },
        customer_4 () {
          return '/static/imgs/customers/samsung.svg'
        },
        customer_5 () {
          return '/static/imgs/customers/orange.svg'
        },
        customer_6 () {
          return '/static/imgs/customers/salesforce.svg'
        },
      },
      footer: {
        copyright () {
          return '© 2018 Maize. All Rights Reserved'
        },
      }
    })
  },
  mounted () {
    this.touchedData = this._.extend(this.defaultData, this.widgetData)
  },
  computed: {
    notFullWidth () {
       return this.touchedData.config && !this.touchedData.config.fullWidth
    },
    previewMode () {
      if (this.$store) {
        return this.$store.state.main.previewMode
      } else {
        return null
      }
    }
  },
  watch: {
    previewMode () {
      if (this.previewMode) {
        this.editMode = false
      }
    },
    widgetData () {
      this.touchedData = this._.extend(this.defaultData, this.widgetData)
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
    },
    toggleEditMode () {
      this.editMode = !this.editMode
    },
    imageUpload (e) {
      const $img = $(e.target).next('img')
      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $img.attr('src', e.target.result);
        }
        reader.readAsDataURL(e.target.files[0]);
      }
    }
  }
}

export default Mixin
