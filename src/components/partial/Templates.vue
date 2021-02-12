<template>
  <div class="templates">
    <h3 class="mb-5 text-center"> {{ $t('messages.pick_from_templates') }} </h3>
    <b-card-group deck>
      <b-card
        v-for="(template, key) in CONFIG.templates"
        @click="setTemplate(template.url)"
        :title="key"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;" >
        <pre>
        {{ template.url }}
        </pre>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'Templates',
  computed: {
    pageData () {
      return this.$store.state.main.page
    }
  },
  methods: {
    setTemplate (templateUrl) {
      fetch(templateUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('HTTP error ' + response.status)
          }
          return response.json()
        })
        .then(json => {
          if (this.pageData.widgets.length == 0) {
            this.$store.dispatch('main/updateSettings', json.settings)
            this.$store.dispatch('main/updateCurrentWidgetList', json.widgets)
            this.$notify({
              group: 'all',
              title: '',
              type: 'success',
              text: this.$t('messages.pick_from_templates_success')
            })
          } else {
            this.$notify({
              group: 'all',
              title: '',
              type: 'warn',
              text: this.$t('messages.icant_pick_from_templates')
            })
          }
        })
        .catch(function () {
          this.dataError = true
        })
    }
  }
}
</script>

<style lang="scss"></style>
