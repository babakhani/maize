<template>
  <div class="px-3">
    <b-form-group
      :label="$t('animate.name')">
    <b-form-select
      v-model="animate.name"
      @change="select(animate)"
      :options="animationList"></b-form-select>
    </b-form-group>
    <b-form-group
      :label="$t('animate.easing')">
    <b-form-select
      @change="select(animate)"
      v-model="animate.easing"
      :options="easing"></b-form-select>
    </b-form-group>
    <b-form-group
      :label="$t('animate.delay')">
    <b-input
      type="number"
      @change="select(animate)"
      v-model="animate.delay"/>
    <b-input
      type="range"
      min="0"
      max="3000"
      step="100"
      @change="select(animate)"
      v-model="animate.delay"/>
    </b-form-group>
    <b-form-group
      :label="$t('animate.duration')">
    <b-input
      type="number"
      @change="select(animate)"
      v-model="animate.duration"/>
    <b-input
      type="range"
      min="0"
      max="10000"
      step="100"
      @change="select(animate)"
      v-model="animate.duration"/>
    </b-form-group>
    <b-form-group
      :label="$t('animate.mirror')">
    <b-form-checkbox
      v-model="animate.mirror"
      @change="select(animate)"
      switch
      size="sm">
      {{ $t('animate.mirror') }}
    </b-form-checkbox>
    </b-form-group>
    <b-form-group
      :label="$t('animate.once')">
    <b-form-checkbox
      v-model="animate.once"
      @change="select(animate)"
      switch
      size="sm">
      {{ $t('animate.once') }}
    </b-form-checkbox>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'AOS',
  icon: false,
  data () {
    return {
      animate: {
        name: null,
        delay: 50,
        duration: 1000,
        easing: 'linear',
        mirror: false,
        once: false
      },
      animationList: [
        'no-animate',
        'fade-right',
        'fade-left',
        'fade-up',
        'fade-down',
        'fade-up-left',
        'fade-up-right',
        'fade-down-right',
        'fade-down-left',
        'flip-left',
        'flip-right',
        'flip-up',
        'flip-down',
        'zoom-in',
        'zoom-in-up',
        'zoom-in-down',
        'zoom-in-left',
        'zoom-in-right',
        'zoom-out',
        'zoom-out-up',
        'zoom-out-down',
        'zoom-out-right',
        'zoom-out-left'
      ],
      easing: [
        'linear',
        'ease',
        'ease-in',
        'ease-out',
        'ease-in-out',
        'ease-in-back',
        'ease-out-back',
        'ease-in-out-back',
        'ease-in-sine',
        'ease-out-sine',
        'ease-in-out-sine',
        'ease-in-quad',
        'ease-out-quad',
        'ease-in-out-quad',
        'ease-in-cubic',
        'ease-out-cubic',
        'ease-in-out-cubic',
        'ease-in-quart',
        'ease-out-quart',
        'ease-in-out-quart'
      ]
    }
  },
  props: {
    value: {
      type: [Object, Boolean, Array, String],
      required: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.animate = Object.assign(this.animate, this.value)
    }, 0)
  },
  methods: {
    select (animate, hide = false) {
      this.$emit('input', animate)
      if (hide) {
        this.$emit('done')
      }
    }
  }
}
</script>
