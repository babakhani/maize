<template>
  <b-modal
    @hidden="onHide"
    @ok="onOk"
    v-model.sync="showModal"
    size="lg"
    centered
    class="image-picker-modal"
    title="Choose your pick:">
    <div>
      <img :class="{'image-picker-modal-selected' : pickedImageSrc == imageItem }"
           class="image-picker-modal--img"
           v-for="imageItem in fakeImagesForTest"
           @click="pick(imageItem)"
           @dblclick="pickAndHide(imageItem)"
           :src="imageItem">
    </div>
  </b-modal>
</template>

<script>
  import {EventBus} from '../../events/event-bus'

  export default {
    name: 'ImagePickerModal',
    methods: {
      pickAndHide(imageSrc) {
        this.pickedImageSrc = imageSrc
        if (this.pickedImageSrc) {
          EventBus.$emit('pickImage', this.pickedImageSrc)
        }
        this.showModal = false
      },
      onHide() {
        this.$store.dispatch('main/setPickImageMode', false)
      },
      onOk() {
        if (this.pickedImageSrc) {
          EventBus.$emit('pickImage', this.pickedImageSrc)
        }
      },
      pick(imageSrc) {
        this.pickedImageSrc = imageSrc
      }
    },
    computed: {
      modalShowGlobalState() {
        return this.$store.state.main.pickImageMode
      }
    },
    data() {
      return {
        showModal: false,
        pickedImageSrc: null,
        fakeImagesForTest: [
          'https://source.unsplash.com/user/erondu/160x90',
          'https://source.unsplash.com/collection/190727/160x90',
          'https://source.unsplash.com/collection/190737/160x90',
          'https://source.unsplash.com/collection/190737/160x90',
          'https://source.unsplash.com/user/erondu/160x90',
          'https://source.unsplash.com/collection/190727/160x90',
          'https://source.unsplash.com/collection/190737/160x90',
          'https://source.unsplash.com/collection/190737/160x90',
          'https://source.unsplash.com/1600x900/?nature,water/160x90',
          'https://source.unsplash.com/user/erondu/160x90',
          'https://source.unsplash.com/collection/190727/160x90',
          'https://source.unsplash.com/collection/190737/160x90',
          'https://source.unsplash.com/collection/190737/160x90',
          'https://source.unsplash.com/1600x900/?nature,water/160x90',
          'https://source.unsplash.com/1600x900/?nature,water/160x90',
          'https://source.unsplash.com/user/erondu/160x90',
          'https://source.unsplash.com/collection/190727/160x90',
          'https://source.unsplash.com/collection/190737/160x90',
          'https://source.unsplash.com/collection/190737/160x90',
          'https://source.unsplash.com/1600x900/?nature,water/160x90',
        ]
      }
    },
    watch: {
      modalShowGlobalState() {
        this.showModal = this.modalShowGlobalState
      }
    }
  }
</script>
