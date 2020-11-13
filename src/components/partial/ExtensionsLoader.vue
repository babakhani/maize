<template>
  <div>
    <b-tabs
      @activate-tab="onTabChanged"
      align="center"
      vertical
      pills
      no-fade
      nav-wrapper-class="w-25"
      card>
      <template
      v-for="extension in settingsExtensions" >
      <b-tab
        :active="lastSeenTab === extension.name"
        v-if="extensions.includes(extension.name)"
        :key="extension.name"
        class="py-2 px-1">
        <template slot="title">
          <icon
            v-if="extension.icon"
            class="upload-image-icon"
            :name="extension.icon"></icon>
          <strong>  {{$t(`extension.${extension.name}`) }}</strong>
        </template>
        <componenet
          v-if="extensionsData || extensionsData === ''"
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
  name: 'ExtensionLoader',
  components: { SettingsExtensions },
  data () {
    return {
      settingsExtensions: SettingsExtensions,
      lastSeenTab: null,
      extensionsData: null
    }
  },
  mounted () {
    this.extensionsData = this.value
    this.lastSeenTab = window.localStorage.getItem('extenstionsTabHistory')
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
  watch: {
    value: {
      deep: true,
      handler () {
        this.extensionsData = this.value
      }
    }
  },
  methods: {
    onTabChanged (e, a) {
      window.localStorage.setItem('extenstionsTabHistory', this.extensions[e])
    },
    select (e) {
      this.$emit('input', e)
    },
    done () {
      this.$emit('hide')
    }
  }
}
</script>
