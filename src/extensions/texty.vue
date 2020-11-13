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
