<!-- Fixed navbar -->
<template>
  <div
    @dblclick="(e) => {e.stopPropagation()}"
    class="widget-text-editable--toolbox">
    <div
      v-if="visibileTextSelector"
      class="widget-text-editable--toolbox--group">
      <button :title="$t('toolbox.image_picker')"
      v-b-tooltip.hover.top.small
      @click="pickText"
      class="btn btn-sm widget-text-editable--toolbox--button">
        <i class="fas fa-life-ring" />
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
      @click="pickImage"
      class="btn btn-sm widget-text-editable--toolbox--button">
        <i class="fas fa-image" />
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
      @click="pickIcon"
      class="btn btn-sm widget-text-editable--toolbox--button">
        <i class="far fa-smile" />
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
      @click="setPickLinkMode"
      class="btn btn-sm widget-text-editable--toolbox--button">
        <i class="fas fa-link" />
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
      <button :title="$t('toolbox.bold')"
        v-b-tooltip.hover.top.small
        @click="setAnimate()"
        :class="{'widget-text-editable--selected': styles['font-weight'] === 'bold'}"
        class="btn btn-sm widget-text-editable--toolbox--button">
        <i class="fas fa-forward" />
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
        :title="$t('toolbox.background_color')"
        v-b-tooltip.hover.top.small
        size="sm"
        class="">
        <template v-slot:button-content>
          <i class="fas fa-fill-drip" />
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
            <i class="fas fa-external-link-alt" />
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
            <i class="fas fa-object-ungroup" />
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
            <i class="fas fa-th" />
          </template>
          <div class="px-2" style="width: 320px">
            <b-form-group>
              <label> {{ $t('toolbox.background_postion_x') }} </label>
              <CssInput
                :units="['%', 'px']"
                :statics="['center', 'right', 'left']"
                v-model="backgroundPositionX"
                @change="setBackgroundPositionX" />
              <label class="mt-2" > {{ $t('toolbox.background_postion_y') }} </label>
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
          <i class="fas fa-image" />
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
            <i class="fas fa-paint-brush" />
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
            <icon name="font"></icon>
          </template>
          <b-dropdown-item
            :class="{'widget-text-editable--selected': styles['font-family'] === 'monospace'}"
            @click="setFontFamily('monospace')">
            {{ $t('monospace') }}
          </b-dropdown-item>
          <b-dropdown-item
            :class="{'widget-text-editable--selected': styles['font-family'] === 'serif'}"
            @click="setFontFamily('serif')">
            {{ $t('serif') }}
          </b-dropdown-item>
          <b-dropdown-item
            :class="{'widget-text-editable--selected': styles['font-family'] === 'fantasy'}"
            @click="setFontFamily('fantasy')">
            {{ $t('fantasy') }}
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
          <i class="fas fa-bold" />
        </button>
        <!-- UnderLine -->
        <button :title="$t('toolbox.underline')"
             v-b-tooltip.hover.top.small
             @click="toggleTextDecoration()"
             :class="{'widget-text-editable--selected': styles['text-decoration'] === 'underline'}"
             class="btn btn-sm widget-text-editable--toolbox--button">
          <i class="fas fa-underline" />
        </button>
        <button :title="$t('toolbox.line-through')"
             v-b-tooltip.hover.top.small
             @click="toggleThroughDecoration()"
             :class="{'widget-text-editable--selected': styles['text-decoration'] === 'line-through'}"
             class="btn btn-sm widget-text-editable--toolbox--button">
          <i class="fas fa-strikethrough" />
        </button>

        <!--Alignment-->
        <b-dropdown
          :title="$t('toolbox.alignment')"
          v-b-tooltip.hover.top.small
          size="sm"
          class="">
          <template v-slot:button-content>
            <icon name="align-center"></icon>
          </template>
          <b-dropdown-item title="align left"
                           @click="align('left')"
                           :class="{'widget-text-editable--selected': styles['text-align'] ==
                                         'left'}">
            <icon name="align-left"></icon>
          </b-dropdown-item>
          <b-dropdown-item title="align right"
                           @click="align('right')"
                           :class="{'widget-text-editable--selected': styles['text-align'] ==
                                         'right'}">
            <icon name="align-right"></icon>
          </b-dropdown-item>
          <b-dropdown-item title="align center"
                           @click="align('center')"
                           :class="{'widget-text-editable--selected': styles['text-align'] ==
                                         'center'}">
            <icon name="align-center"></icon>
          </b-dropdown-item>
          <b-dropdown-item title="align justify"
                           @click="align('justify')"
                           :class="{'widget-text-editable--selected': styles['text-align'] ==
                                         'justify'}">
            <icon name="align-justify"></icon>
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
          <i class="fas fa-indent" />
        </button>

        <!--TODO: ask reza about direction-->
        <b-dropdown
          :title="$t('toolbox.direction')"
          v-b-tooltip.hover.top.small
          size="sm"
          class="">
          <template v-slot:button-content>
            <i class="fas fa-exchange-alt"></i>
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
            <i class="far fa-square" />
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
            <icon name="burn"></icon>
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
            <i class="fas fa-circle-notch" />
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

    <b-button @click="hide"
              class="btn btn-sm btn-outline-danger float-right widget-text-editable--toolbox--close">
      <icon name="times"></icon>
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
  props: {
    target: {
      default: false,
      required: false
    },
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
    currentStyles: {
      default () {
        return {}
      },
      required: true
    },
    groups: {
      default () {
        return ['text', 'background', 'border', 'general']
      },
      required: false
    },
    editableData: {
      default: true,
      required: false
    },
    styles: {
      default () {
        return {
          'direction': 'auto',
          'color': 'default',
          'background-color': 'default',
          'border-color': 'default'
        }
      }
    }
  },
  created () {
    this.styles = this._.extend(this.styles, this.currentStyles)
  },
  methods: {
    setAnimate (animate) {
      this.$store.dispatch('layout/setModalView', {
        name: 'animate',
        data: this.editableData
      })
      EventBus.$once('UPDATE_WIDGET_DATA', (widgetData) => {
        if (widgetData && widgetData.animate) {
          this.$emit('updatewidget', widgetData)
        }
      })
      return false
    },
    pickText () {
      this.$store.dispatch('layout/setModalView', {
        name: 'text',
        data: this.editableData
      })
      EventBus.$once('UPDATE_WIDGET_DATA', (widgetData) => {
        if (widgetData && widgetData.text) {
          this.$emit('updatewidget', widgetData)
        }
      })
      return false
    },
    pickImage () {
      this.$store.dispatch('layout/setModalView', {
        name: 'image',
        data: this.editableData
      })
      EventBus.$once('UPDATE_WIDGET_DATA', (widgetData) => {
        if (widgetData && widgetData.src) {
          this.$emit('updatewidget', widgetData)
        }
      })
      return false
    },
    pickIcon () {
      this.$store.dispatch('layout/setModalView', {
        name: 'icon',
        data: this.editableData
      })
      EventBus.$once('UPDATE_WIDGET_DATA', (widgetData) => {
        if (widgetData && widgetData.iconName) {
          this.$emit('updatewidget', widgetData)
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
        name: 'image',
        data: {
          src: this.getBgURL()
        }
      })
      EventBus.$once('UPDATE_WIDGET_DATA', (widgetData) => {
        if (widgetData.src) {
          this.styles['background-image'] = `url('${widgetData.src}')`
          this.update()
        }
      })
      return false
    },
    setPickLinkMode (e) {
      this.$store.dispatch('layout/setModalView', {
        name: 'link',
        data: this.editableData
      })
      EventBus.$once('UPDATE_WIDGET_DATA', (widgetData) => {
        this.$emit('updatewidget', widgetData)
      })
      return false
    },
    update () {
      //  TODO: send only changed data to update methods
      this.$emit('update', this.styles)
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

<style lang="scss">
.widget-text-editable--toolbox {
  .vue-popover-theme {
    background: none !important;
  }
  z-index: 100;
  width: 100%;
  bottom: 0;
  display: block !important;
  font-size: 1rem !important;
  background: rgba($black, .95);
  position: fixed !important;
  border-radius: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0;
  float: left;
  width: 100%;
  padding: .3em .1em .1em .1em ;
  // Preview Mode Styles
  .editor-page-preview-mode & {
    visibility: hidden;
  }
  .widget-text-editable--toolbox--group {
    display: block;
    position: relative;
    float:left;
    &:first-child {
      padding-left: 1em;
    }
    padding-bottom: 20px;
    .widget-text-editable--toolbox--group-title {
      display: block;
       position: absolute;
       height: 20px;
       line-height: 20px;
       right: .1em;
       left: .1em;
       bottom: 0;
       font-size: .6em;
       text-align: center;
       color: rgba($primary-color, 0.9);
    }
  }
  .widget-text-editable--toolbox--group-separator {
    display: block;
    float: left;
    height: 4.5em;
    margin: 0 .3em;
    width: 2px;
    background: rgba($primary-color, 0.2);
  }

  .b-dropdown-form{
     padding: 0em .4em;
     margin: 0;
  }

  .b-dropdown-text{
     padding-top: 0;
     padding-right: 0;
     padding-left: 0;
     margin-right: 0;
     margin-left: 0;
  }

  .dropdown {
    margin: 0;
    float: left;
    .dropdown-toggle::after {
      display: none;
    }

    .input-group {
      width: 100%;
      min-width: 160px;
    }

    input[type='range'] {
      margin: .5em;
      cursor: pointer;
    }

    &.show .dropdown-toggle {
      background: rgba($primary-color, 0.5);
    }

    .dropdown-menu {
      z-index: 100000;
      background: rgba($black, 0.9);
      min-width: 4em;
      .dropdown-item {
        padding: .25em .75em
      }
      label {
        color: rgba($white, .6);
        width: 90%;
        padding: 0;
        margin: 0 5%;
      }
      .vc-compact {
         background: transparent;
      }

      input[type='number'],
      input[type='text'] {
        color: rgba($white, .05);
        background: rgba($white, .05);
        border: 0;
        color: $white;
      }

      input[type='range'] {
        width: 90%;
        padding: 0;
        margin: 5% 5% 0 5%;
      }
      .widget-text-editable--toolbox--button {
        color: #999;
      }
      .widget-text-editable--selected {
        color: #fff;
        background: rgba($primary-color, 0.3);
      }
      a.dropdown-item {
        color: rgba($white, .9) !important;
      }
      .dropdown-item {
        &:hover {
          background: rgba($primary-color, 0.3);
        }
        &:active {
          background: rgba($primary-color, 0.5);
        }
      }
     &.dropdown-menu--margin {
       padding-top:  .25em;
       max-width: 10em;
       input {
         width: 4em;
        padding-left: .3em;
         margin: auto;
       }
       .dropdown-input--even {
         margin-left: 2.5%
       }
     }
    }
  }

  .widget-text-editable--toolbox--button,
  .dropdown-toggle {
    i {
      color: #bbb;
    }
  }

  .widget-text-editable--toolbox--button,
  .dropdown-toggle {
    color: $white;
    border: 0;
    width: 2.8em;
    height: 2.8em;
    margin: .2em .3em;
    float: left;
    padding: 9px;
    cursor: pointer;
    background: transparent;
    position: relative;
    font-size: inherit;
    box-shadow: 0 0 3px 0px rgba($primary-color, .9);
    &:hover,
    &:active,
    &:focus {
      box-shadow: 0 0 3px 2px rgba($primary-color, .9);
      border: 0 !important;
    }
    svg {
      &,
      g,
      path {
        fill: #bbb !important;
      }
    }
    .color-indicator {
      position: absolute;
      width: .5em;
      height: .5em;
      bottom: .3em;
      right: .3em;
    }

    img {
       width: 24px;
       height: 22px;
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
    }
    &.widget-text-editable--selected {
      background: rgba($primary-color, 0.3);
    }
    &.color-box-btn {
      position: relative;
      overflow: hidden;
      input {
        position: absolute;
        top: 50%;
        left: 50%;
        bottom: 0;
        right: 0;
        transform: translate(-50%, -50%);
        opacity: 0;
        width: 100%;
      }
    }
  }

  input[type=color] {
    border: 0;
    width: 1.5em;
    height: 1.5em;
    padding: 0px;
    margin: 0px;
  }

  button {
    img {
      border-radius: 0 !important;
    }
  }

  .slider-wrapper {
    display: inline-block;
    //width: 20px;
    height: 150px;
    padding: 0;
    input {
      position: absolute;
      opacity: 1;
      width: 150px;
      height: 20px;
      margin: 0;
      transform: rotate(0deg);
    }
  }
  .widget-text-editable--toolbox--close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    background-color: #000;
    z-index: 10;
    width: 2.8em;
    height: 2.8em;
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .vc-sketch {
    background: #171717;
    padding: 2px 10px 10px;
    box-shadow: none;
    .vc-sketch-field {
      .vc-input__label {
        color: $white;
      }
      .vc-input__input {
        color: rgba($white, .05);
        background: rgba($white, .1);
        border: 0 !important;
        box-shadow: none !important;
        color: $white;
        padding: 4px 0 3px 2px !important;
      }
    }
    .vc-sketch-active-color {
      border-radius: 0;
    }
    .vc-alpha-checkboard-wrap {
      border-radius: 2px;
      margin-right: 2px;
    }
  }
}
</style>
