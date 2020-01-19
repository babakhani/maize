<template>
  <div class="row px-2 py-1">
    <div class="m-2 h4"
         :key="icon"
         v-for="icon in fontAwesome5">
      <div
        :class="{ 'selected': icon === value }"
        class="icon-selector--item p-1"
        @click="select(icon)"
        @dblclick="select(icon, true)">
        <i
          :class="icon">
        </i>
      </div>
    </div>
  </div>
</template>

<script>
import FontAwesome5 from '../../assets/fontawesome5.json'

export default {
  name: 'FontAwesome',
  icon: 'smile',
  data () {
    return {
      fontAwesome5: FontAwesome5
    }
  },
  props: {
    value: {
      type: [Object, Boolean, Array, String],
      required: false
    }
  },
  methods: {
    select (picked, hide = false) {
      this.$emit('select', picked)
      if (hide) {
        this.$emit('done')
      }
    }
  }
}
</script>
