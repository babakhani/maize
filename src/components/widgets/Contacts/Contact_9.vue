<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <section class="mz-block bg-gray">
      <div class="container">
        <div class="row text-center justify-content-center py-3">
          <div class="col-12 col-md-8 col-lg-7">
            <TextEditable tag="p"
                          cssClass=""
                          name="contact_title"
                          :partData="touchedData.contact_title"/>
            <br>
            <TextEditable tag="p"
                          cssClass="text-muted"
                          name="contact_subtitle"
                          :partData="touchedData.contact_subtitle"/>
            <p><br></p>
            <div class="row mt-4">
              <div class="col-6 col-md-8 col-xs-12 mx-auto">
                <div class="d-inline-flex">
                  <IconEditable
                    name="contact_social_link_1"
                    :partData="touchedData.contact_social_link_1"/>
                </div>
                <div class="ml-3 d-inline-flex">
                  <IconEditable
                    name="contact_social_link_2"
                    :partData="touchedData.contact_social_link_2"/>
                </div>
                <div class="ml-3 d-inline-flex">
                  <IconEditable
                    name="contact_social_link_3"
                    :partData="touchedData.contact_social_link_3"/>
                </div>
                <div class="ml-3 d-inline-flex">
                  <IconEditable
                    name="contact_social_link_4"
                    :partData="touchedData.contact_social_link_4"/>
                </div>
              </div>
            </div>
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
  name: 'contact_9',
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
          contact_title: {
            styles: {
              'font-size': '23px'
            },
            text: this.faker.lorem.words(4)
          },
          contact_subtitle: {
            styles: {
              'font-size': '23px'
            },
            text: this.faker.lorem.words(15)
          },
          contact_social_link_1: {
            styles: {
              'font-size': '23px'
            },
            iconName: 'fab fa-github',
            href: this.faker.url()
          },
          contact_social_link_2: {
            styles: {
              'font-size': '23px'
            },
            iconName: 'fab fa-instagram',
            href: this.faker.url()
          },
          contact_social_link_3: {
            styles: {
              'font-size': '23px'
            },
            iconName: 'fab fa-twitter',
            href: this.faker.url()
          },
          contact_social_link_4: {
            styles: {
              'font-size': '23px'
            },
            iconName: 'fab fa-google',
            href: this.faker.url()
          }
        }
      }
    },
    require: false
  }
}
</script>
