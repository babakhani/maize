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
        <footer class="fdb-block footer-large bg-dark">
          <div class="container">
            <div class="row align-items-top text-center text-md-left">
              <div class="col-12 col-sm-6 col-md-4">
                <h3><strong>Country A</strong></h3>
                <p>Street Address 52<br>Contact Name</p>
                <p>+44 827 312 5002</p>
                <p><a href="https://www.froala.com">countrya@amazing.com</a></p>
              </div>

              <div class="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0">
                <h3><strong>Country B</strong></h3>
                <p>Street Address 100<br>Contact Name</p>
                <p>+13 827 312 5002</p>
                <p><a href="https://www.froala.com">countryb@amazing.com</a></p>
              </div>

              <div class="col-12 col-md-4 mt-5 mt-md-0 text-md-left">
                <h3><strong>About Us</strong></h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>

            <div class="row mt-5">
              <div class="col text-center">
                &copy; 2017 Froala. All Rights Reserved
              </div>
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
    name: 'Footer',
    mixins: [widgetMixin],
    props: {
      data: {
        default() {
          return {
            // general widget config
            config: {
              fullWidth: true
            },
            image1: {
              styles: {},
              src:'http://via.placeholder.com/150x114'
            },
            image2: {
              styles: {},
              src:'http://via.placeholder.com/150x114'
            },
            video1: {
              styles: {},
              src:'http://via.placeholder.com/150x114'
            },
            video2: {
              styles: {},
              src:'http://via.placeholder.com/150x114'
            },
            // Editable parts config that can be used in editable components
            mainTitle: {
              text: 'HI i am banner Widget from store',
              styles: {}
            },
            subtitle: {
              text: 'HI i am banner Widget from store',
              styles: {}
            },
            subtitle1: {
              text: 'HI i am banner Widget from store',
              styles: {}
            },
            subtitle2: {
              text: 'HI i am banner Widget from store',
              styles: {}
            },
            bg: {
              styles: {}
            }
          }
        },
        require: false
      }
    }
  }
</script>
