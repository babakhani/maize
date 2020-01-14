<template>
  <div
    v-if="!$parent.demoMode"
    class="widget-block--toolbox">
    <nav class="navbar-expand-lg navbar py-0 my-0 px-1 mx-1">
      <span class="navbar-text">
        {{ $parent.$options.name}}
      </span>
      <div class="collapse navbar-collapse" >
      <ul class="navbar-nav ml-auto">
        <li
          class="nav-item mr-lg-3">
          <button v-if="showTools"
                  tabindex="-1"
                  :title="$t('toolbox.drag')"
                  v-b-tooltip.hover.top
                  class="btn btn-link widget-block--toolbox-btn widget-drag-handle">
            <icon name="arrows-alt"></icon>
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
                  @click="$parent.deleteWidget"
                  :title="$t('toolbox.delete')"
                  v-b-tooltip.hover.top
                  class="btn btn-link widget-block--toolbox-btn">
            <icon name="trash"></icon>
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
      showTools: true
    }
  },
  props: {
    editMode: {
      default: false,
      require: true
    }
  }
}
</script>
