<template>
  <div class="upload-image-widget p-5 m-2">
    <div v-if="src"
         class="upload-image-widget--box">
      <img alt="image"
           class="upload-image-widget--box--image"
           :src='src'>
    </div>
    <div class="" v-else>
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
  name: 'Imgur_Uploader',
  icon: 'cloud',
  data () {
    return {
      src: null
    }
  },
  methods: {
    // https://api.imgur.com/oauth2/addclient
    // https://apidocs.imgur.com/?version=latest#c85c9dfc-7487-4de2-9ecd-66f727cf3139
    upload (file) {
      const self = this
      var myHeaders = new Headers()
      myHeaders.append('Authorization', 'Client-ID 4170f990000f9a5')
      var formdata = new FormData()
      formdata.append('image', file.split(',')[1])
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      }
      fetch('https://api.imgur.com/3/image', requestOptions)
        .then(response => response.text())
        .then(result => JSON.parse(result))
        .then(result => {
          self.$emit('input', result.data.link)
          self.$emit('done')
        })
        .catch(error => console.log('error', error))
    },
    imageUpload (e) {
      const self = this
      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader()
        reader.onload = function (e) {
          self.src = e.target.result
          self.upload(e.target.result)
        }
        reader.readAsDataURL(e.target.files[0])
      }
    }
  }
}
</script>

<style scoped lang="scss">
.image-uploader-tab {
  height: calc(100% - 160px);
}
.upload-image-widget {
  position: relative;
  border: 2px dashed #cccccc;
  color: #bfbfbf;
  background: #f8f8f8;
  //padding: 5%;
  height: 100%;
  overflow: auto;
  text-align: center;
  .upload-image-widget--empty-state {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  span,
  h4,
  h6 {
    color: #777;
  }
  button {
    position: relative;
    cursor: pointer !important;
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer !important;
  }

  .upload-image-widget--box {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 56.25%;
    @media (min-width: 1024px) {
      padding-top: 30%;
      height: 100%;
      top: 0;
    }
  }
  .upload-image-widget--box--image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 100%;
    max-width: 100%;
    bottom: 0;
    right: 0;
    text-align: center;
    font-size: 20px;
    color: white;
    display: block;
    opacity: 1;
    &.upload-image-widget--default {
      opacity: 0;
    }
  }
  svg {
    &.upload-image-widget--icon {
      width: 100px;
      height: 2.2em;
    }
  }
}
</style>
