<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <section class="mz-block py-0">
      <div class="container py-5" style="background-image: url(imgs/shapes/6.svg);">
        <div class="row text-center justify-content-center">
          <div class="col-12 col-md-8 col-lg-7">
            <TextEditable
               tag="h1"
               name="mainTitle"
               :partData="touchedData.mainTitle"/>
            <TextEditable tag="p"
                          cssClass="text-h3"
                          name="contact_submit"
                          :partData="touchedData.contact_subtitle_1"/>
          </div>
        </div>
        <div class="row-50">
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-7">
            <form>
              <div class="row">
                <div class="col">
                  <TextEditable
                     tag="label"
                     name="contact_submit"
                     :partData="touchedData.contact_subtitle_2"/>
                  <input type="text" class="form-control">
                </div>
              </div>

              <div class="row mt-4">
                <div class="col">
                  <TextEditable
                     tag="label"
                     name="contact_submit"
                     :partData="touchedData.contact_subtitle_3"/>
                  <input type="email" class="form-control">
                </div>
              </div>

              <div class="row mt-4">
                <div class="col">
                  <TextEditable
                     tag="label"
                     name="contact_submit"
                     :partData="touchedData.contact_subtitle_4"/>
                  <textarea class="form-control" name="message" rows="3"></textarea>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col text-right">
                  <button type="submit" class="btn btn-dark">
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
        <div class="row-100"></div>
      </div>

      <div class="container-fluid p-0">
        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"
                width="100%" height="300" frameborder="0" style="border:0" allowfullscreen=""></iframe>
      </div>
    </section>
    </BgEditable>
  </div>
</template>

<script>
import widgetMixin from '@/mixins/widget'

export default {
  name: 'contact_7',
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
            text: this.faker.lorem.words(2)
          },
          contact_subtitle_1: {
            styles: {},
            text: this.faker.lorem.words(15)
          },
          contact_subtitle_2: {
            styles: {},
            text: this.faker.lorem.words(3)
          },
          contact_subtitle_3: {
            styles: {},
            text: this.faker.lorem.words(2)
          },
          contact_subtitle_4: {
            styles: {},
            text: this.faker.lorem.words(4)
          },
          contact_submit: {
            styles: {},
            text: this.faker.lorem.words(1)
          }
        }
      }
    },
    require: false
  }
}
</script>
