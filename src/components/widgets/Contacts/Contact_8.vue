<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <section class="mz-block pt-0">
      <div class="container-fluid p-0 pb-5">
        <iframe class="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"
                width="100%"
                height="300"
                frameborder="0"
                style="border:0"
                allowfullscreen ></iframe>
      </div>
      <div class="container">
        <div class="row pt-5">
          <div class="col-12">
            <form>
              <div class="row">
                <div class="col-12 col-md">
                  <TextEditable
                     tag="label"
                     name="contact_data_1"
                     :partData="touchedData.contact_data_1"/>
                  <input type="text" class="form-control">
                </div>
                <div class="col-12 col-md mt-4 mt-md-0">
                  <TextEditable
                     tag="label"
                     name="contact_data_2"
                     :partData="touchedData.contact_data_2"/>
                  <input type="text" class="form-control">
                </div>
              </div>

              <div class="row mt-4">
                <div class="col">
                  <TextEditable
                     tag="label"
                     name="contact_data_3"
                     :partData="touchedData.contact_data_3"/>
                  <input type="email" class="form-control">
                </div>
              </div>

              <div class="row mt-4">
                <div class="col">
                  <TextEditable
                     tag="label"
                     name="contact_data_4"
                     :partData="touchedData.contact_data_4"/>
                  <input type="email" class="form-control">
                </div>
              </div>
              <div class="row mt-4">
                <div class="col">
                  <TextEditable
                     tag="label"
                     name="contact_data_5"
                     :partData="touchedData.contact_data_5"/>
                  <textarea class="form-control" name="message" rows="3"></textarea>
                </div>
              </div>
              <div class="row mt-4 text-center">
                <div class="col">
                  <TextEditable
                    tag="a"
                    cssClass="btn btn-success"
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
  name: 'contact_8',
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
          map: {
            frameSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d202.4638644087684!2d51.4011784!3d35.7158429!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e013cec9206f7%3A0x2c16f7bd21e83940!2z2KrZhdin2LTYpw!5e0!3m2!1sen!2sde!4v1577906862185!5m2!1sen!2sde'
          },
          contact_data_1: {
            styles: {
              'font-size': '17px'
            },
            text: this.faker.lorem.words(3)
          },
          contact_data_2: {
            styles: {
              'font-size': '17px'
            },
            text: this.faker.lorem.words(3)
          },
          contact_data_3: {
            styles: {
              'font-size': '17px'
            },
            text: this.faker.lorem.words(3)
          },
          contact_data_4: {
            styles: {
              'font-size': '17px'
            },
            text: this.faker.lorem.words(5)
          },
          contact_data_5: {
            styles: {
              'font-size': '17px'
            },
            text: this.faker.lorem.words(3)
          },
          contact_submit: {
            styles: {
              'min-width': '8em',
              'color': 'white'
            },
            text: this.faker.lorem.words(1)
          }
        }
      },
      require: false
    }
  }
}
</script>
