<template>
  <div>
    <div class="col-12 text-center mb-4 image-picker-modal--search-box">
        <!--TODO: i18n-->
        <b-form-input @input="loadSearchResult"
                      type="text"
                      placeholder="Search video here">

        </b-form-input>
      </div>
    <div class="row">

    </div>
    <div class="image-picker-modal--body">
      <div class="row">
        <div class="col-6 col-sm-6 col-md-3 col-xl-3 h-100 image-picker-modal--image-container"
             v-for="videoItem in videoList">
          <div class="image-picker-modal--image-thumb-box"
               @click="pick(videoItem)"
               @dblclick="pickAndHide(videoItem)">
            <img
              class="image-picker-modal--img p-2"
              :src="videoItem.thumbnailUrl">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'TeamWidget1',
    data () {
      return {
        videoList: []
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
      loadSearchResult (query) {
        axios.get(`http://nightlyapi.tamasha.com/api/v1/videos?query=${query}`)
          .then((response) => {
            this.videoList = response.data.data
          })
          .catch(function (error) {
          });

      }
    }
  }
</script>
