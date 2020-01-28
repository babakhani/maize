<template>
  <div class="editor editor py-2 px-3">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar mb-3">
        <button
          class="menubar__button btn btn-outline-secondary mr-1 mb-1"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <icon name="bold" />
        </button>

        <button
          class="menubar__button btn btn-outline-secondary mr-1 mb-1"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <icon name="italic" />
        </button>

        <button
          class="menubar__button btn btn-outline-secondary mr-1 mb-1"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <icon name="strikethrough" />
        </button>

        <button
          class="menubar__button btn btn-outline-secondary mr-1 mb-1"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <icon name="underline" />
        </button>

        <button
          class="menubar__button btn btn-outline-secondary mr-1 mb-1"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <icon name="code" />
        </button>

        <button
          class="menubar__button btn btn-outline-secondary mr-1 mb-1"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          <icon name="paragraph" />
        </button>

        <button
          class="menubar__button btn btn-outline-secondary mr-1 mb-1"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </button>

        <button
          class="menubar__button btn btn-outline-secondary mr-1 mb-1"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </button>

        <button
          class="menubar__button btn btn-outline-secondary mr-1 mb-1"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </button>

        <button
          class="menubar__button btn btn-outline-secondary mr-1 mb-1"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <icon name="list-ul" />
        </button>

        <button
          class="menubar__button btn btn-outline-secondary mr-1 mb-1"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <icon name="list-ol" />
        </button>

        <button
          class="menubar__button btn btn-outline-secondary mr-1 mb-1"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <icon name="quote-right" />
        </button>

        <button
          class="menubar__button btn btn-outline-secondary mr-1 mb-1"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <icon name="code" />
        </button>

        <button
          class="menubar__button btn btn-outline-secondary mr-1 mb-1"
          @click="commands.horizontal_rule"
        >
          <icon name="minus" />
        </button>

        <button
          class="menubar__button btn btn-outline-secondary mr-1 mb-1"
          @click="commands.undo"
        >
          <icon name="undo" />
        </button>

        <button
          class="menubar__button btn btn-outline-secondary mr-1 mb-1"
          @click="commands.redo"
        >
          <icon name="redo" />
        </button>
      </div>
    </editor-menu-bar>
    <editor-content class="editor__content" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from 'tiptap-extensions'
export default {
  name: 'Editor',
  components: {
    EditorContent,
    EditorMenuBar
  },
  props: {
    value: {
      type: [Object, Boolean, Array, String],
      required: false
    }
  },
  data () {
    let self = this
    return {
      underedit: '',
      editor: new Editor({
        onUpdate: ({ getHTML }) => {
          self.select(getHTML())
        },
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History()
        ],
        content: self.value
      })
    }
  },
  beforeDestroy () {
    this.editor.destroy()
  },
  methods: {
    select (pickedText, hide = false) {
      this.$emit('input', pickedText)
      if (hide) {
        this.$emit('done')
      }
    }
  }
}
</script>
<style lang="scss">
.editor {
  .menubar {
    @media (max-width: 768px) {
      white-space: nowrap;
      overflow-x: auto;
    }
    .menubar__button {
      width: 42px;
      height: 42px;
      padding: 0;
    }
  }
  .editor__content {
    .ProseMirror {
      padding: 1em;
      min-height: 590px;
      @media (max-width: 1440px) {
        min-height: 500px;
      }
      @media (max-width: 768px) {
        min-height: 550px;
      }
    }
  }
}
</style>
