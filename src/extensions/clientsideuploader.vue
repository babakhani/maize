<template>
  <div>
    <div class="row px-3 py-1">
      <div class="col-12">
        <b-input-group
          size="md"
          class="w-100 my-3" >
          <b-form-input
            class="ltr"
            @change="onChange"
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
            v-if="false"
            @input="pick"
            :placeholder="$t('settings.image-al-placeholder')"
            v-model="alt"></b-form-input>
        </b-input-group>
      </div>
    </div>
    <div class="upload-image-widget p-5 m-2">
      <div v-if="value"
           class="upload-image-widget--box">
        <img alt="image"
             class="upload-image-widget--box--image"
             :src=value.src>
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
  </div>
</template>

<script>
export default {
  name: 'Clinet_Side_Uploader',
  icon: 'cloud',
  data () {
    return {
      pickedImageSrc: null
    }
  },
  mounted () {
    this.pickedImageSrc = this.value.src
  },
  props: {
    value: {
      type: [Object, Boolean, Array, String],
      required: false
    }
  },
  methods: {
    onChange () {
      this.$emit('input', {
        ...this.value,
        src: this.pickedImageSrc
      })
    },
    upload (file) {
      this.$emit('input', {
        ...this.value,
        src: file
      })
    },
    imageUpload (e) {
      const self = this
      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader()
        reader.onload = function (e) {
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
