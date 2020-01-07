<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
      <section class="mz-block">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-6 text-center">
              <TextEditable 
                tag="h1"
                name="mainTitle"
                :partData="touchedData.mainTitle">
              </TextEditable>
              <TextEditable 
                tag="p"
                name="description"
                cssClass="text-h3"
                :partData="touchedData.description">
              </TextEditable>
              <p class="mt-5 mt-sm-4">
                <TextEditable tag="a"
                  cssClass="btn btn-primary px-3"
                  name="action_link"
                  :partData="touchedData.action_link">
                </TextEditable>
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
    name: 'CallToAction_2',
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
              src: this.faker.internet.url(),
            },
            action_link: {
              styles: {},
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
