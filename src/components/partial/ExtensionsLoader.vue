<template>
  <div>
    <b-tabs
      align="center"
      vertical
      pills
      no-fade
      nav-wrapper-class="w-25"
      card>
      <template 
      v-if="extensions.includes(extension.name)"
      v-for="extension in settingsExtensions" >
      <b-tab
        :key="extension.name"
        class="py-2 px-1">
        <template slot="title">
          <icon
            v-if="extension.icon"
            class="upload-image-icon"
            :name="extension.icon"></icon>
          <strong> {{ $t(extension.name) }}</strong>
        </template>
        <componenet
          v-if="extensionsData"
          :is="extension"
          v-model="extensionsData"
          @done="done"
          @input="select" />
      </b-tab>
      </template>
    </b-tabs>
  </div>
</template>
<script>
import SettingsExtensions from '@/extensions/index.js'

export default {
  name: 'ImagePickerModal',
  components: { SettingsExtensions },
  data () {
    return {
      settingsExtensions: SettingsExtensions,
      extensionsData: null
    }
  },
  mounted () {
    this.extensionsData = this.value
  },
  props: {
    extensions: {
      type: [Array],
      required: true
    },
    value: {
      type: [Object, Boolean, Array, String],
      required: true 
    }
  },
  methods: {
    select (e) {
      const data = this._.extend(this.extensionsData, e)
      this.$emit('input', data)
    },
    done () {
      this.$emit('hide')
    }
  }
}
</script>
