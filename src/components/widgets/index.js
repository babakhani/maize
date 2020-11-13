import Media from './Media'
import Header from './Header/index'
import Content from './Content/index'
import Features from './Features/index'
import Footer from './Footer/index'
import Form from './Form/index'
import Gallery from './Gallery/index'
import CallToAction from './CallToAction/index'
import Contacts from './Contacts/index'
// import Kitchen from './Kitchen/index'
// import Advanced from './Advanced/index'

export default {
  ...Header,
  ...CallToAction,
  ...Features,
  ...Media,
  ...Content,
  ...Form,
  ...Gallery,
  ...Contacts,
  ...Footer
  // ...Advanced,
  // ...Kitchen
}
