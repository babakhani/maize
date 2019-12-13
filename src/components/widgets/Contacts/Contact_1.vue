<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
      <section class="fdb-block pt-0">
        <div class="container-fluid p-0 pb-md-5">
          <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        <div class="container">
          <div class="row mt-5">
            <div class="col-12 col-md-6 col-lg-5">
              <TextEditable 
                tag="h2"
                name="mainTitle"
                :partData="touchedData.mainTitle"/>
              <TextEditable 
                tag="p"
                cssClass="text-h3"
                name="contact_description"
                :partData="touchedData.contact_description"/>
              <TextEditable 
                tag="p"
                cssClass="text-h3"
                name="contact_description_subtitle"
                :partData="touchedData.contact_description_subtitle"/>
              <p class="text-h3 mt-5">
                <TextEditable 
                  tag="strong"
                  cssClass="text-h3"
                  name="contact_email_key"
                  :partData="touchedData.contact_email_key"/>
                <TextEditable 
                  tag="a"
                  name="contact_email_value"
                  :partData="touchedData.contact_email_value"/>
              </p>
              <p class="text-h3">
                <TextEditable 
                  tag="strong"
                  cssClass="text-h3"
                  name="contact_phone_key"
                  :partData="touchedData.contact_phone_key"/>
                <TextEditable 
                  tag="a"
                  name="contact_phone_value"
                  :partData="touchedData.contact_phone_value"/>
              </p>
            </div>
            <div class="col-12 col-md-6 ml-auto pt-5 pt-md-0">
              <form>
                <div class="row">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="First name">
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Last name">
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col">
                    <input type="email" class="form-control" placeholder="Enter email">
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col">
                    <input type="email" class="form-control"  placeholder="Subject">
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col">
                    <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea>
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col">
                    <button type="submit" class="btn">
                      <TextEditable 
                        tag="span"
                        name="contact_submit"
                        :partData="touchedData.contact_submit"/>
                    </button>
                  </div>
                </div>
              </form>
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
    name: 'contact_1',
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
              text: this.faker.lorem.words(2),
            },
            contact_description: {
              styles: {},
              text: this.faker.lorem.words(40),
            },
            contact_description_subtitle: {
              styles: {},
              text: this.faker.lorem.words(10),
            },
            contact_email_key: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            contact_email_value: {
              styles: {},
              text: this.faker.internet.email(),
            },
            contact_phone_key: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            contact_phone_value: {
              styles: {},
              text: this.faker.phone.phoneNumber(),
            },
            contact_submit: {
              styles: {},
              text: this.faker.lorem.words(1),
            }
          }
        },
        require: false
      }
    }
  }
</script>
