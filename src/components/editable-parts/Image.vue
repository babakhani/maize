<template>
  <div class="widget-block--image-editable" :class="{'edit-mode': editMode}">
    <div class="widget-block--image-editable--toolbox">
      <button @click="toggleEditMode()"
              class="widget-block--toolbox-btn widget-block--toolbox--edit-mode-btn">
        Edite
      </button>
      <input type="color" @input="updateColor"/>
       <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" @click="setSize('6px')">Medium</a>
          <a class="dropdown-item" @click="setSize('4px')">small</a>
          <a class="dropdown-item" @click="setSize('2px')">x-small</a>
          <a class="dropdown-item" @click="setSize('0')">none</a>
        </div>
      <div class="dropdown">
        <button class="btn float-left btn-sm btn-secondary dropdown-toggle btn-border"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
          <img src="../../../static/imgs/images/border-radius.svg"/>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" @click="setSize('6px solid')">Medium</a>
          <a class="dropdown-item" @click="setSize('4px solid')">small</a>
          <a class="dropdown-item" @click="setSize('2px solid')">x-small</a>
          <a class="dropdown-item" @click="setSize('0')">none</a>
        </div>
      </div>
    </div>
    <input v-if="editMode" class="image--editable" @change="imageUpload" type="file">
    <img v-bind:style="styles" alt="image" class="img-fluid" src="/static/imgs/img_round.svg">
  </div>
</template>

<script>
  export default {
    name: 'ImageEditable',
    methods: {
      toggleEditMode() {
        this.editMode = !this.editMode
      },
      imageUpload (e) {
        console.log('imageUpload')
        const $img = $(e.target).next('img')
        if (e.target.files && e.target.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
            $img.attr('src', e.target.result);
          }
          reader.readAsDataURL(e.target.files[0]);
        }
      },
      updateColor(e) {
        this.styles['border-color'] = e.target.value
      },
      setSize (size) {
        this.styles['border'] = size
      },
    },
    props: {
      editMode: {
        default: false
      },
      styles: {
        default() {
          return {
            'color': '#333',
            'border': '2px solid',
            'border-color': 'pink'
          }
        }
      }
    },
  }
</script>
