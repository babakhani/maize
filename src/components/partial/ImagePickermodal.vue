<template>
  <b-modal
    @hidden="onHide"
    @ok="onOk"
    v-model.sync="showModal"
    size="lg"
    centered
    class="image-picker-modal"
    title="Choose your pick:">
    <!--Start Modal Tab-->
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#" role="tab"
           aria-controls="nav-home" aria-selected="true">Home</a>
        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#" role="tab"
           aria-controls="nav-profile" aria-selected="false">Profile</a>
        <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#" role="tab"
           aria-controls="nav-contact" aria-selected="false">Contact</a>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        <div class="image-picker-modal--body ">
          <img :class="{'image-picker-modal-selected' : pickedImageSrc == imageItem }"
               class="image-picker-modal--img"
               v-for="imageItem in fakeImagesForTest"
               @click="pick(imageItem)"
               @dblclick="pickAndHide(imageItem)"
               :src="imageItem">
        </div>
      </div>
      <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        insert URL
      </div>
      <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">3</div>
    </div>
    <!--<div class="image-picker-modal&#45;&#45;body ">-->
    <!--<img :class="{'image-picker-modal-selected' : pickedImageSrc == imageItem }"-->
    <!--class="image-picker-modal&#45;&#45;img"-->
    <!--v-for="imageItem in fakeImagesForTest"-->
    <!--@click="pick(imageItem)"-->
    <!--@dblclick="pickAndHide(imageItem)"-->
    <!--:src="imageItem">-->
    <!--</div>-->
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
