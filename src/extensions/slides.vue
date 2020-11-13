<template>
  <div class="p-2 pb-5 mb-5">
    <h3>{{ $t("settings.slides") }}</h3>
    <span> {{ $t('messages.drag_image_here') }}</span>
    <input
      type="file"
      class="mb-4"
      @change="imageUpload" />
    <b-list-group v-if="images">
      <b-list-group-item
        v-for="(item, index) in images">
        <img
        width="150"
        :src="item.url" />
        <b-form-input
               class="mt-2"
               v-model="item.alt"/>
        <b-form-input
               class="mt-2"
               v-model="item.caption"/>
          <b-button
            class="mt-2 float-right"
            @click="removeFromList(index)"
            variant="outline-danger">
          {{ $t("remove") }}
        </b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
export default {
  name: 'Slides',
  icon: false,
  props: {
    value: {
      type: [String, Boolean, Object, Array],
      required: false
    }
  },
  mounted () {
    this.getInitialData()
  },
  data () {
    return {
      outData: null,
      images: null
    }
  },
  watch: {
    images: {
      deep: true,
      handler () {
        this.select()
      }
    }
  },
  methods: {
    addToList (file, name) {
      this.images.unshift({
        alt: name,
        url: file
      })
    },
    imageUpload (e) {
      const self = this
      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader()
        reader.onload = function (e) {
          self.addToList(e.target.result)
        }
        reader.readAsDataURL(e.target.files[0])
      }
    },
    removeFromList (index) {
      this.images.splice(index, 1)
    },
    getInitialData () {
      this.outData = this._.cloneDeep(this.value)
      if (this.outData && this.outData.slider && this.outData.slider.images) {
        this.images = this.outData.slider.images
      }
    },
    select () {
      this.outData.slider.images = this.images
      this.$emit('input', this.outData)
    }
  }
}
</script>
