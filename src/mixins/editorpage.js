import GlobalPageToolbox from '@/components/partial/GlobalPageToolbox.vue'
import Widgets from '../components/widgets'
import AddWidget from '../components/partial/AddWidget'
import ModalWidgetList from '../components/partial/ModalWidgetList'
const Mixin = {
  components: {...Widgets, AddWidget, ModalWidgetList, GlobalPageToolbox}
}

export default Mixin
