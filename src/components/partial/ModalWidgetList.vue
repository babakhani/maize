<template>
  <b-modal
    :no-fade="true"
    @shown="onShow"
    @hide="onHide"
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
            v-if="showModalDelayed"
            @updateAddList="updateAddList"
            :add-widget-list="addWidgetList"
            :widget-list="item.widgets" />
          <div v-else class="text-center">
            <b-spinner
              variant="primary"
              class="p-5 m-5 mt-5"
              label="Spinning"></b-spinner>
          </div>
        </b-tab>
      </b-tabs>
    </b-card>
  </b-modal>
</template>
<script>
import Widgets from '../widgets'
import WidgetList from './WidgetList'
export default {
  name: 'WidgetListModal',
  components: { ...Widgets, WidgetList },
  methods: {
    updateAddList (item) {
      let widgetList = this.addWidgetList
      let finded = widgetList.find((n) => {return n.name === item.name})
      if (finded) {
        this._.remove(widgetList, (n) => {
          return n.name === item.name
        })
      } else {
        widgetList.push(item)
      }
      this.addWidgetList = widgetList
      this.$forceUpdate()
    },
    onShow () {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.showModalDelayed = true
      }, 600)
    },
    onHide () {
      this.showModalDelayed = false
      this.showModal = false
      this.addWidgetList = []
      this.$store.dispatch('layout/setAddWidgetMode', false)
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
  beforeDestroy () {
    clearTimeout(this.timeout)
  },
  data () {
    return {
      timeout: null,
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
