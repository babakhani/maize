<template>
  <!--Start Modal Tab-->
  <b-tabs 
    class="icon-selector"
    card>
    <b-tab active class="py-2">
      <template slot="title">
        <icon class="upload-image-icon"
              name="images"></icon>
        <strong> {{ $t('modal.random_image') }}</strong>
      </template>
      <div class="row px-2 py-1">
        <div class="m-2 h4"
             v-for="icon in fontAwesome5">
          <div
            :class="{ 'selected': icon === picked }"
            class="icon-selector--item p-1"
            @click="pick(icon)"
            @dblclick="pickAndHide(icon)">
            <i 
            :class="icon">
            </i>
          </div>
        </div>
      </div>
    </b-tab>
    </b-tabs>
</template>

<script>
import { EventBus } from '../../events/event-bus'
import FontAwesome5 from '../../assets/fontawesome5.json'

export default {
  name: 'IconPicker',
  data () {
    return {
      fontAwesome5: FontAwesome5,
      picked: null
    }
  },
  mounted () {
    this.picked = this.value
  },
  props: {
    value: {
      type: [Object, Boolean, Array, String],
      required: false
    }
  },
  methods: {
    pickAndHide (picked) {
      this.picked = picked
      this.$emit('input', picked)
      this.$emit('hide')
    },
    pick (picked) {
      this.picked = picked
      this.$emit('input', picked)
    }
  },
}
</script>
