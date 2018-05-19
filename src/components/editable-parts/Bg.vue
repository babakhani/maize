<template>
  <div v-bind:style="styles" class="background-editable" :class="{'edit-mode': editMode}">
    <div class="background-editable--toolbox">
      <icon name="cog"></icon>
      <input type="color" @input="updateColor"/>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'BgEditable',
    methods: {
      updateColor(e) {
        this.styles['background-color'] = e.target.value
      }
    },
    props: {
      editMode: {
        default: 'false'
      },
      styles: {
        default() {
          return {
            'background-color': '#f1f1f1'
          }
        }
      }
    }
  }
</script>
