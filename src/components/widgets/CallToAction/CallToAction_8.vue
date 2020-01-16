<template>
  <div>
    <WidgetToolbox />
    <BgEditable>
    <section class="mz-block">
      <div class="container">
        <div class="row text-center pb-0 pb-lg-4">
          <div class="col-12">
            <TextEditable 
               tag="h1"
               name="title_main"
               :partData="touchedData.title_main"/>
          </div>
        </div>
          <div class="row text-center pt-4 pt-md-5">
            <div class="col-12 col-sm-10 col-md-6 col-lg-4 mx-sm-auto mb-3">
              <p>
              <ImageEditable
                 name="image_1"
                 cssClass="img-fluid"
                 :partData="touchedData.image_1"/>
              </p>
              <TextEditable 
                 tag="h3"
                 cssClass="text-h3"
                 name="title_1"
                 :partData="touchedData.title_1"/>
              <TextEditable 
                 tag="p"
                 name="description_1"
                 cssClass="lead"
                 :partData="touchedData.description_1"/>
              <p class="mt-3">
              <TextEditable 
                 tag="a"
                 cssClass="btn btn-primary px-3"
                 name="action_link_1"
                 :partData="touchedData.action_link_1"/>
              </p>
            </div>
            <div class="col-12 col-sm-10 col-md-6 col-lg-4 mx-sm-auto mb-3">
              <p>
              <ImageEditable
                 name="image_2"
                 cssClass="img-fluid"
                 :partData="touchedData.image_2"/>
              </p>
              <TextEditable 
                 tag="h3"
                 cssClass="text-h3"
                 name="title_2"
                 :partData="touchedData.title_2"/>
              <TextEditable 
                 tag="p"
                 name="description_2"
                 cssClass="lead"
                 :partData="touchedData.description_2"/>
              <p class="mt-3">
              <TextEditable 
                 tag="a"
                 cssClass="btn btn-primary px-3"
                 name="action_link_2"
                 :partData="touchedData.action_link_2"/>
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
    name: 'CallToAction_8',
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
            title_main: {
              styles: {},
              text: this.faker.lorem.words(3),
              src: this.faker.internet.url(),
            },
            title_1: {
              styles: {},
              text: this.faker.lorem.words(2),
              src: this.faker.internet.url(),
            },
            description_1: {
              styles: {},
              text: this.faker.lorem.words(20),
              src: this.faker.internet.url(),
            },
            image_1: {
              styles: {
                'height': '200px'
              },
              src: this.faker.img.big()
            },
            action_link_1: {
              styles: {
                'color': 'white'
              },
              text: this.faker.lorem.words(2),
              src: this.faker.internet.url
            },
            title_2: {
              styles: {},
              text: this.faker.lorem.words(2),
              src: this.faker.internet.url(),
            },
            description_2: {
              styles: {},
              text: this.faker.lorem.words(20),
              src: this.faker.internet.url(),
            },
            image_2: {
              styles: {
                'height': '200px'
              },
              src: this.faker.img.big()
            },
            action_link_2: {
              styles: {
                'color': 'white'
              },
              text: this.faker.lorem.words(2),
              src: this.faker.internet.url
            }
          }
        },
        require: false
      }
    }
  }
</script>
