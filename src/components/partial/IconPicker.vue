<template>
  <b-tabs
    align="center"
    vertical
    pills
    no-fade
    nav-wrapper-class="w-25"
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

<style lang="scss" >
.icon-selector {
  .icon-selector--item {
    display: block;
    width: 1.8em;
    height: 1.8em;
    position: relative;
    &:hover {
      background: rgba($primary-color, .1);
      cursor: pointer;
      outline: 2px solid $primary-color;
    }
    &.selected {
      outline: 2px solid $primary-color;
      background: rgba($primary-color, .1);
    }
    i {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
