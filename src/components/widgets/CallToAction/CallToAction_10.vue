<template>
  <div>
    <WidgetToolbox />
    <BgEditable>
    <section class="mz-block">
      <div class="container py-5">
        <div class="row">
          <div class="col-12">
            <TextEditable
               tag="h1"
               name="mainTitle"
               :partData="touchedData.mainTitle"/>
            <TextEditable
               tag="p"
               name="description"
               cssClass="lead"
               :partData="touchedData.description_1"/>
          </div>
        </div>

        <div class="row justify-content-center align-items-center pt-5">
          <div class="col-8 col-sm-3">
            <!--<img alt="image" class="img-fluid" src="./imgs/draws/code.svg">-->
            <ImageEditable name="image"
                           cssClass="img-fluid"
                           :partData="touchedData.image"/>
          </div>
          <div class="col-12 col-sm-6 m-auto pt-4 pt-sm-0">
            <TextEditable
               tag="h2"
               name="title"
               :partData="touchedData.title"/>
            <TextEditable
               tag="p"
               name="description"
               cssClass="lead"
               :partData="touchedData.description_2"/>
          </div>
          <div class="col-12 col-sm-3 text-center pt-4 pt-sm-0">
            <p class="">
            <TextEditable
               tag="a"
               cssClass="btn btn-outline-primary px-3"
               name="action_link"
               :partData="touchedData.action_link_1"/>
            </p>
            <p class="mt-2">
            <TextEditable
               tag="a"
               cssClass="btn btn-primary text-white px-3"
               name="action_link"
               :partData="touchedData.action_link_2"/>
            </p>
            <TextEditable
               tag="p"
               name="description"
               cssClass="h5"
               :partData="touchedData.description_3"/>
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
  name: 'CallToAction_10',
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
          title: {
            styles: {},
            text: this.faker.lorem.words(2)
          },
          description_1: {
            styles: {},
            text: this.faker.lorem.words(40),
            src: this.faker.url()
          },
          description_2: {
            styles: {},
            text: this.faker.lorem.words(20),
            src: this.faker.url()
          },
          description_3: {
            styles: {},
            text: this.faker.lorem.words(3),
            src: this.faker.url()
          },
          action_link_1: {
            styles: {
              'min-width': '120px'
            },
            text: this.faker.lorem.words(1),
            src: this.faker.internet.url
          },
          action_link_2: {
            styles: {
              'min-width': '120px'
            },
            text: this.faker.lorem.words(1),
            src: this.faker.internet.url
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
