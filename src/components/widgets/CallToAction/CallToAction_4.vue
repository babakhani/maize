<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
      <section class="mz-block">
        <div class="container">
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
                  cssClass="btn"
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
          <div class="row">
            <div class="col-12 text-center">
              <ImageEditable name="customer_logo_1"
                cssClass="ml-3 mr-3 mb-2 mt-2"
                :partData="touchedData.customer_logo_1"/>
              <ImageEditable name="customer_logo_2"
                cssClass="ml-3 mr-3 mb-2 mt-2"
                :partData="touchedData.customer_logo_2"/>
              <ImageEditable name="customer_logo_3"
                cssClass="ml-3 mr-3 mb-2 mt-2"
                :partData="touchedData.customer_logo_3"/>
              <ImageEditable name="customer_logo_4"
                cssClass="ml-3 mr-3 mb-2 mt-2"
                :partData="touchedData.customer_logo_4"/>
              <ImageEditable name="customer_logo_5"
                cssClass="ml-3 mr-3 mb-2 mt-2"
                :partData="touchedData.customer_logo_5"/>
              <ImageEditable name="customer_logo_6"
                cssClass="ml-3 mr-3 mb-2 mt-2"
                :partData="touchedData.customer_logo_6"/>
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
              text: this.faker.lorem.words(50),
            },
            action_link: {
              styles: {},
              text: this.faker.lorem.words(2),
              src: this.faker.internet.url
            },
            description_business: {
              styles: {},
              text: this.faker.lorem.words(10)
            },
            customer_logo_1: {
              styles: {
                height: '30px'
              },
              src: this.faker.img.customer_1()
            },
            customer_logo_2: {
              styles: {
                height: '30px'
              },
              src: this.faker.img.customer_2()
            },
            customer_logo_3: {
              styles: {
                height: '30px'
              },
              src: this.faker.img.customer_3()
            },
            customer_logo_4: {
              styles: {
                height: '30px'
              },
              src: this.faker.img.customer_4()
            },
            customer_logo_5: {
              styles: {
                height: '30px'
              },
              src: this.faker.img.customer_5()
            },
            customer_logo_6: {
              styles: {
                height: '30px'
              },
              src: this.faker.img.customer_6()
            }
          }
        },
        require: false
      }
    }
  }
</script>
