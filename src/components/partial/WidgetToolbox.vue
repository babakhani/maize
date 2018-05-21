<template>
  <div class="widget-block--toolbox">
    <button @click="$emit('toggleEditMode')"
            class="btn btn-link btn-sm widget-block--toolbox-btn widget-block--toolbox--edit-mode-btn">
      Edite
    </button>
    <button @click="$emit('deleteWidget')"
            class="btn btn-link btn-sm widget-block--toolbox-btn widget-block--toolbox--delete-btn">Delete
    </button>
    <button @click="$emit('toggleFullWidth')"
            class="btn btn-link btn-sm widget-block--toolbox-btn widget-block--toolbox--delete-btn">Toggle Full Width
    </button>
  </div>
</template>

<script>
  export default {
    name: 'WidgetToolbox'
  }
</script>
