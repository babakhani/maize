import GlobalPageToolbox from '@/components/partial/GlobalPageToolbox.vue'
import Widgets from '../components/widgets'
import AddWidget from '../components/partial/AddWidget'
import WidgetListModal from '../components/partial/WidgetListModal'
const Mixin = {
  components: {...Widgets, AddWidget, WidgetListModal, GlobalPageToolbox}
}

export default Mixin
