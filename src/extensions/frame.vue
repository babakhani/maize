<template>
  <div class="p-2 m-2">
    <div class="form-group">
      <label>{{ $t('settings.url') }}</label>
      <b-form-input type="text"
                    v-model="pickLink"
                    @input="select(pickLink)"
                    :placeholder="$t('insert_link')">
      </b-form-input>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Frame',
  icon: false,
  props: {
    value: {
      type: [Object, String, Boolean],
      required: false
    }
  },
  mounted () {
    this.getInitialData()
  },
  data () {
    return {
      outData: null,
      pickLink: null
    }
  },
  watch: {
  },
  computed: {
    currentWidgetList () {
      return this.$store.state.main.currentWidgetList
    }
  },
  methods: {
    getInitialData () {
      this.outData = this._.cloneDeep(this.value)
      if (this.outData && this.outData.frame && this.outData.frame.href) {
        this.pickLink = this.outData.frame.href
      }
    },
    select (pickLink, hide = false) {
      this.outData.frame.href = this.pickLink
      this.$emit('input', this.outData)
      if (hide) {
        this.$emit('done')
      }
    }
  }
}
</script>
