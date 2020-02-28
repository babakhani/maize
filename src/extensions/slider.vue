<template>
  <div class="p-2 m-2">
    <h3>{{ $t("settings.slider") }}</h3>
    <b-form 
       v-if="sliderConfig">
      <b-form-group
        :label="$t('slider.autoplay')">
        <b-form-checkbox v-model="sliderConfig.autoplay" name="check-button" switch>
          {{ $t('slider.autoplay') }}
        </b-form-checkbox>
      </b-form-group>
      <b-form-group
        :label="$t('slider.arrows')">
        <b-form-checkbox v-model="sliderConfig.arrows" name="check-button" switch>
          {{ $t('slider.arrows') }}
        </b-form-checkbox>
      </b-form-group>
      <b-form-group
        :label="$t('slider.accessibility')">
        <b-form-checkbox v-model="sliderConfig.accessibility" name="check-button" switch>
          {{ $t('slider.accessibility') }}
        </b-form-checkbox>
      </b-form-group>
      <b-form-group
        :label="$t('slider.mobileFirst')">
        <b-form-checkbox v-model="sliderConfig.mobileFirst" name="check-button" switch>
          {{ $t('slider.mobileFirst') }}
        </b-form-checkbox>
      </b-form-group>
      <b-form-group
        :label="$t('slider.touchMove')">
        <b-form-checkbox v-model="sliderConfig.touchMove" name="check-button" switch>
          {{ $t('slider.touchMove') }}
        </b-form-checkbox>
      </b-form-group>
      <b-form-group
        :label="$t('slider.dots')">
        <b-form-checkbox v-model="sliderConfig.dots" name="check-button" switch>
          {{ $t('slider.dots') }}
        </b-form-checkbox>
      </b-form-group>
      <b-form-group
        :label="$t('slider.swipeToSlide')">
        <b-form-checkbox v-model="sliderConfig.swipeToSlide" name="check-button" switch>
          {{ $t('slider.swipeToSlide') }}
        </b-form-checkbox>
      </b-form-group>
      <b-form-group
        :label="$t('slider.draggable')">
        <b-form-checkbox v-model="sliderConfig.draggable" name="check-button" switch>
          {{ $t('slider.draggable') }}
        </b-form-checkbox>
      </b-form-group>
      <b-form-group
        :label="$t('slider.vertical')">
        <b-form-checkbox v-model="sliderConfig.vertical" name="check-button" switch>
          {{ $t('slider.vertical') }}
        </b-form-checkbox>
      </b-form-group>
      <b-form-group
        :label="$t('slider.lazyLoad')">
        <b-form-checkbox v-model="sliderConfig.lazyLoad" name="check-button" switch>
          {{ $t('slider.lazyLoad') }}
        </b-form-checkbox>
      </b-form-group>
      <b-form-group
        :label="$t('slider.infinite')">
        <b-form-checkbox v-model="sliderConfig.infinite" name="check-button" switch>
          {{ $t('slider.infinite') }}
        </b-form-checkbox>
      </b-form-group>
      <b-form-group
        :label="$t('slider.fade')">
        <b-form-checkbox v-model="sliderConfig.fade" name="check-button" switch>
          {{ $t('slider.fade') }}
        </b-form-checkbox>
      </b-form-group>
      <b-form-group
        :label="`${$t('slider.rows')}  (${sliderConfig.rows})`">
        <b-form-input 
        v-model="sliderConfig.rows" 
        step="1"
        min="1" 
        max="30"
        type="range">
        </b-form-input>
      </b-form-group>
      <b-form-group
        :label="`${$t('slider.slidesToShow')}  (${sliderConfig.slidesToShow})`">
        <b-form-input 
        v-model="sliderConfig.slidesToShow" 
        step="1"
        min="1" 
        max="30"
        type="range">
        </b-form-input>
      </b-form-group>
      <b-form-group
        :label="`${$t('slider.slidesToScroll')}  (${sliderConfig.slidesToScroll})`">
        <b-form-input 
        v-model="sliderConfig.slidesToScroll" 
        step="1"
        min="1" 
        max="30"
        type="range">
        </b-form-input>
      </b-form-group>
      <b-form-group
        :label="`${$t('slider.speed')}  (${sliderConfig.speed})`">
        <b-form-input 
        v-model="sliderConfig.speed" 
        step="100"
        min="100" 
        max="1000"
        type="range">
        </b-form-input>
      </b-form-group>
      <b-form-group
        :label="`${$t('slider.autoplay_speed')}  (${sliderConfig.autoplayspeed})`">
        <b-form-input 
        v-model="sliderConfig.autoplayspeed" 
        step="1000"
        min="1000" 
        max="500000"
        type="range">
        </b-form-input>
      </b-form-group>
      <b-btn
        @click="select">
          Submit
      </b-btn>
    </b-form>
  </div>
</template>
<script>
export default {
  name: 'Slider',
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
      sliderConfig: null,
      outData: null
    }
  },
  watch: {
    sliderConfig :{
      deep: true,
      handler () {
        this.select()
      }
    }
  },
  methods: {
    getInitialData () {
      this.outData = this._.cloneDeep(this.value)
      if(this.outData && this.outData.slider && this.outData.slider.config) {
        this.sliderConfig = this.outData.slider.config
      }
    },
    select () {
      this.outData.slider.config = this.sliderConfig
      this.$emit('input', this.outData)
    }
  }
}
</script>

