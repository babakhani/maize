<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <footer class="mz-block">
      <div class="row align-items-center px-2">
        <div class="col-12 col-md-6">
          <ul class="nav justify-content-center justify-content-md-start">
            <li class="nav-item">
              <TextEditable tag="a"
                            cssClass="nav-link active"
                            name="footer_link_1"
                            :partData="touchedData.footer_link_1"/>
            </li>
            <li class="nav-item">
              <TextEditable tag="a"
                            cssClass="nav-link active"
                            name="footer_link_2"
                            :partData="touchedData.footer_link_2"/>
            </li>
            <li class="nav-item">
              <TextEditable tag="a"
                            cssClass="nav-link active"
                            name="footer_link_3"
                            :partData="touchedData.footer_link_3"/>
            </li>
            <li class="nav-item">
              <TextEditable tag="a"
                            cssClass="nav-link active"
                            name="footer_link_4"
                            :partData="touchedData.footer_link_4"/>
            </li>
          </ul>
        </div>

        <div class="col mt-4 mt-md-0 text-center text-md-right">
          <TextEditable
             tag="a"
             cssClass="btn btn-primary mx-md-3"
             name="header_button"
             :partData="touchedData.header_button"/>
        </div>
      </div>
    </footer>
    </BgEditable>
  </div>
</template>
<script>
import widgetMixin from '@/mixins/widget'

export default {
  name: 'Footer_6',
  mixins: [widgetMixin],
  props: {
    defaultData: {
      default () {
        return {
          // general widget config
          config: {
            fullWidth: true
          },
          bg: {
            styles: {}
          },
          footer_link_1: {
            styles: {},
            text: this.faker.lorem.words(1),
            href: this.faker.url()
          },
          footer_link_2: {
            styles: {},
            text: this.faker.lorem.words(1),
            href: this.faker.url()
          },
          footer_link_3: {
            styles: {},
            text: this.faker.lorem.words(1),
            href: this.faker.url()
          },
          footer_link_4: {
            styles: {},
            text: this.faker.lorem.words(1),
            href: this.faker.url()
          },
          header_button: {
            styles: {
              'min-width': '6em',
              'color': 'white'
            },
            text: this.faker.lorem.words(2),
            href: this.faker.url()
          }
        }
      },
      require: false
    }
  }
}
</script>
