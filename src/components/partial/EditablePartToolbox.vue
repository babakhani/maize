<template>
  <div
    @dblclick="(e) => {e.stopPropagation()}"
    class="widget-text-editable--toolbox">
    <slot name="toolbox" > </slot>
    <div
      v-if="visibileTextSelector"
      class="widget-text-editable--toolbox--group">
      <button :title="$t('toolbox.text')"
      v-b-tooltip.hover.top.small
      @click="openExtensions('text', ['Lorem', 'Editor', 'Texty'])"
      class="btn btn-sm widget-text-editable--toolbox--button">
        <icon name="life-ring" />
      </button>
      <div
        class="widget-text-editable--toolbox--group-title">
        {{ $t('toolbox.text') }}
      </div>
    </div>
    <div
      v-if="visibileTextSelector"
      class="widget-text-editable--toolbox--group-separator"></div>
    <div
      v-if="visibileImageSelector"
      class="widget-text-editable--toolbox--group">
      <button :title="$t('toolbox.image_picker')"
      v-b-tooltip.hover.top.small
      @click="openExtensions('src', ['StreamLine_Samples', 'Picsum_Samples', 'Clinet_Side_Uploader'])"
      class="btn btn-sm widget-text-editable--toolbox--button">
        <icon name="image" />
      </button>
      <div
        class="widget-text-editable--toolbox--group-title">
        {{ $t('toolbox.image') }}
      </div>
    </div>
    <div
      v-if="visibileImageSelector"
      class="widget-text-editable--toolbox--group-separator"></div>
    <div
      v-if="visibileIconSelector"
      class="widget-text-editable--toolbox--group">
      <button :title="$t('toolbox.icon_picker')"
      v-b-tooltip.hover.top.small
      @click="openExtensions('iconName', ['FontAwesomePicker'])"
      class="btn btn-sm widget-text-editable--toolbox--button">
        <icon name="smile" />
      </button>
      <div
        class="widget-text-editable--toolbox--group-title">
        {{ $t('toolbox.icon') }}
      </div>
    </div>
    <div
      v-if="visibileIconSelector"
      class="widget-text-editable--toolbox--group-separator"></div>

    <div
      v-if="visibileLinkSelector"
      class="widget-text-editable--toolbox--group">
      <button :title="$t('toolbox.link')"
      v-b-tooltip.hover.top.small
      @click="openExtensions('href', ['Link'])"
      class="btn btn-sm widget-text-editable--toolbox--button">
        <icon name="link" />
      </button>
      <div
        class="widget-text-editable--toolbox--group-title">
        {{ $t('toolbox.link') }}
      </div>
    </div>
    <div
      v-if="visibileLinkSelector"
      class="widget-text-editable--toolbox--group-separator"></div>

    <!-- Animate Settings -->
    <!-- ---------------------------------------------------------------------------- -->
    <div
      class="widget-text-editable--toolbox--group">
      <div
        class="widget-text-editable--toolbox--group-title">
        {{ $t('toolbox.animate') }}
      </div>
      <button :title="$t('toolbox.animate')"
        v-b-tooltip.hover.top.small
        @click="openExtensions('animate', ['AOS'])"
        :class="{'widget-text-editable--selected': styles['font-weight'] === 'bold'}"
        class="btn btn-sm widget-text-editable--toolbox--button">
        <icon name="forward" />
      </button>
    </div>
    <div
      class="widget-text-editable--toolbox--group-separator"></div>

    <!-- Background Settings -->
    <!-- ---------------------------------------------------------------------------- -->
    <div
      v-if="groups.indexOf('background') > -1"
      class="widget-text-editable--toolbox--group">
      <div
        class="widget-text-editable--toolbox--group-title">
        {{ $t('toolbox.background') }}
      </div>
      <b-dropdown
        :title="$t('toolbox.background')"
        v-b-tooltip.hover.top.small
        size="sm"
        class="">
        <template v-slot:button-content>
          <icon name="fill-drip" />
          <div
            :style="{'background-color': styles['background-color']}"
            class="color-indicator"></div>
        </template>
        <b-dropdown-text>
          <div
            @click="(e) => {e.stopPropagation()}"
            aria-labelledby="dropdownMenuButtonBgColor">
            <color-picker
              :value="styles['background-color']"
              @input="updateBgColor">
            </color-picker>
          </div>
        </b-dropdown-text>
      </b-dropdown>
      <template
        v-if="groups.indexOf('backgroundimage') > -1">
        <b-dropdown
          :title="$t('toolbox.background_size')"
          v-b-tooltip.hover.top.small
          size="sm"
          class="">
          <template v-slot:button-content>
            <icon name="external-link-alt" />
          </template>
          <b-dropdown-item
            :class="{'widget-text-editable--selected': styles['background-size'] === 'cover'}"
            @click="setBgSize('cover')"> {{ $t('toolbox.cover') }}
          </b-dropdown-item>
          <b-dropdown-item
            :class="{'widget-text-editable--selected': styles['background-size'] === 'contain'}"
            @click="setBgSize('contain')">
            {{ $t('toolbox.contain') }}
          </b-dropdown-item>
          <b-dropdown-item
            :class="{'widget-text-editable--selected': styles['background-size'] === 'auto'}"
            @click="setBgSize('auto')">{{ $t('toolbox.auto') }}
          </b-dropdown-item>
        </b-dropdown>

        <b-dropdown
          :title="$t('toolbox.background_repeat')"
          v-b-tooltip.hover.top.small
          size="sm"
          class="">
          <template v-slot:button-content>
            <icon name="object-ungroup" />
          </template>
          <b-dropdown-item
            :class="{'widget-text-editable--selected': styles['background-repeat'] === 'no-repeat'}"
            @click="setBgRepeat('no-repeat')">
            {{ $t('toolbox.no-repeat') }}
          </b-dropdown-item>
          <b-dropdown-item
            :class="{'widget-text-editable--selected': styles['background-repeat'] === 'repeat'}"
            @click="setBgRepeat('repeat')">
            {{ $t('toolbox.repeat') }}
          </b-dropdown-item>
          <b-dropdown-item
            :class="{'widget-text-editable--selected': styles['background-repeat'] ===
                                   'repeat-x'}"
            @click="setBgRepeat('repeat-x')">
            {{ $t('toolbox.repeat-x') }}
          </b-dropdown-item>
          <b-dropdown-item
            :class="{'widget-text-editable--selected': styles['background-repeat'] ===
                                   'repeat-y'}"
            @click="setBgRepeat('repeat-y')">
            {{ $t('toolbox.repeat-y') }}
          </b-dropdown-item>
        </b-dropdown>

        <b-dropdown
          :title="$t('toolbox.background_position')"
          v-b-tooltip.hover.top.small
          size="sm"
          class="">
          <template v-slot:button-content>
            <icon name="th" />
          </template>
          <div class="px-2" style="width: 320px">
            <b-form-group>
              <label> {{ $t('toolbox.background_position_x') }} </label>
              <CssInput
                :units="['%', 'px']"
                :statics="['center', 'right', 'left']"
                v-model="backgroundPositionX"
                @change="setBackgroundPositionX" />
              <label class="mt-2" > {{ $t('toolbox.background_position_y') }} </label>
              <CssInput
                :units="['%', 'px']"
                :statics="['center', 'top', 'bottom']"
                v-model="backgroundPositionY"
                @change="setBackgroundPositionY" />
            </b-form-group>
          </div>
        </b-dropdown>

        <button :title="$t('toolbox.background_image')"
                v-b-tooltip.hover.top.small
                class="btn btn-sm widget-text-editable--toolbox--button"
                @click="pickBackgroundImage">
          <icon name="image" />
        </button>
      </template>
    </div>
    <div
      v-if="groups.indexOf('background') > -1"
      class="widget-text-editable--toolbox--group-separator"></div>

    <!-- Text Settings -->
    <!-- ---------------------------------------------------------------------------- -->
    <template
      v-if="groups.indexOf('text') > -1">
      <div class="widget-text-editable--toolbox--group">
        <div
          class="widget-text-editable--toolbox--group-title">
          {{ $t('toolbox.text') }}
        </div>

        <!-- Color -->
        <b-dropdown
          :title="$t('toolbox.font-color')"
          v-b-tooltip.hover.top.small
          size="sm"
          class="">
          <template v-slot:button-content>
            <icon name="paint-brush" />
            <div
              :style="{'background-color': styles['color']}"
              class="color-indicator"></div>
          </template>
          <b-dropdown-text>
            <div
              @click="(e) => {e.stopPropagation()}"
              aria-labelledby="dropdownMenuButtonColor">
              <color-picker :value="styles['color']"
              @input="updateColor">
              </color-picker>
            </div>
          </b-dropdown-text>
        </b-dropdown>

        <!--Font Family -->
        <b-dropdown
          :title="$t('toolbox.font-family')"
          v-b-tooltip.hover.top.small
          size="sm"
          class="">
          <template v-slot:button-content>
            <icon name="font"/>
          </template>
          <b-dropdown-item
            v-for="font in fonts"
            :key="font"
            :class="{'widget-text-editable--selected': styles['font-family'] === 'font'}"
            @click="setFontFamily(font)">
            {{ $t(font) }}
          </b-dropdown-item>
        </b-dropdown>

        <!--Font Size -->
        <b-dropdown
          :title="$t('toolbox.font-size')"
          v-b-tooltip.hover.top.small
          size="sm"
          class="">
          <template v-slot:button-content>
            <i class="fas fa-text-height" />
          </template>
          <b-dropdown-item :class="{'widget-text-editable--selected': styles['font-size'] === '44px'}"
               @click="setSize('44px')">{{$t('toolbox.x-large')}}</b-dropdown-item>
          <b-dropdown-item :class="{'widget-text-editable--selected': styles['font-size'] === '18px'}"
               @click="setSize('18px')">{{$t('toolbox.large')}}</b-dropdown-item>
          <b-dropdown-item :class="{'widget-text-editable--selected': styles['font-size'] === '16px'}"
               @click="setSize('16px')">{{$t('toolbox.Medium')}}</b-dropdown-item>
          <b-dropdown-item :class="{'widget-text-editable--selected': styles['font-size'] === '14px'}"
               @click="setSize('14px')">{{$t('toolbox.small')}}</b-dropdown-item>
          <b-dropdown-item :class="{'widget-text-editable--selected': styles['font-size'] === '12px'}"
               @click="setSize('12px')">{{$t('toolbox.x-small')}}</b-dropdown-item>
          <b-dropdown-item :class="{'widget-text-editable&#45;&#45;selected':
                                         styles['font-size'] === '10px'}"
               @click="setSize('10px')">{{$t('toolbox.xx-small')}}</b-dropdown-item>
        </b-dropdown>
        <!-- Bold -->
        <button :title="$t('toolbox.bold')"
               v-b-tooltip.hover.top.small
               @click="toggleBold()"
               :class="{'widget-text-editable--selected': styles['font-weight'] === 'bold'}"
               class="btn btn-sm widget-text-editable--toolbox--button">
          <icon name="bold" />
        </button>
        <!-- UnderLine -->
        <button :title="$t('toolbox.underline')"
                v-b-tooltip.hover.top.small
                @click="toggleTextDecoration()"
                :class="{'widget-text-editable--selected': styles['text-decoration'] === 'underline'}"
                class="btn btn-sm widget-text-editable--toolbox--button">
          <icon name="underline" />
        </button>
        <button :title="$t('toolbox.line-through')"
                v-b-tooltip.hover.top.small
                @click="toggleThroughDecoration()"
                :class="{'widget-text-editable--selected': styles['text-decoration'] === 'line-through'}"
                class="btn btn-sm widget-text-editable--toolbox--button">
          <icon name="strikethrough" />
        </button>

        <!--Alignment-->
        <b-dropdown
          :title="$t('toolbox.alignment')"
          v-b-tooltip.hover.top.small
          size="sm"
          class="">
          <template v-slot:button-content>
            <icon name="align-center"/>
          </template>
          <b-dropdown-item title="align left"
                           @click="align('left')"
                           :class="{'widget-text-editable--selected': styles['text-align'] ==
                                          'left'}">
            <icon name="align-left"/>
          </b-dropdown-item>
          <b-dropdown-item title="align right"
                           @click="align('right')"
                           :class="{'widget-text-editable--selected': styles['text-align'] ==
                                          'right'}">
            <icon name="align-right"/>
          </b-dropdown-item>
          <b-dropdown-item title="align center"
                           @click="align('center')"
                           :class="{'widget-text-editable--selected': styles['text-align'] ==
                                          'center'}">
            <icon name="align-center"/>
          </b-dropdown-item>
          <b-dropdown-item title="align justify"
                           @click="align('justify')"
                           :class="{'widget-text-editable--selected': styles['text-align'] ==
                                          'justify'}">
            <icon name="align-justify"/>
          </b-dropdown-item>
        </b-dropdown>

        <!-- Line Space!-->
        <b-dropdown
          :title="$t('toolbox.line-space')"
          v-b-tooltip.hover.top.small
          size="sm"
          class="">
          <template v-slot:button-content>
            <maizcon name="line-space"></maizcon>
          </template>
          <b-dropdown-item :class="{'widget-text-editable--selected': styles['line-height'] === '1em'}"
                     @click="setLineHeight('1em')">1</b-dropdown-item>
          <b-dropdown-item :class="{'widget-text-editable--selected': styles['line-height'] === '1.2em'}"
                     @click="setLineHeight('1.2em')">1.2</b-dropdown-item>
          <b-dropdown-item :class="{'widget-text-editable--selected': styles['line-height'] === '1.5e'}"
                     @click="setLineHeight('1.5em')">1.5</b-dropdown-item>
          <b-dropdown-item :class="{'widget-text-editable--selected': styles['line-height'] === '2em'}"
                     @click="setLineHeight('2em')">2</b-dropdown-item>
          <b-dropdown-item :class="{'widget-text-editable--selected': styles['line-height'] === '3em'}"
                     @click="setLineHeight('3em')">3</b-dropdown-item>
        </b-dropdown>

        <button :class="{'widget-text-editable--selected': styles['text-indent'] != '0'}"
                     :title="$t('toolbox.indent')"
                     v-b-tooltip.hover.top.small
                     @click="toggleTextIndent()"
                     class="btn btn-sm widget-text-editable--toolbox--button">
          <icon name="indent" />
        </button>

        <!--TODO: ask reza about direction-->
        <b-dropdown
          :title="$t('toolbox.direction')"
          v-b-tooltip.hover.top.small
          size="sm"
          class="">
          <template v-slot:button-content>
            <icon name="exchange-alt"/>
          </template>
          <b-dropdown-item
            :class="{'widget-text-editable--selected': styles['direction'] === 'auto'}"
            @click="setDirection('auto')">AUTO</b-dropdown-item>
          <b-dropdown-item
            :class="{'widget-text-editable--selected': styles['direction'] === 'rtl'}"
            @click="setDirection('rtl')">RTL</b-dropdown-item>
          <b-dropdown-item
            :class="{'widget-text-editable--selected': styles['direction'] === 'ltr'}"
            @click="setDirection('ltr')">LTR</b-dropdown-item>
        </b-dropdown>
      </div>
    </template>
    <div
      v-if="groups.indexOf('text') > -1"
      class="widget-text-editable--toolbox--group-separator"></div>

    <!-- Border Settings -->
    <!-- ---------------------------------------------------------------------------- -->
    <template
      v-if="groups.indexOf('border') > -1">
      <div class="widget-text-editable--toolbox--group">
        <div
          class="widget-text-editable--toolbox--group-title">
          {{ $t('toolbox.border') }}
        </div>
        <b-dropdown
          :title="$t('toolbox.border-color')"
          v-b-tooltip.hover.top.small
          size="sm"
          class="">
          <template v-slot:button-content>
            <maizcon name="border-color"></maizcon>
            <div
              :style="{'background-color': styles['border-color']}"
              class="color-indicator"></div>
          </template>
          <b-dropdown-text
            @click="(e) => {e.stopPropagation()}"
            aria-labelledby="dropdownMenuButtonBorderColor">
            <color-picker :value="styles['border-color']"
            @input="updateBorderColor">
            </color-picker>
          </b-dropdown-text>
        </b-dropdown>
        <b-dropdown
          :title="$t('toolbox.border-width')"
          v-b-tooltip.hover.top.small
          size="sm"
          class="">
          <template v-slot:button-content>
            <icon name="square" />
          </template>
          <div class="px-2">
            <CssInput
              :units="['px']"
              v-model="styles['border-width']"
              @change="setBorderWidth" />
          </div>
        </b-dropdown>

        <b-dropdown
          :title="$t('toolbox.border-style')"
          v-b-tooltip.hover.top.small
          size="sm"
          class="">
          <template v-slot:button-content>
            <maizcon name="border-style"></maizcon>
          </template>
          <b-dropdown-item :class="{'widget-text-editable--selected': styles['border-style']
                                    === 'none'}"
                     @click="setBorderStyle('none')">{{ $t('none') }}</b-dropdown-item>
          <b-dropdown-item :class="{'widget-text-editable--selected': styles['border-style']
                                    === 'solid'}"
                     @click="setBorderStyle('solid')">{{ $t('solid') }}</b-dropdown-item>
          <b-dropdown-item :class="{'widget-text-editable--selected': styles['border-style']
                                    === 'dashed'}"
                     @click="setBorderStyle('dashed')">{{ $t('dashed') }}</b-dropdown-item>
          <b-dropdown-item :class="{'widget-text-editable--selected': styles['border-style']
                                    === 'double'}"
                     @click="setBorderStyle('double')">{{ $t('double') }}</b-dropdown-item>
          <b-dropdown-item :class="{'widget-text-editable--selected': styles['border-style']
                                    === 'dotted'}"
                     @click="setBorderStyle('dotted')">{{ $t('dotted') }}</b-dropdown-item>
        </b-dropdown>

      </div>
    </template>
    <div
      v-if="groups.indexOf('border') > -1"
      class="widget-text-editable--toolbox--group-separator"></div>

    <!-- General Settings -->
    <!-- ---------------------------------------------------------------------------- -->
    <template
      v-if="groups.indexOf('general') > -1">
      <div class="widget-text-editable--toolbox--group">
        <div
          class="widget-text-editable--toolbox--group-title">
          {{ $t('toolbox.general') }}
        </div>

        <b-dropdown
          :title="$t('toolbox.opacity')"
          v-b-tooltip.hover.top.small
          size="sm"
          class="">
          <template v-slot:button-content>
            <icon name="burn"/>
          </template>
          <div class="px-2">
            <CssInput
              :units="[]"
              :nounit="true"
              :min="0"
              :max="1"
              :step=".1"
              :range="true"
              v-model="styles['opacity']"
              @change="setOpacityColor" />
          </div>
        </b-dropdown>

        <b-dropdown
          :title="$t('toolbox.border_radius')"
          v-b-tooltip.hover.top.small
          size="sm"
          class="">
          <template v-slot:button-content>
            <icon name="circle-notch" />
          </template>
          <div class="px-2">
            <CssInput
              :units="['px', '%']"
              v-model="styles['border-radius']"
              @change="setBorderRadius" />
          </div>
        </b-dropdown>

        <b-dropdown
          :title="$t('toolbox.width')"
          v-b-tooltip.hover.top.small
          size="sm"
          class="">
          <template v-slot:button-content>
            <maizcon name="width"></maizcon>
          </template>
          <div class="px-2">
            <CssInput
              unit="%"
              :units="['px', '%']"
              v-model="styles['width']"
              @change="setWidth" />
          </div>
        </b-dropdown>

        <b-dropdown
          :title="$t('toolbox.height')"
          v-b-tooltip.hover.top.small
          size="sm"
          class="">
          <template v-slot:button-content>
            <maizcon name="height"></maizcon>
          </template>
          <div class="px-2">
            <CssInput
              unit="%"
              :units="['px', '%']"
              v-model="styles['height']"
              @change="setHeight" />
          </div>
        </b-dropdown>

        <b-dropdown
          :title="$t('toolbox.margin')"
          v-b-tooltip.hover.top.small
          size="sm"
          class="">
          <template v-slot:button-content>
            <maizcon name="margin"></maizcon>
          </template>
          <div
            class="px-2"
            @click="(e) => {e.stopPropagation()}" >
            <label> {{ $t('toolbox.padding_y') }} </label>
            <CssInput
              :units="['px', '%']"
              v-model="styles['padding-top']"
              @change="setPaddingY" />
            <label> {{ $t('toolbox.padding_x') }} </label>
            <CssInput
              :units="['px', '%']"
              v-model="styles['padding-right']"
              @change="setPaddingX" />
            <label class="mt-3"> {{ $t('toolbox.margin_y') }} </label>
            <CssInput
              :units="['px', '%']"
              v-model="styles['margin-top']"
              @change="setMarginY" />
            <label> {{ $t('toolbox.margin_x') }} </label>
            <CssInput
              :units="['px', '%']"
              v-model="styles['margin-right']"
              @change="setMarginX" />
          </div>
        </b-dropdown>
      </div>
    </template>
    <b-button
      @click="hide"
      class="btn btn-info btn-sm float-right widget-text-editable--toolbox--close">
      <icon name="times"/>
    </b-button>
  </div>
