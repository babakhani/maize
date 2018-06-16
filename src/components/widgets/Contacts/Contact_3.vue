<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode">
      <section class="fdb-block">
        <div class="container">
          <div class="row text-center justify-content-center">
            <div class="col-12 col-md-8 col-lg-7">
              <h1>Contact Us</h1>
              <p class="text-h3">One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
            </div>
          </div>

          <div class="row pt-4">
            <div class="col-12 col-md-6">
              <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>

            <div class="col-12 col-md-6 pt-5 pt-md-0">
              <form>
                <div class="row">
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
        <section class="fdb-block">
          <div class="container">
            <div class="row text-center justify-content-center">
              <div class="col-12 col-md-8 col-lg-7">
                <text-editable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle">
                </text-editable>
                <br/>
                <text-editable tag="p"
                               cssClass="text-h3"
                               name="contact_subtitle"
                               :partData="touchedData.contact_subtitle">
                </text-editable>
              </div>
            </div>

            <div class="row pt-4">
              <div class="col-12 col-md-6">
                <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
              </div>

              <div class="col-12 col-md-6 pt-5 pt-md-0">
                <form>
                  <div class="row">
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
    name: 'contact_3',
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
              text: this.faker.lorem.words(10),
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
