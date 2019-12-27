<template>
  <b-tabs card>
    <b-tab active>
      <template slot="title">
        <icon class="upload-image-icon"
              name="images"></icon>
        <strong> {{ $t('modal.pick_link') }}</strong>
      </template>
      <div class="form-group">
        <label>{{ $t('settings.url') }}</label>
        <b-form-input type="text"
                      v-model="pickLinkCurrent"
                      :placeholder="$t('insert_link')">
        </b-form-input>
      </div>
      <div class="form-group">
        <label>{{ $t('settings.page_sections') }}</label>
        <b-form-select v-model="pickLinkCurrent" class="mb-3">
          <option v-for="widget in currentWidgetList"
                  :value="`#${widget.uniqeId}`">{{ widget.uniqeId }}</option> 
        </b-form-select>
      </div>
    </b-tab>
  </b-tabs>
</template>

<script>
import { EventBus } from '../../events/event-bus'
import UploadImage from './UploaderImage.vue'

export default {
  name: 'LinkPickerModal',
  data () {
    return {
      innerLink: null
    }
  },
  methods: {
    onHide () {
      this.$store.dispatch('layout/setPickLinkMode', false)
    },
    onOk (e) {
      e.preventDefault()
      EventBus.$emit('pickLink', this.pickLinkCurrent)
      this.onHide()
      return false
    }
  },
  computed: {
    pickLinkCurrent: {
      get () {
        return this.$store.state.layout.pickLinkCurrent
      },
      set (value) {
        this.$store.dispatch('layout/setPickLinkCurrent', value)
      }
    },
    currentWidgetList: {
      get () {
        return this.$store.state.main.currentWidgetList
      },
      set (value) {
        this.$store.dispatch('main/sortCurrentWidgetList', value)
      }
    },
    showModal: {
      get () {
        return this.$store.state.layout.pickLinkType
      },
      set (value) {
        this.$store.dispatch('layout/setPickLinkMode', value)
      }
    }
  }
}
</script>
