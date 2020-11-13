<template>
  <div class="editor">
    <editor-menu-bar
      :editor="editor"
      v-slot="{ commands, isActive }">
      <div class="menubar">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            class="btn btn-sm btn-outline-primary"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
            >
            <icon name="bold" />
          </button>
            <button
              class="btn btn-sm btn-outline-primary"
              :class="{ 'is-active': isActive.italic() }"
              @click="commands.italic"
              >
              <icon name="italic" />
            </button>

              <button
                class="btn btn-sm btn-outline-primary"
                :class="{ 'is-active': isActive.strike() }"
                @click="commands.strike"
                >
                <!--<icon name="strike" />-->
                strike
              </button>

              <button
                class="btn btn-sm btn-outline-primary"
                :class="{ 'is-active': isActive.underline() }"
                @click="commands.underline"
                >
                <icon name="underline" />
              </button>

                <button
                  class="btn btn-sm btn-outline-primary"
                  :class="{ 'is-active': isActive.code() }"
                  @click="commands.code"
                  >
                  <icon name="code" />
                </button>

                  <button
                    class="btn btn-sm btn-outline-primary"
                    :class="{ 'is-active': isActive.paragraph() }"
                    @click="commands.paragraph"
                    >
                    <icon name="paragraph" />
                  </button>

                    <button
                      class="btn btn-sm btn-outline-primary"
                      :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                      @click="commands.heading({ level: 1 })"
                      >
                      H1
                    </button>

                      <button
                        class="btn btn-sm btn-outline-primary"
                        :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                        @click="commands.heading({ level: 2 })"
                        >
                        H2
                      </button>

                        <button
                          class="btn btn-sm btn-outline-primary"
                          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                          @click="commands.heading({ level: 3 })"
                          >
                          H3
                        </button>

                          <button
                            class="btn btn-sm btn-outline-primary"
                            :class="{ 'is-active': isActive.bullet_list() }"
                            @click="commands.bullet_list"
                            >
                            <!--<icon name="ul" />-->
                            ul
                          </button>

                          <button
                            class="btn btn-sm btn-outline-primary"
                            :class="{ 'is-active': isActive.ordered_list() }"
                            @click="commands.ordered_list"
                            >
                            <!--<icon name="ol" />-->
                            ol
                          </button>

                          <button
                            class="btn btn-sm btn-outline-primary"
                            :class="{ 'is-active': isActive.blockquote() }"
                            @click="commands.blockquote"
                            >
                            <!--<icon name="quote" />-->
                            quote
                          </button>

                          <button
                            class="btn btn-sm btn-outline-primary"
                            :class="{ 'is-active': isActive.code_block() }"
                            @click="commands.code_block"
                            >
                            <icon name="code" />
                          </button>

                            <button
                              class="btn btn-sm btn-outline-primary"
                              @click="commands.horizontal_rule"
                              >
                              <!--<icon name="hr" />-->
                              hr
                            </button>

                            <button
                              class="btn btn-sm btn-outline-primary"
                              @click="commands.undo"
                              >
                              <icon name="undo" />
                            </button>

                              <button
                                class="btn btn-sm btn-outline-primary"
                                @click="commands.redo"
                                >
                                <icon name="redo" />
                              </button>

        </div>
      </div>
    </editor-menu-bar>
    <editor-content
      class="editor__content"
      :editor="editor" />
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
  mounted () {
    this.editor.setContent(this.value.text)
  },
  watch: {
    value () {
      this.editor.setContent(this.value.text)
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
        ]
      })
    }
  },
  beforeDestroy () {
    this.editor.destroy()
  },
  methods: {
    select (text, hide = false) {
      this.$emit('input', {
        ...this.value,
        text: text
      })
      if (hide) {
        this.$emit('done')
      }
    }
  }
}
</script>
