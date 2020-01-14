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
            @click="pickAndHide(' ')">
              {{ $t('delete') }}
            </b-button>
          </b-input-group-append>
        </b-input-group>
        <b-input-group
          size="sm"
          class="w-100 my-3" >
          <b-form-input
            @input="pick"
            :placeholder="$t('image_alt')"
            v-model="alt"></b-form-input>
        </b-input-group>
      </div>
    </div>
    <b-tabs
      align="center"
      vertical
      pills
      no-fade
      class="mazie-tabs"
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
      alt: null,
      pickedImageSrc: null
    }
  },
  mounted () {
    console.log(this.value)
    this.pickedImageSrc = this.value.src
    this.alt = this.value.alt
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
    pickAndHide () {
      this.value.src = this.pickedImageSrc
      this.value.alt = this.alt 
      this.$emit('input',this.value)
      this.$emit('hide')
    },
    pick () {
      this.value.src = this.pickedImageSrc
      this.value.alt = this.alt 
      this.$emit('input',this.value)
    }
  }
}
</script>
