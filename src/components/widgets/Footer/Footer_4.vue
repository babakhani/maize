<template>
  <div v-if="touchedData !== {}"
       :class="{'container': touchedData.config && !touchedData.config.fullWidth}">
    <div v-if="demoMode"> <h1>Demo Mode {{$options.name}}</h1> </div> <div v-else class="widget-block">
      <WidgetToolbox></WidgetToolbox>
      <div class="widget-block--name">
        {{$options.name}}
      </div>
      <BgEditable
        name="bg"
        v-if="touchedData.bg"
        :partData="touchedData.bg">
        <footer class="fdb-block footer-small">
          <div class="container">
            <div class="row text-center align-items-center">
              <div class="col-12 col-sm-6 col-md-4 text-sm-left">
                <ImageEditable name="footer_image"
                               :partData="touchedData.footer_image">
                </ImageEditable>
              </div>

              <div class="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0 text-center text-sm-right text-md-center">
                <text-editable tag="span"
                               name="footer_copyright"
                               :partData="touchedData.footer_copyright">
                </text-editable>
              </div>
              <!--TODO: Do you want this??-->
              <!--<div class="col-12 col-md-4 mt-4 mt-md-0 text-center text-md-right">-->
                <!--<a href="https://www.froala.com"><i class="fa fa-twitter" aria-hidden="true"></i></a>&nbsp;&nbsp;-->
                <!--<a href="https://www.froala.com"><i class="fa fa-facebook" aria-hidden="true"></i></a>&nbsp;&nbsp;-->
                <!--<a href="https://www.froala.com"><i class="fa fa-instagram" aria-hidden="true"></i></a>&nbsp;&nbsp;-->
                <!--<a href="https://www.froala.com"><i class="fa fa-pinterest" aria-hidden="true"></i></a>&nbsp;&nbsp;-->
                <!--<a href="https://www.froala.com"><i class="fa fa-google" aria-hidden="true"></i></a>-->
              <!--</div>-->
            </div>
          </div>
        </footer>
      </BgEditable>
    </div>
  </div>
</template>
<script>
  import widgetMixin from '@/mixins/widget'

  export default {
    name: 'Footer_4',
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
            footer_copyright: {
              styles: {
                'line-height': '2em'
              },
              text: this.faker.footer.copyright(),
            },
            footer_image: {
              styles: {
                height: '40px',
              },
              src: this.faker.img.logo()
            }
          }
        },
        require: false
      }
    }
  }
</script>
