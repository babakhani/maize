<template>
  <div>
    <div class="row px-2 py-1"> <div class="col-6 col-sm-6 col-md-3 col-xl-3 mb-3 image-picker--image-container"
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
  data () {
    return {
       randomImageList : []
    }
  },
  mounted () {
    let i = 0
    while (i < 200) {
      this.randomImageList.push(`https://picsum.photos/id/${i}/700/300`)
      i++
    }
  },
  methods: {
    select (pickedImageSrc, hide = false) {
      this.$emit('input', pickedImageSrc)
      if (hide) {
        this.$emit('done')
      }
    }
  }
}
</script>
