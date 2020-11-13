<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <section class="mz-block">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6 text-center">
          <TextEditable
             tag="h1"
             name="mainTitle"
             :partData="touchedData.mainTitle"/>
          <TextEditable tag="p"
                        name="description"
                        cssClass="text-h3"
                        :partData="touchedData.description"/>
          <p class="mt-5 mt-sm-4">
          <TextEditable
             tag="a"
             cssClass="btn btn-primary"
             name="action_link"
             :partData="touchedData.action_link"/>
          </p>
        </div>
      </div>
      <div class="row pt-5 pb-3">
        <div class="col-12 text-center">
          <TextEditable
             tag="p"
             name="description_business"
             cssClass="text-h3"
             :partData="touchedData.description_business"/>
        </div>
      </div>
      <b-row class="justify-content-center">
        <div class="col-12 text-center">
          <ImageEditable name="customer_logo_1"
                         cssClass="mx-2 my-2"
                         class="d-inline-block"
                         :partData="touchedData.customer_logo_1"/>
          <ImageEditable name="customer_logo_2"
                         cssClass="mx-2 my-2"
                         class="d-inline-block"
                         :partData="touchedData.customer_logo_2"/>
          <ImageEditable name="customer_logo_3"
                         cssClass="mx-2 my-2"
                         class="d-inline-block"
                         :partData="touchedData.customer_logo_3"/>
          <ImageEditable name="customer_logo_4"
                         cssClass="mx-2 my-2"
                         class="d-inline-block"
                         :partData="touchedData.customer_logo_4"/>
          <ImageEditable name="customer_logo_5"
                         cssClass="mx-2 my-2"
                         class="d-inline-block"
                         :partData="touchedData.customer_logo_5"/>
          <ImageEditable name="customer_logo_6"
                         cssClass="mx-2 my-2"
                         class="d-inline-block"
                         :partData="touchedData.customer_logo_6"/>
        </div>
      </b-row>
    </section>
    </BgEditable>
  </div>
</template>

<script>
import widgetMixin from '@/mixins/widget'

export default {
  name: 'CallToAction_4',
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
          mainTitle: {
            styles: {},
            text: this.faker.lorem.words(3)
          },
          description: {
            styles: {},
            text: this.faker.lorem.words(50)
          },
          action_link: {
            styles: {
              'color': 'white'
            },
            text: this.faker.lorem.words(3),
            href: this.faker.url()
          },
          description_business: {
            styles: {},
            text: this.faker.lorem.words(8)
          },
          customer_logo_1: {
            styles: {
              height: '50px'
            },
            src: this.faker.img.rounded()
          },
          customer_logo_2: {
            styles: {
              height: '50px'
            },
            src: this.faker.img.rounded()
          },
          customer_logo_3: {
            styles: {
              height: '50px'
            },
            src: this.faker.img.rounded()
          },
          customer_logo_4: {
            styles: {
              height: '50px'
            },
            src: this.faker.img.rounded()
          },
          customer_logo_5: {
            styles: {
              height: '50px'
            },
            src: this.faker.img.rounded()
          },
          customer_logo_6: {
            styles: {
              height: '50px'
            },
            src: this.faker.img.rounded()
          }
        }
      },
      require: false
    }
  }
}
</script>
