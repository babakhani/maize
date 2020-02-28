<template>
  <div class="p-2">
    <h3>{{ $t("settings.slides") }}</h3>
    <b-list-group v-if="images">
      <b-list-group-item
        v-for="(item, index) in images">
        <img 
        width="150"
        :src="item.url" />
        Cras justo odio
        <b-button
          @click="removeFromList(index)"
          class="float-right"
          variant="outline-danger">
          {{ $t("remove") }}
        </b-button>
      </b-list-group-item>
    </b-list-group>
    <b-button
      variant="outline-success"
      class="mt-3">
      {{ $t("add_slide") }}
    </b-button>
  </div>
</template>
<script>
export default {
  name: 'Slides',
  icon: false,
  props: {
    value: {
      type: [String, Boolean, Object, Array],
      required: false
    }
  },
  mounted () {
    this.getInitialData()
  },
  data () {
    return {
      outData: null,
      images: null
    }
  },
  watch: {
    images :{
      deep: true,
      handler () {
        this.select()
      }
    }
  },
  methods: {
    removeFromList (index) {
      this.images.splice(index, 1)
    },
    getInitialData () {
      this.outData = this._.cloneDeep(this.value)
      if(this.outData && this.outData.slider && this.outData.slider.images) {
        this.images = this.outData.slider.images
      }
    },
    select () {
      this.outData.slider.images = this.images
      this.$emit('input', this.outData)
    }
  }
}
</script>

