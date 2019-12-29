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
    name: 'UploadImage',
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
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Client-ID 4170f990000f9a5");
        var formdata = new FormData();
        formdata.append("image", file.split(',')[1]);
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };
        fetch("https://api.imgur.com/3/image", requestOptions)
          .then(response => response.text())
          .then(result => JSON.parse(result))
          .then(result => {
            self.$emit('chooseImage', result.data.link)
          })
          .catch(error => console.log('error', error));
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
