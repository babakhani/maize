<template>
  <b-nav
    class="py-3 px-3">
    <div
      v-for="lang in siteLanguages">
      <b-button
        @click="change(lang)"
        variant="primary"
        class="mr-1"
        size="sm">
        {{ lang }}
      </b-button>  
    </div>
    <b-button
      v-b-modal.modal-1
      class="mr-3"
      variant="success"
      size="sm">
      <icon 
      class="ml-2"
      name="plus" />
      Add New Languages
    </b-button>
    <b-modal 
      @ok="onOK"
      size="sm"
      id="modal-1" 
      :title="$t('languages')">
      <b-form
        class="p-5">
        <b-form-group
          :label="$t('globe.language')">
          <b-form-select 
            v-model="newlang.lang" 
            value-field="lang"
            text-field="title"
            :options="languages"></b-form-select>
        </b-form-group>
      </b-form>
    </b-modal>
  </b-nav>
</template>

<script>
export default {
  name: 'Globaliztion',
  props: {
    name: {
      default: ''
    },
    siteLanguages:{
      type: Array,
      required: false,
      default () {
        return ['fa']
      }
    },
    languages: {
      type: Array,
      required: false,
      default () {
        return [
          {
             title: 'English',
             lang: 'en',
             isRTL: false
          },
          {
             title: 'Persian',
             lang: 'fa',
             isRTL: true 
          },
          {
             title: 'France',
             lang: 'fr',
             isRTL: false 
          },
          {
             title: 'Arabic',
             lang: 'ar',
             isRTL: true
          }
        ]
      }
    }
  },
  data () {
    return {
      newlang: {
        lang: null
      }
    }
  },
  methods: {
    change (lang) {
      console.log('on change lang')
      console.log(lang)
      this.$emit('change', lang)
    },
    onOK () {
      this.siteLanguages.push(this.newlang.lang)   
    }
  }

}
</script>
