<template>
  <div>
      <WidgetToolbox></WidgetToolbox>
      <BgEditable>
        <section class="mz-block">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12 col-md-6 col-lg-5">
                <ImageEditable name="image"
                               class="text-left"
                               cssClass="mz-icon"
                               :partData="touchedData.image"/>

                <TextEditable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle"/>
                <TextEditable tag="p"
                               name="description"
                               cssClass="text-h3"
                               :partData="touchedData.description"/>
              </div>
              <div class="col-10 col-sm-6 m-auto col-md-4 pt-4 pt-md-0">
                <ImageEditable name="imageTall"
                               cssClass="img-fluid br-0"
                               :partData="touchedData.imageTall"/>
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
    name: 'Content_15',
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
            description: {
              styles: {},
              text: this.faker.lorem.words(100),
              src: this.faker.internet.url(),
            },
            image: {
              styles: {},
              src: this.faker.img.big()
            },
            imageTall: {
              styles: {},
              src: this.faker.img.tall()
            }
          }
        },
        require: false
      }
    }
  }
</script>
