<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
      <section class="mz-block pt-0">
        <div class="container-fluid p-0 pb-3">
          <iframe class="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"
                  width="100%"
                  height="300"
                  frameborder="0"
                  style="border:0"
                  allowfullscreen></iframe>
        </div>
        <div class="container">
          <div class="row text-center justify-content-center pt-5">
            <div class="col-12 col-md-7">
              <TextEditable 
                tag="h1"
                name="mainTitle"
                :partData="touchedData.mainTitle"/>
            </div>
          </div>

          <div class="row justify-content-center pt-4">
            <div class="col-12 col-md-7">
              <form>
                <div class="row">
                  <div class="col">
                    <input type="text"
                           class="form-control"
                           placeholder="Email">
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col">
                    <input type="email"
                           class="form-control"
                           placeholder="Subject">
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col">
                    <textarea class="form-control"
                              name="message"
                              rows="3"
                              placeholder="How can we help?"></textarea>
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col text-center">
                    <button type="submit"
                            class="btn">
                      <TextEditable tag="span"
                                     name="contact_submit"
                                     :partData="touchedData.contact_submit"/>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="row-100"></div>
        </div>
        <div class="bg-dark mt-3 pt-3">
          <div class="container">
            <div class="row-50"></div>
            <div class="row justify-content-center text-center">
              <div class="col-12 col-md mr-auto ml-auto">
                <ImageEditable name="contact_image_1"
                               cssClass="mb-2"
                               :partData="touchedData.contact_image_1"/>
                <TextEditable tag="p"
                               cssClass="text-h3"
                               name="contact_phone"
                               :partData="touchedData.contact_phone"/>
              </div>

              <div class="col-12 col-md pt-4 pt-md-0 mr-auto ml-auto">
                <ImageEditable name="contact_image_2"
                               cssClass="mb-2"
                               :partData="touchedData.contact_image_2"/>
                <TextEditable tag="p"
                               cssClass="text-h3"
                               name="contact_address"
                               :partData="touchedData.contact_address"/>
              </div>

              <div class="col-12 col-md pt-4 pt-md-0 mr-auto ml-auto">
                <ImageEditable name="contact_image_3"
                               cssClass="mb-2"
                               :partData="touchedData.contact_image_3"/>
                <TextEditable tag="p"
                               cssClass="text-h3"
                               name="contact_email_value"
                               :partData="touchedData.contact_email_value"/>
              </div>
            </div>
            <div class="row-50"></div>
          </div>
        </div>

        <div class="container">
          <div class="row-70"></div>
          <div class="row text-center">
            <div class="col">
              <p class="text-h2">
                <a href="/"><i class="fa fa-facebook"></i></a>&nbsp;&nbsp;&nbsp;
                <a href="/"><i class="fa fa-twitter"></i></a>&nbsp;&nbsp;&nbsp;
                <a href="/"><i class="fa fa-instagram"></i></a>&nbsp;&nbsp;&nbsp;
                <a href="/"><i class="fa fa-google"></i></a>&nbsp;&nbsp;&nbsp;
                <a href="/"><i class="fa fa-pinterest"></i></a>
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
    name: 'contact_5',
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
            contact_subtitle: {
              styles: {},
              text: this.faker.lorem.words(5),
            },
            contact_submit: {
              styles: {},
              text: this.faker.lorem.words(1),
            },
            contact_phone: {
              styles: {},
              text: this.faker.phone.phoneNumber()
            },
            contact_image_1: {
              styles: {
                height: '40px'
              },
              src: this.faker.img.rounded()
            },
            contact_image_2: {
              styles: {
                height: '40px'
              },
              src: this.faker.img.rounded()
            },
            contact_address: {
              styles: {},
              text: this.faker.fake("{{address.city}}, {{address.stateAbbr}} {{address.zipCode}}")
            },
            contact_image_3: {
              styles: {
                height: '40px'
              },
              src: this.faker.img.rounded()
            },
            contact_email_value: {
              styles: {},
              text: this.faker.internet.email(),
            }
          }
        }
      },
      require: false
    }
  }
</script>
