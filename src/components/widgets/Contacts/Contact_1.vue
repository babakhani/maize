<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
      <section class="mz-block p-0">
        <div class="container-fluid p-0 pb-md-5">
          <MapEditable
            name="map"
            :partData="touchedData.map" />
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
                <form 
                  method="post"
                  action="mailto:babakhani.reza@gmail.com">
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
                      <ButtonEditable 
                         type="submit" 
                         cssClass="btn btn-info"
                         name="contact_submit"
                         :partData="touchedData.contact_submit"/>
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
              fullWidth: true,
              email: this.siteSettings.contactMail
            },
            bg: {
              styles: {}
            },
            map: {
              frameSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d202.4638644087684!2d51.4011784!3d35.7158429!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e013cec9206f7%3A0x2c16f7bd21e83940!2z2KrZhdin2LTYpw!5e0!3m2!1sen!2sde!4v1577906862185!5m2!1sen!2sde'
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
              text: this.siteSettings.contactAddress,
            },
            contact_email_key: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            contact_email_value: {
              styles: {},
              text: this.siteSettings.contactMail,
            },
            contact_phone_key: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            contact_phone_value: {
              styles: {},
              text: this.siteSettings.contactPhone1,
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
