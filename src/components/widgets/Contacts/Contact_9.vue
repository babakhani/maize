<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <section class="fdb-block bg-gray">
      <div class="container">
        <div class="row text-center justify-content-center">
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
            <div class="col-12 col-lg-2 mt-4 mt-lg-0 ml-25">
              <ul class="d-flex">
                <li class="d-inline-flex">
                  <IconEditable
                    cssClass=""
                    name="contact_social_link_1"
                    :partData="touchedData.contact_social_link_1"/>
                </li>
                <li class="ml-3 d-inline-flex">
                  <IconEditable
                    cssClass=""
                    name="contact_social_link_2"
                    :partData="touchedData.contact_social_link_2"/>
                </li>
                <li class="ml-3 d-inline-flex">
                  <IconEditable
                    cssClass=""
                    name="contact_social_link_3"
                    :partData="touchedData.contact_social_link_3"/>
                </li>
                <li class="ml-3 d-inline-flex">
                  <IconEditable
                    cssClass=""
                    name="contact_social_link_4"
                    :partData="touchedData.contact_social_link_4"/>
                </li>
                <li class="ml-3 d-inline-flex">
                  <IconEditable
                    cssClass=""
                    name="contact_social_link_5"
                    :partData="touchedData.contact_social_link_5"/>
                </li>
              </ul>
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
                'font-size' :'25px'
              },
              text: this.faker.lorem.words(4),
            },
            contact_subtitle: {
              styles: {
                'font-size' :'20px'
              },
              text: this.faker.lorem.words(15),
            },
            contact_social_link_1: {
              styles: {
                'font-size': '30px'
              },
              iconName: 'fab fa-github',
              text: '<i class="fab fa-slack"></i>',
              href: this.faker.internet.url()
            },
            contact_social_link_2: {
              styles: {
                'font-size': '30px'
              },
              iconName: 'fab fa-instagram',
              text: '<i class="fab fa-instagram"></i>',
              href: this.faker.internet.url()
            },
            contact_social_link_3: {
              styles: {
                'font-size': '30px'
              },
              iconName: 'fab fa-twitter',
              text: '<i class="fab fa-twitter"></i>',
              href: this.faker.internet.url()
            },
            contact_social_link_4: {
              styles: {
                'font-size': '30px'
              },
              iconName: 'fab fa-google',
              text: '<i class="fab fa-google"></i>',
              href: this.faker.internet.url()
            },
            contact_social_link_5: {
              styles: {
                'font-size': '30px'
              },
              iconName: 'fab fa-facebook',
              text: '<i class="fab fa-facebook"></i>',
              href: this.faker.internet.url()
            }
          }
        }
      },
      require: false
    }
  }
</script>
<style scope>
.ml-25 {
   margin-left: 150px !important;
}
</style>
