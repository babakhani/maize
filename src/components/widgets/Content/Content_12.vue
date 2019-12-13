<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
        <section class="mz-block">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12 col-md-6 col-lg-5">
                <TextEditable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle"/>
                <TextEditable tag="p"
                               name="description"
                               cssClass="text-h3"
                               :partData="touchedData.description"/>
              </div>
              <div class="col-12 col-md-6 ml-md-auto mt-4 mt-md-0">
                <ImageEditable name="image"
                               cssClass="img-fluid"
                               :partData="touchedData.image"/>
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
    name: 'Content_12',
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
            }
          }
        },
        require: false
      }
    }
  }
</script>
