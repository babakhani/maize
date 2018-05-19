<template>
  <div class="widget-text-editable" :class="{'editable-active': editMode && focused}">


    <div class="widget-text-editable--toolbox">
      <!--TODO: for bita : complete text editable toolbox4-->


      <div class="widget-text-editable--toolbox--group">

        <!--DropDown Example-->
        <div class="dropdown">
          <button class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
            <icon :style="{'width': styles['font-size']}" name="font"></icon>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" @click="setSize('44px')">x-large</a>
            <a class="dropdown-item" @click="setSize('18px')">large</a>
            <a class="dropdown-item" @click="setSize('16px')">Medium</a>
            <a class="dropdown-item" @click="setSize('14px')">small</a>
            <a class="dropdown-item" @click="setSize('12px')">x-small</a>
            <a class="dropdown-item" @click="setSize('10px')">xx-small</a>
          </div>
        </div>

        <!--DropDown Example-->
        <div class="dropdown">
          <button class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                  type="button"
                  id="dropdownMenuButton2"
                  data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
            <icon :name="'align-'+ styles['text-align']"></icon>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
            <button title="align left" @click="align('left')"
                    :class="{'widget-text-editable--selected': styles['text-align'] == 'left'}"
                    class="btn btn-sm widget-text-editable--toolbox--button ">
              <icon name="align-left"></icon>
            </button>
            <button title="align right" @click="align('right')"
                    :class="{'widget-text-editable--selected': styles['text-align'] == 'right'}"
                    class="btn btn-sm widget-text-editable--toolbox--button">
              <icon name="align-right"></icon>
            </button>
            <button title="align center" @click="align('center')"
                    :class="{'widget-text-editable--selected': styles['text-align'] == 'center'}"
                    class="btn btn-sm widget-text-editable--toolbox--button">
              <icon name="align-center"></icon>
            </button>
            <button title="align justify" @click="align('justify')"
                    :class="{'widget-text-editable--selected': styles['text-align'] == 'justify'}"
                    class="btn btn-sm widget-text-editable--toolbox--button">
              <icon name="align-justify"></icon>
            </button>
          </div>
        </div>

        <!--Button Example-->
        <button title="bold" @click="toggleBold()"
                :class="{'widget-text-editable--selected': styles['font-weight'] == 'bold'}"
                class="btn btn-sm widget-text-editable--toolbox--button">
          <icon name="bold"></icon>
        </button>
        <button title="underline" @click="toggleTextDecoration()"
                :class="{'widget-text-editable--selected': styles['text-decoration'] == 'underline'}"
                class="btn btn-sm widget-text-editable--toolbox--button">
          <icon name="underline"></icon>
        </button>
        <button title="line-through" @click="toggleThroughDecoration()"
                :class="{'widget-text-editable--selected': styles['text-decoration'] == 'line-through'}"
                class="btn btn-sm widget-text-editable--toolbox--button">
          <icon name="strikethrough"></icon>
        </button>
        <button title="direction" @click="toggleDirection()" class="btn btn-sm widget-text-editable--toolbox--button">
          <icon v-if="styles.direction == 'ltr'" name="arrow-left"></icon>
          <icon v-if="styles.direction == 'rtl'" name="arrow-right"></icon>
        </button>
        <button title="indent" @click="toggleTextIndent()" class="btn btn-sm widget-text-editable--toolbox--button">
          ind
        </button>
        <div class="dropdown">
          <button class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                  type="button"
                  title="opacity"
                  id="dropdownMenuButto3"
                  data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
            opacity
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
            <input @input="opacityColor" type="range" min="0.0" max="1.0" value="100" step="0.01">
          </div>
        </div>


        <!--DropDown Example-->
        <div class="dropdown">
          <button class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                  type="button"
                  id="dropdownMenuButton4"
                  data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
            line height
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton4">
            <a class="dropdown-item" @click="setLineHeight('1em')">1</a>
            <a class="dropdown-item" @click="setLineHeight('1.2em')">1.2</a>
            <a class="dropdown-item" @click="setLineHeight('1.5em')">1.5</a>
            <a class="dropdown-item" @click="setLineHeight('2em')">2</a>
            <a class="dropdown-item" @click="setLineHeight('2em')">3</a>
          </div>
        </div>
        <button title="overflow" @click="toggleOverflow()" class="btn btn-sm widget-text-editable--toolbox--button">
          overflow
        </button>

        <button class="btn btn-sm widget-text-editable--toolbox--button">
          color
          <input type="color" @input="updateColor"/>
        </button>

      </div>

      <div class="widget-text-editable--toolbox--group">
        <div class="dropdown">
          <button class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                  type="button"
                  title="border width"
                  id="dropdownMenuButto5"
                  data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
            Border Width
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton5">
            <input @input="borderWidth" type="range" min="0" max="10" value="10" step="1">
          </div>
        </div>
        <button class="btn btn-sm widget-text-editable--toolbox--button">
          border color
          <input type="color" @input="updateBorderColor"/>
        </button>
        <div class="dropdown">
          <button class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                  type="button"
                  id="dropdownMenuButton6"
                  data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
            border style
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton6">
            <a class="dropdown-item" @click="borderStyle('none')">none</a>
            <a class="dropdown-item" @click="borderStyle('solid')">solid</a>
            <a class="dropdown-item" @click="borderStyle('dashed')">dashed</a>
            <a class="dropdown-item" @click="borderStyle('double')">double</a>
            <a class="dropdown-item" @click="borderStyle('dotted')">dotted</a>
          </div>
        </div>
      </div>

      <button class="btn btn-sm widget-text-editable--toolbox--button">
        bg
        <input type="color" @input="updateBgColor"/>
      </button>

      <div class="dropdown">
        <button class="btn btn-sm dropdown-toggle widget-text-editable--toolbox--button"
                type="button"
                title="opacity"
                id="dropdownMenuButto3"
                data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
          opacity
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
          <input @input="opacityColor" type="range" min="0.0" max="1.0" value="100" step="0.01">
        </div>
      </div>

      <!-- closed button-->
      <button @click="focused = false" class="btn btn-sm btn-danger float-right widget-text-editable--toolbox--close">
        <icon name="times"></icon>
      </button>

    </div>

    <!--Min Slot-->
    <h1 v-bind:style="styles" v-if="tag === 'h1'" @focusin="activateEditMode" @focusout="deactivateEditMode"
        :contenteditable="editMode">
      <slot></slot>
    </h1>
    <h2 v-bind:style="styles" v-if="tag === 'h2'" @focusin="activateEditMode" @focusout="deactivateEditMode"
        :contenteditable="editMode">
      <slot></slot>
    </h2>
    <h3 v-bind:style="styles" v-if="tag === 'h3'" @focusin="activateEditMode" @focusout="deactivateEditMode"
        :contenteditable="editMode">
      <slot></slot>
    </h3>
    <h4 v-bind:style="styles" v-if="tag === 'h4'" @focusin="activateEditMode" @focusout="deactivateEditMode"
        :contenteditable="editMode">
      <slot></slot>
    </h4>
    <h5 v-bind:style="styles" v-if="tag === 'h5'" @focusin="activateEditMode" @focusout="deactivateEditMode"
        :contenteditable="editMode">
      <slot></slot>
    </h5>
    <h6 v-bind:style="styles" v-if="tag === 'h6'" @focusin="activateEditMode" @focusout="deactivateEditMode"
        :contenteditable="editMode">
      <slot></slot>
    </h6>
    <span v-bind:style="styles" v-if="tag === 'span'" @focusin="activateEditMode" @focusout="deactivateEditMode"
          :contenteditable="editMode">
      <slot></slot>
    </span>
    <p v-bind:style="styles" v-if="tag === 'p'" @focusin="activateEditMode" @focusout="deactivateEditMode"
       :contenteditable="editMode">
      <slot></slot>
    </p>
  </div>
</template>

<script>
  import EditablePartMixin from '../../mixins/editablePart'

  export default {
    name: 'TextEditable',
    mixins: [EditablePartMixin],
    methods: {
      deactivateEditMode() {
        // this.focused = false
      },
      activateEditMode() {
        this.focused = true
      }
    },
    data() {
      return {
        focused: false
      }
    },
    props: {
      tag: {
        default: 'p',
        required: true
      },
      editMode: {
        default: false
      }
    }
  }
</script>
