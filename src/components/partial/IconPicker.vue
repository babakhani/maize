<template>
  <b-tabs
    align="center"
    vertical
    pills
    no-fade
    class="mazie-tabs icon-selector"
    card>
    <template v-for="picker in iconPickers" >
      <b-tab
        :key="picker.name"
        class="py-2 px-1">
        <template slot="title">
          <icon
            v-if="picker.icon"
            class="upload-image-icon"
            :name="picker.icon"></icon>
          <strong> {{ $t(picker.name) }}</strong>
        </template>
        <componenet
          :is="picker"
          v-model="value"
          @done="done"
          @select="select" />
      </b-tab>
    </template>
  </b-tabs>
</template>

<script>
import IconPickers from '@/extensions/iconpicker/index.js'

export default {
  name: 'IconPicker',
  components: { IconPickers },
  data () {
    return {
      iconPickers: IconPickers
    }
  },
  props: {
    value: {
      type: [Object, Boolean, Array, String],
      required: false
    }
  },
  methods: {
    select (e) {
      this.$emit('input', e)
    },
    done () {
      this.$emit('hide')
    }
  }
}
</script>
