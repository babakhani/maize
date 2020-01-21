<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
    <section class="fdb-block">
      <div class="container">
        <div class="row text-center justify-content-center">
          <div class="col-12 col-md-8 col-lg-7">
            <TextEditable
              tag="h1"
              name="mainTitle"
              :partData="touchedData.mainTitle"/>
            <TextEditable
              tag="p"
              cssClass="text-h3"
              name="contact_subtitle_1"
              :partData="touchedData.contact_subtitle_1"/>
          </div>
        </div>
        <div class="row-70"></div>
        <div class="row">
          <div class="col-12 col-md-8 col-lg m-auto">
            <form>
              <div class="row">
                <div class="col">
                  <input type="email" class="form-control" placeholder="Enter email">
                </div>
              </div>

              <div class="row mt-4">
                <div class="col">
                  <input type="email" class="form-control" placeholder="Subject">
                </div>
              </div>
              <div class="row mt-4">
                <div class="col">
                  <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col">
                  <button type="submit" class="btn btn-primary">
                    <TextEditable tag="span"
                                  name="contact_submit"
                                  :partData="touchedData.contact_submit"/>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div class="col-12 col-md-8 col-lg pt-5 m-auto pt-lg-0">
            <iframe class="mb-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"
                    width="100%" height="200" frameborder="0" style="border:0" allowfullscreen=""></iframe>

            <TextEditable
              tag="p"
              cssClass="text-h3"
              name="contact_subtitle_2"
              :partData="touchedData.contact_subtitle_2"/>
            <TextEditable
              tag="p"
              cssClass=""
              name="contact_address"
              :partData="touchedData.contact_address"/>
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
  name: 'contact_6',
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
            text: this.faker.lorem.words(1)
          },
          contact_submit: {
            styles: {},
            text: this.faker.lorem.words(1)
          },
        }
      }
    },
    require: false
  }
}
</script>
