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
        <header class="bg-dark">
          <div class="container">
            <nav class="navbar navbar-expand-md">
              <a class="navbar-brand"
                 href="#">
                <img src="/static/imgs/img_logo.png"
                     height="30"
                     alt="image">
              </a>

              <button class="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarNav11"
                      aria-controls="navbarNav11"
                      aria-expanded="false"
                      aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse"
                   id="navbarNav11">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <a class="nav-link"
                       href="#">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"
                       href="#">Features</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"
                       href="#">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"
                       href="#">Team</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"
                       href="#">About</a>
                  </li>
                </ul>

                <a class="btn btn-white btn-empty ml-md-3"
                   href="#">Button</a>
              </div>
            </nav>
          </div>
        </header>
      </BgEditable>
    </div>
  </div>
</template>

<script>
  import widgetMixin from '@/mixins/widget'

  export default {
    name: 'Kitchensink',
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
