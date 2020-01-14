<template>
  <div>
    <WidgetToolbox/>
    <BgEditable>
      <section class="mz-block">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="mz-box mz-touch">
                <div class="row text-center justify-content-center">
                  <div class="col-12 col-md-9 col-lg-7">
                    <TextEditable 
                      tag="h1"
                      name="mainTitle"
                      :partData="touchedData.mainTitle">
                    </TextEditable>
                    <br/>
                    <TextEditable 
                      tag="p"
                      cssClass="text-h3"
                      name="contact_subtitle"
                      :partData="touchedData.contact_subtitle">
                    </TextEditable>
                  </div>
                </div>

                <div class="row justify-content-center pt-4">
                  <div class="col-12 col-md-8">
                    <form>
                      <div class="row">
                        <div class="col-12 col-md">
                          <input type="text" class="form-control" placeholder="Name">
                        </div>
                        <div class="col-12 col-md mt-4 mt-md-0">
                          <input type="text" class="form-control" placeholder="Email">
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
    name: 'contact_4',
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
              styles: {
                'background-color': '#1c1c1c'
              }
            },
            mainTitle: {
              styles: {},
              text: this.faker.lorem.words(2),
            },
            contact_subtitle: {
              styles: {},
              text: this.faker.lorem.words(15),
            },
            contact_submit: {
              styles: {
                'min-width': '8em',
                'color': 'white'
              },
              text: this.faker.lorem.words(1),
            }
          }
        },
        require: false
      }
    }
  }
</script>
