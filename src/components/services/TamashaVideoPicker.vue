<template>
  <div>
    <div class="col-12 text-center mb-4 image-picker-modal--search-box">
      <!--TODO: i18n-->
      <div class="image-picker-modal--search-box--input">
        <b-input-group>
          <b-form-input v-model="searchQuery"
                        type="text"
                        @input="loadSearchResult"
                        placeholder="Search video here">
          </b-form-input>
          <b-input-group-append>
            <b-btn variant="search" @click="loadSearchResult" class="loadSearchResult">
              <icon name="search"></icon>
            </b-btn>
          </b-input-group-append>
        </b-input-group>
      </div>
    </div>
    <div class="row">
      <div class="col-12 modal-video-picker--box">
        <div v-if="videoLoading" class="video-loading">

          <h1 class="video-loading--text">loading...</h1>

        </div>
        <div class="image-picker-modal--body p-3">
          <div class="row">
            <div class="col-6 col-sm-6 col-md-3 col-xl-3 h-100 image-picker-modal--image-container"

                 v-for="videoItem in videoList">
              <div class="image-picker-modal--image-thumb-box"

                   @click="pick(videoItem)"
                   @dblclick="pickAndHide(videoItem)">
                <img
                  class="image-picker-modal--img p-2"
                  :src="videoItem.thumbnailUrl">
                <p class="image-picker-modal--image--caption">{{videoItem.title}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!--<div class="row">-->

    <!--</div>-->

  </div>
</template>

<script>
  import axios from 'axios'
  import Icon from "../../../node_modules/vue-awesome/components/Icon";

  export default {
    components: {Icon},
    name: 'TeamWidget1',
    data () {
      return {
        videoLoading: false,
        videoList: [],
        searchQuery: null
      }
    },
    mounted () {
      this.loadSearchResult('z')
    },
    props: {
      sourceType: {
        default: 'thumb'
      }
    },
    methods: {
      getData (payload) {
        if (this.sourceType == 'embed') {
          return `http://tamasha.com/embed/${payload.id}`
        } else {
          return payload.thumbnailUrl
        }
      },
      pick (payload) {
        this.$emit('pick', this.getData(payload))
      },
      pickAndHide (payload) {
        this.$emit('pickAndHide', this.getData(payload))
      },
      loadSearchResult () {
        this.videoLoading = true
        axios.get(`http://nightlyapi.tamasha.com/api/v1/videos?query=${this.searchQuery}`)
          .then((response) => {
            this.videoList = response.data.data
            this.videoLoading = false
          })
          .catch(function (error) {
          });

      }
    }
  }
</script>
