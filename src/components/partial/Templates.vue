<template>
  <div class="templates">
    <h4 class="mb-5 text-center"> {{ $t('messages.pick_from_templates') }} </h4>
    <b-card-group deck>
      <b-card
        class="pointer template-card"
        v-for="(template, key) in CONFIG.templates"
        @click="setTemplate(template.url)"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;" >
        <img
        class="w-100"
        :src="template.img" />
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

<style lang="scss" scoped>
.template-card {
  position: relative;
  &:hover {
    border: 1px solid $primary-color !important;

  }
  &:active {
    &::before {
       font-size: 3em;
       color: white;
       text-align: center;
       text-shadow:2px 2px rgba(0, 0, 0, 0.6);
       line-height: 180px;
       content: '+';
       background: rgba($primary-color, 0.2);
       top: 0;
       bottom: 0;
       left: 0;
       right: 0;
       position: absolute;
    }
  }
}
</style>
