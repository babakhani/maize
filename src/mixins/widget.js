import TextEditable from '@/components/editable-parts/Text.vue'
import ImageEditable from '@/components/editable-parts/Image.vue'
import BgEditable from '@/components/editable-parts/Bg.vue'
import WidgetToolbox from '../components/partial/WidgetToolbox'

const Mixin = {
  components: {TextEditable, ImageEditable, BgEditable, WidgetToolbox},
  name: 'EventBody',
  data() {
    return {
      editMode: false,
      fullWidth: false
    }
  },
  props: {
    uniqeKey: {
      default: null,
      require: true
    },
    widgetData: {
      default() {
        return {}
      },
      require: false
    }
  },
  methods: {
    toggleFullWidth() {
      this.fullWidth = !this.fullWidth
    },
    deleteWidget() {
      console.log('deleteWidget')
      console.log(this.$options.name)
      this.$store.dispatch('main/removeFromCurrentWidgetList', this.$options.name)
    },
    toggleEditMode() {
      console.log('toggleEditMode')
      this.editMode = !this.editMode
    },
    imageUpload(e) {
      console.log('imageUpload')
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
