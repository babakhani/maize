<template>
  <b-tabs card>
    <b-tab active>
      <template slot="title">
        <icon class="upload-image-icon" name="images"></icon>
        <strong> {{ $t('modal.pick_map_position') }}</strong>
      </template>
      <b-form-group 
        :description="$t('messages.google_map_iframe_extract')">
        <label>{{ $t('settings.src') }}</label>
        <b-form-textarea
          id="textarea"
          @input="updatePreData"
          v-model="pickFrameSrc"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
          ></b-form-textarea>
      </b-form-group>
    </b-tab>
  </b-tabs>
</template>

<script>
import { EventBus } from '../../events/event-bus'

export default {
  name: 'MapPicker',
  data () {
    return {
      pickFrameSrc: ''
    }
  },
  mounted () {
    this.pickFrameSrc = this.value
  },
  props: {
    value: {
      type: [Object, Boolean, Array, String],
      required: false
    }
  },
  methods: {
    updatePreData () {
      this.$emit('input', this.exportedFrameSrc)
    }
  },
  computed: {
    exportedFrameSrc () {
      let out = null
      if (this.pickFrameSrc) {
        let test = this.pickFrameSrc.match('/(?<=src=").*?(?=[\"])/')
        if (test && test.length > 0) {
          out = test[0]
        }
      }
      return out
    },
    currentWidgetList () {
      return this.$store.state.main.currentWidgetList
    }
  }
}
</script>
