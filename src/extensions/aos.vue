<template>
  <div class="px-3">
    <b-form-group
      :label="$t('animate.name')">
      <b-row>
        <b-col
          cols="2"
          class="mb-2"
          v-for="anime in animationList">
          <b-button
          :variant="animate.name == anime ? 'primary' : 'light'"
          class="btn-block box-shadow"
          @click="setName(anime)">
            <b-card-text>
              {{ anime }}
            </b-card-text>
          </b-button>
        </b-col>
      </b-row>
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
      class="mt-3"
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
      class="mt-3"
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
    this.$forceUpdate()
  },
  watch: {
    value () {
      this.animate = Object.assign(this.animate, this.value.animate)
    }
  },
  methods: {
    setName (i) {
      this.animate.name = i
      this.select(this.animate)
    },
    select (animate, hide = false) {
      this.$emit('input', {
        ...this.value,
        animate: animate
      })
      if (hide) {
        this.$emit('done')
      }
    }
  }
}
</script>
