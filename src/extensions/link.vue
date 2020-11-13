<template>
  <div class="p-5 m-2">
    <div class="form-group">
      <label>{{ $t('settings.url') }}</label>
      <b-form-input
         class="ltr"
         type="text"
         v-model="pickLink"
         @input="select(pickLink)"
         :placeholder="$t('insert_link')">
      </b-form-input>
    </div>
    <div class="form-group">
      <label>{{ $t('settings.page_sections') }}</label>
      <b-form-select
        @change="select(pickLink)"
        v-model="pickLink"
        class="mb-3">
        <option v-for="widget in currentWidgetList"
                :key="widget.uniqeId"
                :value="`#${widget.uniqeId}`">{{ widget.uniqeId }}</option>
      </b-form-select>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Link',
  icon: false,
  props: {
    value: {
      type: [String, Boolean, Object],
      required: false
    }
  },
  mounted () {
    this.pickLink = this.value.href
  },
  data () {
    return {
      pickLink: ''
    }
  },
  watch: {
    value () {
      if (this.value === true) {
        this.pickLink = ''
      } else {
        this.pickLink = this.value.href
      }
    }
  },
  computed: {
    currentWidgetList () {
      return this.$store.state.main.currentWidgetList
    }
  },
  methods: {
    select (pickLink, hide = false) {
      this.$emit('input', {
        ...this.value,
        href: pickLink
      })
      if (hide) {
        this.$emit('done')
      }
    }
  }
}
</script>
