<template>
  <div>
    <div class="row px-2 py-1">
      <div class="col-6 col-sm-6 col-md-3 col-xl-3 mb-3 image-picker--image-container"
           :key="imageItem"
           v-for="imageItem in randomImageList">
        <div
          class="image-picker--image-thumb-box"
          @click="select(imageItem)"
          @dblclick="select(imageItem, true)"
          :class="{'selected' : value == imageItem }">
          <img
            class="image-picker-modal--img p-2 w-100"
            :src="imageItem">
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Picsum_Samples',
  icon: 'images',
  props: {
    value: {
      type: [Object, Boolean, Array, String],
      required: false
    }
  },
  methods: {
    select (pickedImageSrc, hide = false) {
      this.$emit('input', pickedImageSrc)
      if (hide) {
        this.$emit('done')
      }
    }
  },
  computed: {
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
