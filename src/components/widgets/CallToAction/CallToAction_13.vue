<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <section class="mz-block">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-5 text-center pb-md-5">
            <TextEditable tag="h1"
                          name="mainTitle"
                          :partData="touchedData.mainTitle"/>
            <TextEditable tag="p"
                          name="description"
                          cssClass="lead text-muted"
                          :partData="touchedData.description"/>
            <p class="mt-4">
            <TextEditable tag="a"
                          cssClass="btn btn-primary"
                          name="action_link"
                          :partData="touchedData.action_link"/>
            </p>
          </div>
        </div>
        <div class="row text-center justify-content-center pt-5">
          <div class="col-12 col-sm-6 col-lg-3">
            <ImageEditable name="customer_logo_1"
                           class="mz-icon"
                           :partData="touchedData.customer_logo_1"/>

            <TextEditable tag="h3"
                          name="subTitle_1"
                          cssClass="font-weight-bold"
                          :partData="touchedData.subTitle_1"/>

            <TextEditable tag="p"
                          name="detail_1"
                          cssClass="text-muted"
                          :partData="touchedData.detail_1"/>
          </div>
          <div class="col-12 col-sm-6 col-lg-3 pt-4 pt-sm-0">
            <ImageEditable name="customer_logo_2"
                           class="mz-icon"
                           :partData="touchedData.customer_logo_2"/>

            <TextEditable tag="h3"
                          name="subTitle_2"
                          cssClass="font-weight-bold"
                          :partData="touchedData.subTitle_2"/>

            <TextEditable tag="p"
                          name="detail_2"
                          cssClass="text-muted"
                          :partData="touchedData.detail_2"/>
          </div>

          <div class="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">
            <ImageEditable name="customer_logo_3"
                           class="mz-icon"
                           :partData="touchedData.customer_logo_3"/>

            <TextEditable tag="h3"
                          name="subTitle_3"
                          cssClass="font-weight-bold"
                          :partData="touchedData.subTitle_3"/>

            <TextEditable tag="p"
                          name="detail_3"
                          cssClass="text-muted"
                          :partData="touchedData.detail_3"/>
          </div>

          <div class="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">
            <ImageEditable name="customer_logo_4"
                           class="mz-icon"
                           :partData="touchedData.customer_logo_4"/>

            <TextEditable tag="h3"
                          name="subTitle_4"
                          cssClass="font-weight-bold"
                          :partData="touchedData.subTitle_4"/>

            <TextEditable tag="p"
                          name="detail_4"
                          cssClass="text-muted"
                          :partData="touchedData.detail_4"/>
          </div>
        </div>
      </div>
    </section>
    </BgEditable>
  </div>
</template>

<script>
import widgetMixin from '@/mixins/widget'

export default {
  name: 'CallToAction_13',
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
            text: this.faker.lorem.words(2)
          },
          subTitle_1: {
            styles: {},
            text: this.faker.lorem.words(2)
          },
          subTitle_2: {
            styles: {},
            text: this.faker.lorem.words(2)
          },
          subTitle_3: {
            styles: {},
            text: this.faker.lorem.words(2)
          },
          subTitle_4: {
            styles: {},
            text: this.faker.lorem.words(2)
          },
          description: {
            styles: {},
            text: this.faker.lorem.words(18)
          },
          detail_1: {
            styles: {},
            text: this.faker.lorem.words(10)
          },
          detail_2: {
            styles: {},
            text: this.faker.lorem.words(10)
          },
          detail_3: {
            styles: {},
            text: this.faker.lorem.words(10)
          },
          detail_4: {
            styles: {},
            text: this.faker.lorem.words(10)
          },
          action_link: {
            styles: {
              'color': 'white'
            },
            text: this.faker.lorem.words(2),
            src: this.faker.internet.url
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
