<template>
  <div class="upload-image-widget py-2 px-3">
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
import faker from 'faker'
export default {
  name: 'Texty',
  icon: 'life-ring',
  data () {
    return {
      sampletexts: [
        faker.lorem.words(10),
        faker.lorem.words(10),
        faker.lorem.words(10),
        faker.lorem.words(10),
        faker.lorem.words(10),
        faker.lorem.words(10),
        faker.lorem.words(10),
        faker.lorem.words(10)
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
