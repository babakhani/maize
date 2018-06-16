import Media from './Media'
import Header from './Header/index'
import Content from './Content/index'
import Features from './Features/index'
import Footer from './Footer/index'
import Form from './Form/index'
import Gallery from './Gallery/index'
import CallToAction from './CallToAction/index'

export default {
  ...Content,
  ...Features,
  ...Footer,
  ...Form,
  ...Gallery,
  ...Header,
  ...Media,
  ...CallToAction
}
