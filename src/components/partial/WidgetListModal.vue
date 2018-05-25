<template>
  <b-modal
    @hidden="onHide"
    @ok="onOk"
    v-model.sync="showModal"
    id="addWidgetModal"
    size="lg"
    centered
    class="add-widget-modal"
    title="Choose your Widget :">

    <div v-for="item in widgetList"
         class="add-widget-modal--widget-item"
         :class="{'add-widget-modal--widget-item--selected': addWidgetList.indexOf(item) > -1}"
         @click="updateAddList(item)">
      {{item.name}}
    </div>

  </b-modal>
</template>

<script>
  export default {
    name: 'WidgetListModal',
    methods: {
      updateAddList(itemName) {
        if (this.addWidgetList.indexOf(itemName) > -1) {
          this._.remove(this.addWidgetList, (n) => {
            return n === itemName
          })
        } else {
          this.addWidgetList.push(itemName)
        }
        // TODO: fix this, remove $forceUpdate
        this.$forceUpdate()
      },
      onHide() {
        this.$store.dispatch('layout/setAddWidgetMode', false)
        this.addWidgetList = []
      },
      onOk() {
        // TODO: complete this
        this.$store.dispatch('main/addToCurrentWidgetList', this.addWidgetList)
      }
    },
    computed: {
      modalShowGlobalState() {
        return this.$store.state.main.addWidgetMode
      },
      widgetList() {
        return this.$store.state.main.rawWidgetList
      }
    },
    data() {
      return {
        showModal: false,
        addWidgetList: []
      }
    },
    watch: {
      modalShowGlobalState() {
        this.showModal = this.modalShowGlobalState
      }
    }
  }
</script>
