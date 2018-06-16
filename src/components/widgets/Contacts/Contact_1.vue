<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode">
      <section class="fdb-block pt-0">
        <div class="container-fluid p-0 pb-md-5">
          <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        <div class="container">
          <div class="row mt-5">
            <div class="col-12 col-md-6 col-lg-5">
              <h2>Contact Us</h2>
              <p class="text-h3">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
              </p>

              <p class="text-h3">
                It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </p>


              <p class="text-h3 mt-5">
                <strong>Email:</strong> <a href="https://www.froala.com">hello@website.com</a>
              </p>
              <p class="text-h3">
                <strong>Phone:</strong> <a href="https://www.froala.com">+44 123 123 1232</a>
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
                    <button type="submit" class="btn">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div v-else
         class="widget-block">
      <WidgetToolbox></WidgetToolbox>
      <div class="widget-block--name">
        {{$options.name}}
      </div>
      <BgEditable
        name="bg"
        v-if="touchedData.bg"
        :partData="touchedData.bg">
        <section class="fdb-block pt-0">
          <div class="container-fluid p-0 pb-md-5">
            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
          <div class="container">
            <div class="row mt-5">
              <div class="col-12 col-md-6 col-lg-5">
                <text-editable tag="h2"
                               name="mainTitle"
                               :partData="touchedData.mainTitle">
                </text-editable>
                <text-editable tag="p"
                               cssClass="text-h3"
                               name="contact_description"
                               :partData="touchedData.contact_description">
                </text-editable>

                <text-editable tag="p"
                               cssClass="text-h3"
                               name="contact_description_subtitle"
                               :partData="touchedData.contact_description_subtitle">
                </text-editable>


                <p class="text-h3 mt-5">
                  <text-editable tag="strong"
                                 cssClass="text-h3"
                                 name="contact_email_key"
                                 :partData="touchedData.contact_email_key">
                  </text-editable>
                  <text-editable tag="a"
                                 name="contact_email_value"
                                 :partData="touchedData.contact_email_value">
                  </text-editable>
                </p>
                <p class="text-h3">
                  <text-editable tag="strong"
                                 cssClass="text-h3"
                                 name="contact_phone_key"
                                 :partData="touchedData.contact_phone_key">
                  </text-editable>
                  <text-editable tag="a"
                                 name="contact_phone_value"
                                 :partData="touchedData.contact_phone_value">
                  </text-editable>
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
                        <text-editable tag="span"
                                       name="contact_submit"
                                       :partData="touchedData.contact_submit">
                        </text-editable>
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
