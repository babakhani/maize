<template>
  <div class="upload-image-widget">
    <div v-if="src"
         class="upload-image-widget--box">
      <img alt="image"
           class="upload-image-widget--box--image"
           :src='src'>
    </div>
    <div class="upload-image-widget--empty-state" v-else>
      <h1>
        <icon class="upload-image-widget--icon"
              size="lg"
              name="upload"></icon>
      </h1>
      <h4 class="mt-4 p-2">
        {{ $t('modal.drop_image') }}
      </h4>
      <br>
      <h6 class="p-1 mb-0">
        {{ $t('modal.or') }}
      </h6>
      <br>
      <button class="btn btn-lg btn-link">
        <span>{{ $t('modal.choose_your_image') }}</span>
      </button>
    </div>
    <input class=""
           @change="imageUpload"
           type="file"/>
  </div>
</template>

<script>
  export default {
    name: 'UploadImage',
    data () {
      return {
        src: null
      }
    },
    methods: {
      imageUpload (e) {
        const self = this
        if (e.target.files && e.target.files[0]) {
          var reader = new FileReader()
          reader.onload = function (e) {
            self.src = e.target.result
            self.$emit('chooseImage', e.target.result)
          }
          reader.readAsDataURL(e.target.files[0])
        }
      }
    }
  }
</script>
