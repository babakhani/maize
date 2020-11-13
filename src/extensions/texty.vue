<template>
  <div>
    <b-btn
      class="m-2"
      :key="`${text}${index}`"
      v-for="(text, index) in sampletexts"
      variant="outline-primary"
      size="sm"
      @click="select(text, true)">
      {{ $t(text) }}
    </b-btn>
  </div>
</template>

<script>
export default {
  name: 'Texty',
  icon: 'life-ring',
  data () {
    return {
      sampletexts: [
        window.faker.commerce.color(),
        window.faker.address.city(),
        window.faker.address.city(),
        window.faker.address.city(),
        window.faker.address.city(),
        window.faker.commerce.department(),
        window.faker.commerce.productAdjective(),
        window.faker.commerce.productMaterial(),
        window.faker.commerce.product(),
        window.faker.commerce.productName(),
        window.faker.company.catchPhraseAdjective(),
        window.faker.company.catchPhraseAdjective(),
        window.faker.company.catchPhraseAdjective(),
        window.faker.company.catchPhraseAdjective(),
        window.faker.company.catchPhraseAdjective(),
        window.faker.company.catchPhraseAdjective(),
        window.faker.company.catchPhraseAdjective(),
        window.faker.company.catchPhraseAdjective(),
        window.faker.company.catchPhraseAdjective(),
        window.faker.company.catchPhraseAdjective(),
        window.faker.company.catchPhraseAdjective(),
        window.faker.company.catchPhraseAdjective(),
        window.faker.company.catchPhraseAdjective(),
        window.faker.company.catchPhraseDescriptor(),
        window.faker.company.catchPhraseDescriptor(),
        window.faker.company.catchPhraseDescriptor(),
        window.faker.company.catchPhraseDescriptor(),
        window.faker.company.catchPhraseDescriptor(),
        window.faker.company.catchPhraseDescriptor(),
        window.faker.company.catchPhraseDescriptor(),
        window.faker.company.catchPhraseDescriptor(),
        window.faker.company.catchPhraseDescriptor(),
        window.faker.company.catchPhraseDescriptor(),
        window.faker.company.catchPhraseDescriptor(),
        window.faker.company.catchPhraseDescriptor(),
        window.faker.company.catchPhraseDescriptor(),
        window.faker.company.catchPhraseDescriptor(),
        window.faker.lorem.words(5),
        window.faker.lorem.words(10),
        window.faker.lorem.words(15),
        window.faker.lorem.words(20),
        window.faker.lorem.words(30),
        window.faker.lorem.words(40)
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
