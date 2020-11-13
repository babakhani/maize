<template>
  <div class="upload-image-widget p-5 m-2">
    <p
       @dblclick="select(text, true)"
       @click="select(text)"
       :key="text"
       v-for="text in sampletexts" >
       {{ $t(text) }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Texty',
  icon: 'life-ring',
  data () {
    return {
      sampletexts: [
        window.faker.lorem.words(10),
        window.faker.lorem.words(10),
        window.faker.lorem.words(10),
        window.faker.lorem.words(10),
        window.faker.lorem.words(10),
        window.faker.lorem.words(10),
        window.faker.lorem.words(10),
        window.faker.lorem.words(10)
      ]
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
