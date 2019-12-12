<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode">
      <section class="fdb-block">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-6 text-center">
              <h1>Call to Action</h1>
              <p class="text-h3">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
              </p>
              <p class="mt-5 mt-sm-4">
                <a class="btn" href="/">Download</a>
              </p>
            </div>
          </div>

          <div class="row pt-5 pb-3">
            <div class="col-12 text-center">
              <p><strong>Fortune 100 companies are using our products</strong></p>
            </div>
          </div>
          <div class="row">
            <div class="col-12 text-center">
              <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="/static/imgs/customers/adobe.svg">
              <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="/static/imgs/customers/discovery.svg">
              <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2 " src="/static/imgs/customers/ebay.svg">
              <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="/static/imgs/customers/samsung.svg">
              <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="/static/imgs/customers/orange.svg">
              <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="/static/imgs/customers/salesforce.svg">
            </div>
          </div>
        </div>
      </section>
    </div>
    <div v-else
         class="widget-block">
      <WidgetToolbox></WidgetToolbox>
      <div class="widget-block--name">
        {{$options.name}}
      </div>
      <BgEditable
        name="bg"
        v-if="touchedData.bg"
        :partData="touchedData.bg">
        <section class="fdb-block">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 col-md-8 col-lg-6 text-center">
                <text-editable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle">
                </text-editable>
                <text-editable tag="p"
                               name="description"
                               cssClass="text-h3"
                               :partData="touchedData.description">
                </text-editable>
                <p class="mt-5 mt-sm-4">
                  <text-editable tag="a"
                                 cssClass="btn"
                                 name="action_link"
                                 :partData="touchedData.action_link">
                  </text-editable>
                </p>
              </div>
            </div>

            <div class="row pt-5 pb-3">
              <div class="col-12 text-center">
                <text-editable tag="p"
                               name="description_business"
                               cssClass="text-h3"
                               :partData="touchedData.description_business">
                </text-editable>
              </div>
            </div>
            <div class="row">
              <div class="col-12 text-center">
                <ImageEditable name="customer_logo_1"
                               cssClass="ml-3 mr-3 mb-2 mt-2"
                               :partData="touchedData.customer_logo_1">
                </ImageEditable>
                <ImageEditable name="customer_logo_2"
                               cssClass="ml-3 mr-3 mb-2 mt-2"
                               :partData="touchedData.customer_logo_2">
                </ImageEditable>
                <ImageEditable name="customer_logo_3"
                               cssClass="ml-3 mr-3 mb-2 mt-2"
                               :partData="touchedData.customer_logo_3">
                </ImageEditable>
                <ImageEditable name="customer_logo_4"
                               cssClass="ml-3 mr-3 mb-2 mt-2"
                               :partData="touchedData.customer_logo_4">
                </ImageEditable>
                <ImageEditable name="customer_logo_5"
                               cssClass="ml-3 mr-3 mb-2 mt-2"
                               :partData="touchedData.customer_logo_5">
                </ImageEditable>
                <ImageEditable name="customer_logo_6"
                               cssClass="ml-3 mr-3 mb-2 mt-2"
                               :partData="touchedData.customer_logo_6">
                </ImageEditable>
              </div>
            </div>
          </div>
        </section>
      </BgEditable>
    </div>
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
              text: this.faker.lorem.words(1),
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
