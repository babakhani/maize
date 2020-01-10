<template>
  <b-modal
    @shown="onShow"
    @hidden="onHide"
    @ok="onOk"
    v-model="showModal"
    id="addWidgetModal"
    size="lg"
    centered
    class="add-widget-modal"
    :title=" $t('choose_widget')">
    <template slot="modal-footer">
      <b-button
        @click="onHide"
        variant="outline-link"
        class="btn-link text-muted">
        {{ $t('modal.cancel') }}
      </b-button>
      <b-button
        variant="success"
        @click="onOk">
        {{ $t('modal.ok') }}
      </b-button>
    </template>
    <b-card
      v-if="showModalDelayed"
      no-body>
      <b-tabs
        align="center"
        vertical
        pills
        no-fade
        nav-wrapper-class="w-10"
        v-model="currentTab"
        card>
        <b-tab
          v-for="(item, index) in groupedWidgetList"
          :key="index"
          :lazy="true"
          :active="item.group === 'header'"
          :title="item.title">
          <WidgetList
            @updateAddList="updateAddList"
            :add-widget-list="addWidgetList"
            :widget-list="item.widgets" />
        </b-tab>
      </b-tabs>
    </b-card>
    <div v-else class="text-center">
      <b-spinner
         variant="primary"
        class="p-5 m-5 mt-5"
        label="Spinning"></b-spinner>
    </div>
  </b-modal>
</template>
<script>
import Widgets from '../widgets'
import WidgetList from './WidgetList'
export default {
  name: 'WidgetListModal',
  components: { ...Widgets, WidgetList },
  methods: {
    updateAddList (itemName) {
      let widgetList = this.addWidgetList
      if (widgetList.indexOf(itemName) > -1) {
        this._.remove(widgetList, (n) => {
          return n === itemName
        })
        this.$forceUpdate()
      } else {
        widgetList.push(itemName)
      }
      this.addWidgetList = widgetList
      // TODO: fix this, remove $forceUpdate
    },
    onShow () {
      setTimeout(() => {
        this.showModalDelayed = true
      }, 800)
    },
    onHide () {
      this.$store.dispatch('layout/setAddWidgetMode', false)
      this.showModalDelayed = false
      this.addWidgetList = []
    },
    onOk () {
      // TODO: complete this
      this.$store.dispatch('main/addToCurrentWidgetList', this.addWidgetList)
      this.onHide()
    }
  },
  computed: {
    modalShowGlobalState () {
      return this.$store.state.layout.addWidgetMode
    },
    groupedWidgetList () {
      return this.$store.state.main.rawWidgetList
    }
  },
  mounted () {
  },
  data () {
    return {
      showModalDelayed: false,
      currentTab: 1,
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
