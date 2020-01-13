<template>
  <div>
    <div class="row px-3 py-1">
      <div class="col-12">
        <b-input-group
          size="md"
          class="w-100 my-3" >
          <b-form-input
            v-model="pickedImageSrc"></b-form-input>
          <b-input-group-append>
            <b-button
            variant="outline-primary"
            @click="pickAndHide(pickedImageSrc)">
              {{ $t('load_url') }}
            </b-button>
            <b-button
            variant="danger"
            @click="pickAndHide(null)">
              {{ $t('delete') }}
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </div>
    </div>
    <b-tabs
      align="center"
      vertical
      pills
      no-fade
      class="mazie-tabs"
      v-model="getDefaultTabIndex"
      card>
      <template v-for="picker in imagePickers" >
        <b-tab
          :key="picker.name"
          class="py-2 px-1">
          <template slot="title">
            <icon
              v-if="picker.icon"
              class="upload-image-icon"
              :name="picker.icon"></icon>
            <strong> {{ $t(picker.name) }}</strong>
          </template>
          <componenet
            :is="picker"
            v-model="pickedImageSrc"
            @done="done"
            @select="select" />
        </b-tab>
      </template>
    </b-tabs>
  </div>
</template>
<script>
import ImagePickers from '@/extensions/imagepicker/index.js'

export default {
  name: 'ImagePickerModal',
  components: { ImagePickers },
  data () {
    return {
      imagePickers: ImagePickers,
      pickedImageSrc: null
    }
  },
  mounted () {
    this.pickedImageSrc = this.value
  },
  props: {
    value: {
      type: [Object, Boolean, Array, String],
      required: false
    }
  },
  methods: {
    select (e) {
      this.pick(e)
    },
    done () {
      this.$emit('hide')
    },
    pickAndHide (pickedImageSrc) {
      this.pickedImageSrc = pickedImageSrc
      this.$emit('input', pickedImageSrc)
      this.$emit('hide')
    },
    pick (pickedImageSrc) {
      this.pickedImageSrc = pickedImageSrc
      this.$emit('input', pickedImageSrc)
    }
  },
  computed: {
    getDefaultTabIndex: {
      set () {

      },
      get () {
        return (this.pickedImageSrc && this.pickedImageSrc.indexOf('imgur.com')) >= 0 ? 1 : 0
      }
    },
    randomImageList () {
      return [
        'https://picsum.photos/id/1/700/300',
        'https://picsum.photos/id/2/700/300',
        'https://picsum.photos/id/3/700/300',
        'https://picsum.photos/id/4/700/300',
        'https://picsum.photos/id/5/700/300',
        'https://picsum.photos/id/6/700/300',
        'https://picsum.photos/id/7/700/300',
        'https://picsum.photos/id/8/700/300',
        'https://picsum.photos/id/9/700/300',
        'https://picsum.photos/id/10/700/300',
        'https://picsum.photos/id/11/700/300'
      ]
    }
  }
}
</script>
