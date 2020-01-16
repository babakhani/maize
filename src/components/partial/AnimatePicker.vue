<template>
  <div class="row px-0 py-0">
    <div class="col-12">
      <b-tabs
        align="center"
        vertical
        pills
        no-fade
        nav-wrapper-class="w-25"
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
              v-model="animate"
              @done="done"
              @select="select" />
          </b-tab>
        </template>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import AnimatePickers from '@/extensions/animatepicker/index.js'

export default {
  name: 'AnimatPicker',
  components: { ...AnimatePickers },
  data () {
    return {
      animate: null,
      animatePicker: AnimatePickers
    }
  },
  mounted () {
    this.animate = this.value
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
