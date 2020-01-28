<template>
  <div class="upload-image-widget py-2 px-3">
    <b-form-input
      type="range"
      :min="1"
      :max="300"
      :step="1"
      @change="select(text)"
      v-model="count"/>
      <p
        class="mt-5 text-justify"
        @dblclick="select(text, true)"
        @click="select(text)">
        {{ text }}
      </p>
  </div>
</template>
<script>
import faker from 'faker'
export default {
  name: 'Lorem',
  icon: false,
  data () {
    return {
      count: 10
    }
  },
  computed: {
    text () {
      return faker.lorem.words(this.count)
    }
  },
  methods: {
    select (pickedText, hide = false) {
      this.$emit('input', pickedText)
      if (hide) {
        this.$emit('done')
      }
    }
  }
}
</script>
