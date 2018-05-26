<template>
  <div class="widget-block--toolbox">
    <button @click="showTools = !showTools"
            title="Settings"
            v-b-tooltip.hover.top
            class="btn btn-link widget-block--toolbox-btn">
      <icon name="cog"></icon>
    </button>
    <transition name="fade">
      <button v-if="showTools"
              @click="$parent.toggleEditMode"
              title="Edite"
              v-b-tooltip.hover.top
              class="btn btn-link widget-block--toolbox-btn">
        <icon name="pencil-alt"></icon>
      </button>
    </transition>
    <transition name="fade">
      <button v-if="showTools"
              @click="$parent.deleteWidget"
              title="Delete"
              v-b-tooltip.hover.top
              class="btn btn-link widget-block--toolbox-btn">
        <icon name="trash"></icon>
      </button>
    </transition>
    <transition name="fade">
      <button v-if="showTools"
              @click="$parent.toggleFullWidth"
              title="Toggle Full Width"
              v-b-tooltip.hover.top
              class="btn btn-link widget-block--toolbox-btn">
        <icon name="arrows-alt-h"></icon>
      </button>
    </transition>
    <transition name="fade">
      <button v-if="showTools"
              @click="$parent.moveUp"
              title="Move Up"
              v-b-tooltip.hover.top
              class="btn btn-link widget-block--toolbox-btn">
        <icon name="arrow-up"></icon>
      </button>
    </transition>
    <transition name="fade">
      <button v-if="showTools"
              @click="$parent.moveDown"
              title="Move Down"
              v-b-tooltip.hover.top
              class="btn btn-link widget-block--toolbox-btn">
        <icon name="arrow-down"></icon>
      </button>
    </transition>
    <transition name="fade">
      <button v-if="showTools"
              @click="$parent.moveDown"
              title="Move"
              v-b-tooltip.hover.top
              class="btn btn-link widget-block--toolbox-btn widget-drag-handle">
        <icon name="arrows-alt"></icon>
      </button>
    </transition>
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
