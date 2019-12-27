<template>
  <!--Start Modal Tab-->
  <b-tabs 
    class="icon-selector"
    card>
    <b-tab active class="py-2">
      <template slot="title">
        <icon class="upload-image-icon"
              name="images"></icon>
        <strong> {{ $t('modal.random_image') }}</strong>
      </template>
      <div class="row px-2 py-1">
        <div class="m-2 h4"
             v-for="icon in fontAwesome5">
          <div
            :class="{ 'selected': icon === preData.iconName }"
            class="icon-selector--item p-1"
            @click="pick(icon)"
            @dblclick="pickAndHide(icon)">
            <i 
            :class="icon">
            </i>
          </div>
        </div>
      </div>
    </b-tab>
    </b-tabs>
</template>

<script>
import { EventBus } from '../../events/event-bus'
import UploadImage from './UploaderImage.vue'
import ImageSaver from '../../service/image-saver'
import FontAwesome5 from '../../assets/fontawesome5.json'

export default {
  name: 'ImagePickerModal',
  components: { UploadImage },
  mounted () {
    this.$store.dispatch('unsplash/loadRandomImages')
  },
  props: {
    preData: {
      type: [Object, Boolean],
      required: false
    }
  },
  methods: {
    pickAndHide (pickedIcon) {
      this.pickedIcon = pickedIcon
      if (this.pickedIcon) {
        this.$emit('pick', this.pickedIcon)
        EventBus.$emit('pickIcon', this.pickedIicon)
      }
    },
    pick (pickedIcon) {
      console.log('pick')
      this.pickedIcon = pickedIcon
      this.$emit('pickandhide', this.pickedIcon)
      EventBus.$emit('pickIcon', this.pickedIcon)
    }
  },
  computed: {
    randomImageList () {
      return this.$store.state.unsplash.imageList
    }
  },
  data () {
    return {
      fontAwesome5: FontAwesome5,
      pickedIcon: null
    }
  }
}
</script>
