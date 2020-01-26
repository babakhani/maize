<template>
  <b-tabs
    align="center"
    vertical
    pills
    no-fade
    nav-wrapper-class="w-25"
    card>
    <template v-for="picker in textPickers" >
      <b-tab
        :key="picker.name"
        class="py-2 px-1">
        <template slot="title">
          <strong> {{ $t(picker.name) }}</strong>
        </template>
        <componenet
          :is="picker"
          v-model="innervalue"
          @done="done"
          @select="select" />
      </b-tab>
    </template>
  </b-tabs>
</template>

<script>
import TextPickers from '@/extensions/textpicker/index.js'

export default {
  name: 'TextPicker',
  components: { TextPickers },
  data () {
    return {
      textPickers: TextPickers,
      innervalue: this.value
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
