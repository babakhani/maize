<template>
  <b-tabs
    align="center"
    vertical
    pills
    no-fade
    class="mazie-tabs icon-selector"
    card>
    <template v-for="picker in animatePicker" >
      <b-tab
        :key="picker.name"
        class="py-2 px-1">
        <template slot="title">
          <strong> {{ $t(picker.name) }}</strong>
        </template>
        <componenet
          :is="picker"
          @done="done"
          @select="select" />
      </b-tab>
    </template>
  </b-tabs>
</template>

<script>
import AnimatePickers from '@/extensions/textpicker/index.js'

export default {
  name: 'AnimatPicker',
  components: { ...AnimatePickers },
  data () {
    return {
      animatePicker: AnimatePickers
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
