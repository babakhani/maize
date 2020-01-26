<template>
  <div class="p-5 m-2">
    <div class="form-group">
      <label>{{ $t('settings.url') }}</label>
      <b-form-input type="text"
                    v-model="pickLink"
                    @input="updatePreData"
                    :placeholder="$t('insert_link')">
      </b-form-input>
    </div>
    <div class="form-group">
      <label>{{ $t('settings.page_sections') }}</label>
      <b-form-select
        @change="updatePreData"
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
  data () {
    return {
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
