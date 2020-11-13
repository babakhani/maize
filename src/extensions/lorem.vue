<template>
  <div class="upload-image-widget m-2">
    <b-form-input
      type="range"
      :min="1"
      :max="300"
      :step="1"
      @change="select(text)"
      v-model="count"/>
      <p
        class="mt-5"
        @dblclick="select(text, true)"
        @click="select(text)">
        {{ text }}
      </p>
  </div>
</template>
<script>
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
      return window.faker.lorem.words(this.count)
    }
  },
  props: {
    value: {
      type: [Object, Boolean, Array, String],
      required: false
    }
  },
  methods: {
    select (text, hide = false) {
      this.$emit('input', {
        ...this.value,
        text: text
      })
      if (hide) {
        this.$emit('done')
      }
    }
  }
}
</script>
