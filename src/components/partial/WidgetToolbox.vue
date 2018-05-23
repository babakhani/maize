<template>
  <div class="widget-block--toolbox">
    <button @click="$emit('toggleEditMode')"
            title="Edite"
            :class="{ 'btn-active': editMode}"
            class="btn btn-link widget-block--toolbox-btn">
      <icon name="pencil-alt"></icon>
    </button>
    <button @click="$emit('deleteWidget')"
            title="Delete"
            class="btn btn-link widget-block--toolbox-btn">

      <icon name="trash"></icon>
    </button>
    <button @click="$emit('toggleFullWidth')"
            title="Toggle Full Width"
            class="btn btn-link widget-block--toolbox-btn">

      <icon name="arrows-alt-h"></icon>
    </button>


    <button @click="$emit('moveUp')"
            title="Delete"
            class="btn btn-link widget-block--toolbox-btn">

      <icon name="arrow-up"></icon>
    </button>
    <button @click="$emit('moveDown')"
            title="Toggle Full Width"
            class="btn btn-link widget-block--toolbox-btn">

      <icon name="arrow-down"></icon>
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
