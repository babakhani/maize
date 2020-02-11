<template>
  <div>
    <WidgetToolbox></WidgetToolbox>
    <BgEditable>
    <section class="mz-block">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 text-center">
            <div class="row justify-content-center pb-5">
              <div class="col-4 col-sm-3 col-md-2">
                <ImageEditable name="image"
                               class="text-left"
                               cssClass="mz-icon mb-3"
                               :partData="touchedData.image"/>
              </div>
              <div class="col-4 col-sm-3 col-md-2">   
                <ImageEditable name="image"
                               class="text-left"
                               cssClass="mz-icon mb-3"
                               :partData="touchedData.image"/>
              </div>
              <div class="col-4 col-sm-3 col-md-2">    
                <ImageEditable name="image"
                               class="text-left"
                               cssClass="mz-icon mb-3"
                               :partData="touchedData.image"/>
              </div>
            </div>

            <TextEditable tag="p"
                          name="description"
                          cssClass="text-h3 text-muted"
                          :partData="touchedData.description"/>
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
  name: 'Content_20',
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
          description: {
            styles: {},
            text: this.faker.lorem.words(30),
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
