<template>
  <div class="widget-block--toolbox">
    <button @click="$emit('toggleEditMode')"
            title="Edite"
            v-b-tooltip.hover.left
            :class="{ 'btn-active': editMode}"
            class="btn btn-link widget-block--toolbox-btn">
      <icon name="pencil-alt"></icon>
    </button>
    <button @click="$emit('deleteWidget')"
            title="Delete"
            v-b-tooltip.hover.left
            class="btn btn-link widget-block--toolbox-btn">
      <icon name="trash"></icon>
    </button>
    <button @click="$emit('toggleFullWidth')"
            title="Toggle Full Width"
            v-b-tooltip.hover.left
            class="btn btn-link widget-block--toolbox-btn">
      <icon name="arrows-alt-h"></icon>
    </button>
    <button @click="$emit('moveUp')"
            title="Move Up"
            v-b-tooltip.hover.left
            class="btn btn-link widget-block--toolbox-btn">
      <icon name="arrow-up"></icon>
    </button>
    <button @click="$emit('moveDown')"
            title="Move Down"
            v-b-tooltip.hover.left
            class="btn btn-link widget-block--toolbox-btn">
      <icon name="arrow-down"></icon>
    </button>
    <button @click="$emit('moveDown')"
            title="Move"
            v-b-tooltip.hover.left
            class="btn btn-link widget-block--toolbox-btn widget-drag-handle">
      <icon name="arrows-alt"></icon>
    </button>
  </div>
</template>
<script>
  export default {
    name: 'WidgetToolbox',
    props: {
      editMode: {
        default: false,
        require: true
      }
    }
  }
</script>
