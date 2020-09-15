<template>
  <div
    v-if="!$parent.demoMode"
    class="cursor-move widget-block--toolbox">
    <nav class="navbar-expand-lg navbar py-0 my-0 px-1 mx-1">
      <span
        :contenteditable="editNameMode"
        @focusout="goOutNameMode"
        @dblclick="goToEditNameMode"
        @input="updateName"
        style="direction: ltr"
        class="navbar-text">
        {{$t(`widgets.${this.widgetName}`) }} {{ this.widgetNumber }}
      </span>
      <div class="collapse navbar-collapse justify-content-end" >
        <ul class="navbar-nav">
          <li
            class="nav-item">
            <button v-if="showTools"
                    tabindex="-1"
                    @click="$parent.deleteWidget"
                    :title="$t('toolbox.delete')"
                    v-b-tooltip.hover.top
                    class="btn btn-link widget-block--toolbox-btn">
              <icon name="trash"></icon>
            </button>
          </li>
          <li
            class="nav-item">
            <button v-if="showTools"
                    tabindex="-1"
                    @click="$parent.toggleFullWidth"
                    :title="$t('toolbox.full_width')"
                    v-b-tooltip.hover.top
                    class="btn btn-link widget-block--toolbox-btn">
              <icon name="arrows-alt-h"></icon>
            </button>
          </li>
          <li
            class="nav-item">
            <button v-if="showTools"
                    tabindex="-1"
                    @click="$parent.moveUp"
                    :title="$t('toolbox.move_up')"
                    v-b-tooltip.hover.top
                    class="btn btn-link widget-block--toolbox-btn">
              <icon name="arrow-up"></icon>
            </button>
          </li>
          <li
            class="nav-item">
            <button v-if="showTools"
                    tabindex="-1"
                    @click="$parent.moveDown"
                    :title="$t('toolbox.move_down')"
                    v-b-tooltip.hover.top
                    class="btn btn-link widget-block--toolbox-btn">
              <icon name="arrow-down"></icon>
            </button>
          </li>
          <li
            class="nav-item">
            <button v-if="showTools"
                    tabindex="-1"
                    :title="$t('toolbox.drag')"
                    v-b-tooltip.hover.top
                    class="btn btn-link widget-block--toolbox-btn widget-drag-handle">
              <icon name="arrows-alt"></icon>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'WidgetToolbox',
  data () {
    return {
      editNameMode: null,
      sanitizedName: null,
      showTools: true,
      widgetName: '',
      widgetNumber: ''
    }
  },
  props: {
    editMode: {
      default: false,
      require: true
    }
  },
  mounted () {
    this.sanitizedName = this.$parent.$options.name.replace('_', ' ')
    const words = this.sanitizedName.split(' ')
    this.widgetNumber = words[1]
    this.widgetName = words[0]
    setTimeout(() => {
      if (this.$parent.touchedData && this.$parent.touchedData.config &&
        this.$parent.touchedData.config.name) {
        this.sanitizedName = this.$parent.touchedData.config.name
      }
    }, 0)
  },
  methods: {
    goToEditNameMode () {
      this.editNameMode = true
    },
    goOutNameMode () {
      this.editNameMode = false
    },
    updateName (e) {
      this.$parent.updateData({
        name: 'config',
        data: {
          name: e.target.innerText
        }
      })
    }
  }
}
</script>