</template>
<script>
import maizcon from '../partial/MaizeCon.vue'
import { EventBus } from '../../events/event-bus'
import { Sketch } from 'vue-color'
import CssInput from './CssInput.vue'
export default {
  name: 'EditablePartToolbox',
  components: {
    CssInput,
    'maizcon': maizcon,
    'color-picker': Sketch
  },
  data () {
    return {
      backgroundPositionX: 0,
      backgroundPositionY: 0
    }
  },
  mounted () {
    this.backgroundPositionX = this.styles['background-position']
      ? this.styles['background-position'].split(' ')[1] : 0
    this.backgroundPositionY = this.styles['background-position']
      ? this.styles['background-position'].split(' ')[0] : 0
  },
  computed: {
    fonts () {
      return window.CONFIG.fonts[this.locale]
    },
    locale () {
      return this.$store.state.locale.current
    }
  },
  props: {
    visibileTextSelector: {
      default: false,
      required: false
    },
    visibileImageSelector: {
      default: false,
      required: false
    },
    visibileIconSelector: {
      default: false,
      required: false
    },
    visibileLinkSelector: {
      default: false,
      required: false
    },
    groups: {
      default () {
        return ['text', 'background', 'border', 'general']
      },
      required: false
    },
    partData: {
      default: true,
      required: false
    },
    styles: {
      default () {
        return {
          'color': 'default',
          'background-color': 'default',
          'border-color': 'default'
        }
      }
    }
  },
  created () {
    this.styles = this._.extend(this.styles, this.partData.styles)
  },
  methods: {
    openExtensions (dataKey, extensionsList) {
      this.$store.dispatch('layout/setModalView', {
        name: 'extensionloader',
        extensions: extensionsList,
        data: this.partData
      })
      EventBus.$once('UPDATE_WIDGET_DATA', (widgetData) => {
        if (widgetData) {
          this.$emit('update', widgetData)
        }
      })
      return false
    },
    getBgURL () {
      let out = null
      if (this.styles['background-image']) {
        out = this.styles['background-image'].match(/\((.*?)\)/)[1].replace(/('|")/g, '')
      }
      return out
    },
    pickBackgroundImage () {
      this.$store.dispatch('layout/setModalView', {
        name: 'extensionloader',
        extensions: ['Picsum_Samples', 'Clinet_Side_Uploader'],
        data: this.getBgURL() ? this.getBgURL() : ' '
      })
      EventBus.$once('UPDATE_WIDGET_DATA', (widgetData) => {
        if (widgetData) {
          this.styles['background-image'] = `url('${widgetData}')`
          this.update()
        }
      })
      return false
    },
    update () {
      //  TODO: send only changed data to update methods
      this.$emit('update', {
        ...this.partData,
        styles: this.styles
      })
      this.$forceUpdate()
    },
    hide (e) {
      e.preventDefault()
      setTimeout(() => {
        this.$emit('hide')
      }, 100)
      return false
    },
    toggleBold () {
      if (this.styles['font-weight'] === 'bold') {
        this.styles['font-weight'] = 'normal'
      } else {
        this.styles['font-weight'] = 'bold'
      }
      this.update()
    },
    updateColor (e) {
      if (this.firstTimeUpdateColor) {
        this.styles['color'] = `rgba(${e.rgba.r},${e.rgba.g},${e.rgba.b},${e.rgba.a})`
      } else {
        e.rgba.a = 1
        this.styles['color'] = `rgba(${e.rgba.r},${e.rgba.g},${e.rgba.b},${e.rgba.a})`
        this.firstTimeUpdateColor = true
      }
      this.update()
    },
    updateBgColor (e) {
      if (this.firstTimeUpdateBgColor) {
        this.styles['background-color'] = `rgba(${e.rgba.r},${e.rgba.g},${e.rgba.b},${e.rgba.a})`
      } else {
        e.rgba.a = 1
        this.styles['background-color'] = `rgba(${e.rgba.r},${e.rgba.g},${e.rgba.b},${e.rgba.a})`
        this.firstTimeUpdateBgColor = true
      }
      this.update()
    },
    align (direction) {
      this.styles['text-align'] = direction
      this.update()
    },
    setSize (size) {
      this.styles['font-size'] = size
      this.update()
    },
    setFontFamily (family) {
      this.styles['font-family'] = family
      this.update()
    },
    setDirection (e) {
      this.styles['direction'] = e
      this.update()
    },
    toggleTextIndent () {
      if (this.styles['text-indent'] === '0') {
        this.styles['text-indent'] = '15px'
      } else {
        this.styles['text-indent'] = '0'
      }
      this.update()
    },
    setLineHeight (payload) {
      this.styles['line-height'] = payload
      this.update()
    },
    toggleOverflow () {
      if (this.styles['overflow'] === 'hidden') {
        this.styles['overflow'] = 'visible'
      } else {
        this.styles['overflow'] = 'hidden'
      }
      this.update()
    },
    setOpacityColor (e) {
      this.styles['opacity'] = e
      this.update()
    },
    toggleTextDecoration () {
      if (this.styles['text-decoration'] !== 'underline') {
        this.styles['text-decoration'] = 'underline'
      } else {
        this.styles['text-decoration'] = 'none'
      }
      this.update()
    },
    toggleThroughDecoration () {
      if (this.styles['text-decoration'] !== 'line-through') {
        this.styles['text-decoration'] = 'line-through'
      } else {
        this.styles['text-decoration'] = 'none'
      }
      this.update()
    },
    updateBorderColor (e) {
      if (this.firstTimeUpdateBorderColor) {
        this.styles['border-color'] = `rgba(${e.rgba.r},${e.rgba.g},${e.rgba.b},${e.rgba.a})`
      } else {
        e.rgba.a = 1
        this.styles['border-color'] = `rgba(${e.rgba.r},${e.rgba.g},${e.rgba.b},${e.rgba.a})`
        this.firstTimeUpdateBorderColor = true
      }
      this.update()
    },
    setBorderWidth (e) {
      this.styles['border-width'] = e
      this.update()
    },
    setBorderStyle (style) {
      this.styles['border-style'] = style
      this.update()
    },
    letterSpacing (e) {
      this.styles['letter-spacing'] = e.target.value + 'px'
      this.update()
    },
    setPaddingY (e) {
      if (e === '') {
        delete this.styles['padding-top']
        delete this.styles['padding-bottom']
      } else {
        this.styles['padding-top'] = e
        this.styles['padding-bottom'] = e
      }
      this.update()
    },
    setPaddingX (e) {
      if (e === '') {
        delete this.styles['padding-right']
        delete this.styles['padding-left']
      } else {
        this.styles['padding-right'] = e
        this.styles['padding-left'] = e
      }
      this.update()
    },
    setMarginX (e) {
      if (e === '') {
        delete this.styles['margin-right']
        delete this.styles['margin-left']
      } else {
        this.styles['margin-left'] = e
        this.styles['margin-right'] = e
      }
      this.update()
    },
    setMarginY (e) {
      if (e === '') {
        delete this.styles['margin-top']
        delete this.styles['margin-bottom']
      } else {
        this.styles['margin-top'] = e
        this.styles['margin-bottom'] = e
      }
      this.update()
    },
    setWidth (e) {
      if (e === '' || e === 'px' || e === '%') {
        delete this.styles['width']
      } else {
        this.styles['width'] = e
      }
      this.update()
    },
    setHeight (e) {
      if (e === '' || e === 'px' || e === '%') {
        delete this.styles['height']
      } else {
        this.styles['height'] = e
      }
      this.update()
    },
    setBorderRadius (e) {
      if (e === '' || e === 'px' || e === '%') {
        delete this.styles['border-radius']
      } else {
        this.styles['border-radius'] = e
      }
      this.update()
    },
    setBgSize (e) {
      this.styles['background-size'] = e
      this.update()
    },
    setBgRepeat (e) {
      this.styles['background-repeat'] = e
      this.update()
    },
    setBackgroundPositionX (e) {
      this.backgroundPositionX = e
      let y = this.backgroundPositionY
      this.styles['background-position'] = y + ' ' + this.backgroundPositionX
      this.update()
    },
    setBackgroundPositionY (e) {
      this.backgroundPositionY = e
      let x = this.backgroundPositionX
      this.styles['background-position'] = this.backgroundPositionY + ' ' + x
      this.update()
    }
  }
}
</script>
