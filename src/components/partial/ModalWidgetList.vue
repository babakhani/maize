<template>
  <b-modal
    @hidden="onHide"
    @ok="onOk"
    v-model.sync="showModal"
    id="addWidgetModal"
    size="lg"
    centered
    class="add-widget-modal">
    <b-tabs card>
      <template v-for="item in groupedWidgetList">
        <b-tab v-if="item[0]"
               :title="item[0]['group']"
               active>
          <div v-for="widget in item"
               class="add-widget-modal--widget-item"
               :class="{'add-widget-modal--widget-item--selected': addWidgetList.indexOf(widget) > -1}"
               @click="updateAddList(widget)">
            {{widget.name}}
            <span v-if="addWidgetList.indexOf(widget) > -1">{{addWidgetList.indexOf(widget) + 1}}</span>
          </div>
        </b-tab>
      </template>
    </b-tabs>
  </b-modal>
</template>
<script>
  export default {
    name: 'WidgetListModal',
    methods: {
      updateAddList (itemName) {
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
      onHide () {
        this.$store.dispatch('layout/setAddWidgetMode', false)
        this.addWidgetList = []
      },
      onOk () {
        // TODO: complete this
        this.$store.dispatch('main/addToCurrentWidgetList', this.addWidgetList)
      }
    },
    computed: {
      modalShowGlobalState () {
        return this.$store.state.layout.addWidgetMode
      },
      groupedWidgetList () {
        return this._.groupBy(this.$store.state.main.rawWidgetList, 'group')
      }
    },
    data () {
      return {
        showModal: false,
        addWidgetList: []
      }
    },
    watch: {
      modalShowGlobalState () {
        this.showModal = this.modalShowGlobalState
      }
    }
  }
</script>
