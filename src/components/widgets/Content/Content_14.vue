<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="fdb-block">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12 col-md-6 mb-4 mb-md-0">
                <ImageEditable name="image"
                               cssClass="img-fluid"
                               :partData="touchedData.image"/>
              </div>
              <div class="col-12 col-md-6 col-lg-5 ml-md-auto text-left">
                <TextEditable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle"/>
                <TextEditable tag="p"
                               name="description"
                               cssClass="text-h3"
                               :partData="touchedData.description"/>
                <p>
                  <TextEditable tag="a"
                                 name="link"
                                 cssClass="btn btn-round mt-4"
                                 :partData="touchedData.link"/>
                </p>
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
    name: 'Content_14',
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
              text: this.faker.lorem.words(3),
            },
            link: {
              styles: {},
              text: 'Download',
              src: this.faker.internet.url(),
            },
            description: {
              styles: {},
              text: this.faker.lorem.words(100),
              src: this.faker.internet.url(),
            },
            image: {
              styles: {},
              src: this.faker.img.big()
            }
          }
        },
        require: false
      }
    }
  }
</script>
