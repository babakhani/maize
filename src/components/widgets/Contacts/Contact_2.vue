<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode">
      <section class="fdb-block bg-dark" style="background-image: url(/static/imgs/bg_0.svg)">
        <div class="container">
          <div class="row text-center justify-content-center">
            <div class="col-12 col-md-8 col-lg-7">
              <h1>Contact Us</h1>
              <h2>We love to hear from you!</h2>
            </div>
          </div>

          <div class="row pt-4">
            <div class="col-12">
              <form>
                <div class="row">
                  <div class="col-12 col-md">
                    <input type="text" class="form-control" placeholder="Name">
                  </div>
                  <div class="col-12 col-md mt-4 mt-md-0">
                    <input type="text" class="form-control" placeholder="Email">
                  </div>
                  <div class="col-12 col-md mt-4 mt-md-0">
                    <input type="text" class="form-control" placeholder="Phone (optional)">
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
                  <div class="col text-center">
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
        <section class="fdb-block bg-dark" style="background-image: url(/static/imgs/bg_0.svg)">
          <div class="container">
            <div class="row text-center justify-content-center">
              <div class="col-12 col-md-8 col-lg-7">
                <text-editable tag="h1"
                               name="mainTitle"
                               :partData="touchedData.mainTitle">
                </text-editable>
                <br/>
                <text-editable tag="h2"
                               name="contact_subtitle"
                               :partData="touchedData.contact_subtitle">
                </text-editable>
              </div>
            </div>

            <div class="row pt-4">
              <div class="col-12">
                <form>
                  <div class="row">
                    <div class="col-12 col-md">
                      <input type="text" class="form-control" placeholder="Name">
                    </div>
                    <div class="col-12 col-md mt-4 mt-md-0">
                      <input type="text" class="form-control" placeholder="Email">
                    </div>
                    <div class="col-12 col-md mt-4 mt-md-0">
                      <input type="text" class="form-control" placeholder="Phone (optional)">
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
                    <div class="col text-center">
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
    name: 'contact_2',
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
            }
          }
        },
        require: false
      }
    }
  }
</script>
