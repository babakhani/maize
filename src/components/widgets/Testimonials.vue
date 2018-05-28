<template>
  <div :class="{'container': !data.config.fullWidth}">
    <div class="widget-block">
      <WidgetToolbox
        :editMode="editMode"
        @moveUp="moveUp"
        @moveDown="moveDown"
        @toggleFullWidth="toggleFullWidth"
        @toggleEditMode="toggleEditMode"
        @deleteWidget="deleteWidget"></WidgetToolbox>
      <BgEditable
        name="bg"
        @update="updateData"
        :editMode="editMode"
        :styles="data.bg.styles">


        <section class="fdb-block bg-dark fp-active"
                 style="background-image: url(https://editor-latest.s3.amazonaws.com/design-blocks/block_images/bg_4.svg)"
                 data-block-type="testimonials"
                 data-id="1"
                 draggable="true">
          <div class="container">
            <div class="row text-center justify-content-center">
              <div class="col-md-10 col-lg-8 col-xl-7">
                <text-editable tag="h1"
                               name="mainTitle"
                               :cssClass="''"
                               :editMode="editMode"
                               :styles="data.mainTitle.styles"
                               :text="data.mainTitle.text">
                </text-editable>
                <br>
                <text-editable tag="p"
                               name="secondTitle"
                               :cssClass="'text-h3'"
                               :editMode="editMode"
                               :styles="data.secondTitle.styles"
                               :text="data.secondTitle.text">
                </text-editable>
              </div>
            </div>

            <div class="row mt-5 align-items-center justify-content-center">
              <div class="col-md-8 col-lg-4">
                <div class="fdb-box">
                  <div class="row no-gutters align-items-center">
                    <div class="col-3">


                      <ImageEditable name="box1image"
                                     :cssClass="'img-fluid'"
                                     :editMode="editMode"
                                     :styles="data.box1image.styles"
                                     :src="data.box1image.src">
                      </ImageEditable>

                      <!--<img alt="image"-->
                      <!--class="img-fluid"-->
                      <!--src="https://editor-latest.s3.amazonaws.com/design-blocks/block_images/img_round.svg">-->
                    </div>
                    <div class="col-8 ml-auto">
                      <p>
                        <text-editable tag="strong"
                                       name="box1text1"
                                       :cssClass="''"
                                       :editMode="editMode"
                                       :styles="data.box1text1.styles"
                                       :text="data.box1text1.text">
                        </text-editable>
                        <br>
                        <text-editable tag="em"
                                       name="box1text2"
                                       :cssClass="''"
                                       :editMode="editMode"
                                       :styles="data.box1text2.styles"
                                       :text="data.box1text2.text">
                        </text-editable>
                      </p>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-12">
                      <text-editable tag="p"
                                     name="box1text3"
                                     :cssClass="'text-h3'"
                                     :editMode="editMode"
                                     :styles="data.box1text3.styles"
                                     :text="data.box1text3.text">
                      </text-editable>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-8 col-lg-4">
                <div class="fdb-box">
                  <div class="row no-gutters align-items-center">
                    <div class="col-3">


                      <ImageEditable name="box2image"
                                     :cssClass="'img-fluid'"
                                     :editMode="editMode"
                                     :styles="data.box2image.styles"
                                     :src="data.box2image.src">
                      </ImageEditable>

                      <!--<img alt="image"-->
                      <!--class="img-fluid"-->
                      <!--src="https://editor-latest.s3.amazonaws.com/design-blocks/block_images/img_round.svg">-->
                    </div>
                    <div class="col-8 ml-auto">
                      <p>
                        <text-editable tag="strong"
                                       name="box1text1"
                                       :cssClass="''"
                                       :editMode="editMode"
                                       :styles="data.box2text1.styles"
                                       :text="data.box2text1.text">
                        </text-editable>
                        <br>
                        <text-editable tag="em"
                                       name="box1text2"
                                       :cssClass="''"
                                       :editMode="editMode"
                                       :styles="data.box2text2.styles"
                                       :text="data.box2text2.text">
                        </text-editable>
                      </p>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-12">
                      <text-editable tag="p"
                                     name="box2text3"
                                     :cssClass="'text-h3'"
                                     :editMode="editMode"
                                     :styles="data.box1text3.styles"
                                     :text="data.box1text3.text">
                      </text-editable>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-8 col-lg-4">
                <div class="fdb-box">
                  <div class="row no-gutters align-items-center">
                    <div class="col-3">
                      <ImageEditable name="box3image"
                                     :cssClass="'img-fluid'"
                                     :editMode="editMode"
                                     :styles="data.box3image.styles"
                                     :src="data.box3image.src">
                      </ImageEditable>
                    </div>
                    <div class="col-8 ml-auto">
                      <p>
                        <text-editable tag="strong"
                                       name="box1text1"
                                       :cssClass="''"
                                       :editMode="editMode"
                                       :styles="data.box3text1.styles"
                                       :text="data.box3text1.text">
                        </text-editable>
                        <br>
                        <text-editable tag="em"
                                       name="box1text2"
                                       :cssClass="''"
                                       :editMode="editMode"
                                       :styles="data.box3text2.styles"
                                       :text="data.box3text2.text">
                        </text-editable>
                      </p>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-12">
                      <text-editable tag="p"
                                     name="box3text3"
                                     :cssClass="'text-h3'"
                                     :editMode="editMode"
                                     :styles="data.box1text3.styles"
                                     :text="data.box1text3.text">
                      </text-editable>
                    </div>
                  </div>
                </div>
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
    name: 'Testimonials',
    mixins: [widgetMixin],
    props: {
      data: {
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
              text: 'Testimonials title'
            },
            secondTitle: {
              styles: {},
              text: 'Link 2',
              src: 'tamasha.com'
            },
            box1text1: {
              text: 'Person Name',
              src: 'tamasha.com'
            },
            box1text2: {
              text: 'Person Name',
              src: 'tamasha.com'
            },
            box1text3: {
              text: 'Lorem ipsum dolor sit amet, has sonet perpetua ex, ad lorem nulla verterem sed. Eos assum sonet ocurreret ad, at munere soluta euismod duo, id has dolorum omnesque iracundia. In usu legere laboramus. Ullum quidam causae cu sed, doming persius eu nec. Fugit definitionem in mea, ut nec equidem nostrum dissentiunt.\n',
              src: 'tamasha.com'
            },
            box1image: {
              styles: {},
              src: ''
            },

            box2text1: {
              text: 'Person Name',
              src: 'tamasha.com'
            },
            box2text2: {
              text: 'Person Name',
              src: 'tamasha.com'
            },
            box2text3: {
              text: 'Lorem ipsum dolor sit amet, has sonet perpetua ex, ad lorem nulla verterem sed. Eos assum sonet ocurreret ad, at munere soluta euismod duo, id has dolorum omnesque iracundia. In usu legere laboramus. Ullum quidam causae cu sed, doming persius eu nec. Fugit definitionem in mea, ut nec equidem nostrum dissentiunt.\n',
              src: 'tamasha.com'
            },
            box2image: {
              styles: {},
              src: ''
            },

            box3text1: {
              text: 'Person Name',
              src: 'tamasha.com'
            },
            box3text2: {
              text: 'Person Name',
              src: 'tamasha.com'
            },
            box3text3: {
              text: 'Lorem ipsum dolor sit amet, has sonet perpetua ex, ad lorem nulla verterem sed. Eos assum sonet ocurreret ad, at munere soluta euismod duo, id has dolorum omnesque iracundia. In usu legere laboramus. Ullum quidam causae cu sed, doming persius eu nec. Fugit definitionem in mea, ut nec equidem nostrum dissentiunt.\n',
              src: 'tamasha.com'
            },
            box3image: {
              styles: {},
              src: ''
            }
          }
        },
        require: false
      }
    }
  }
</script>




