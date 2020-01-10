<template>
  <div>
    <b-input-group size="sm" >
      <b-input-group-prepend v-if="statics">
        <b-button
          v-for="item in statics"
          :key="item"
          @click="setStatic(item)"
          :variant="output === item ? 'primary' : 'outline-primary' ">
          {{ item }}
        </b-button>
      </b-input-group-prepend>
      <b-form-input
        @input="update"
        type="number"
        v-model="output" >
      </b-form-input>
      <b-input-group-append>
        <b-button
          :disabled="disableNumerals"
          v-if="units.includes('%')"
          @click="setUnit('%')"
          :variant="innerunit === '%' ? 'primary' : 'outline-primary' ">%</b-button>
        <b-button
          :disabled="disableNumerals"
          v-if="units.includes('px')"
          @click="setUnit('px')"
          :variant="innerunit === 'px' ? 'primary' : 'outline-primary' ">px</b-button>
      </b-input-group-append>
    </b-input-group>
    <b-form-input
        v-if="range"
        @input="update"
        type="range"
        :min="min"
        :max="max"
        :step="step"
        v-model="output"/>
  </div>
</template>
<script>
export default {
  name: 'CssInput',
  props: {
    statics: {
      type: [Array, Boolean],
      default: false
    },
    range: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number]
    },
    units: {
      type: Array,
      default () { return ['px', '%'] }
    },
    unit: {
      type: String,
      default: 'px'
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    nounit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      disableNumerals: false,
      output: '',
      innerunit: this.unit
    }
  },
  watch: {
    value () { this.setPre() }
  },
  mounted () {
    this.setPre()
  },
  methods: {
    setPre () {
      if (this.statics && this.statics.includes(this.value)) {
        this.disableNumerals = true
        this.output = this.value
      } else if (this.value && this.value !== '') {
        this.disableNumerals = false
        let propRe = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/
        let parts = this.value.toString().match(propRe)
        if (parts) {
          this.output = parts[1]
          this.innerunit = parts[2]
        }
      } else {
        this.disableNumerals = false
        this.output = this.value
      }
    },
    setStatic (e) {
      this.output = e
      this.$emit('change', e)
    },
    update () {
      if (this.nounit) {
        this.$emit('change', this.output)
      } else {
        this.$emit('change', this.output + this.innerunit)
      }
    },
    setUnit (e) {
      this.innerunit = e
      this.update()
    }
  }
}
</script>
