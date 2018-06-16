<template>
  <div :class="{'container': !data.config.fullWidth}">
    <div v-if="demoMode"><h1>Demo Mode {{$options.name}}</h1></div>
    <div v-else
         class="widget-block">
      <WidgetToolbox
        :editMode="editMode"
        @moveUp="moveUp"
        @moveDown="moveDown"
        @toggleFullWidth="toggleFullWidth"
        @toggleEditMode="toggleEditMode"
        @deleteWidget="deleteWidget"></WidgetToolbox>
      <div class="widget-block--name">
        {{$options.name}}
      </div>
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
                <ImageEditable name="logo"
                               :editMode="editMode"
                               :styles="data.logo.styles"
                               :src="data.logo.src"
                ></ImageEditable>
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
                    <text-editable tag="a"
                                   name="link1"
                                   :cssClass="'nav-link'"
                                   :editMode="editMode"
                                   :styles="data.link1.styles"
                                   :src="data.link1.src"
                                   :text="data.link1.text">
                    </text-editable>
                  </li>
                  <li class="nav-item">
                    <text-editable tag="a"
                                   name="link2"
                                   :cssClass="'nav-link'"
                                   :editMode="editMode"
                                   :styles="data.link2.styles"
                                   :src="data.link2.src"
                                   :text="data.link2.text">
                    </text-editable>
                  </li>
                  <li class="nav-item">
                    <text-editable tag="a"
                                   name="link3"
                                   :cssClass="'nav-link'"
                                   :editMode="editMode"
                                   :styles="data.link3.styles"
                                   :src="data.link3.src"
                                   :text="data.link3.text">
                    </text-editable>
                  </li>
                  <li class="nav-item">
                    <text-editable tag="a"
                                   name="link4"
                                   :cssClass="'nav-link'"
                                   :editMode="editMode"
                                   :styles="data.link4.styles"
                                   :src="data.link4.src"
                                   :text="data.link4.text">
                    </text-editable>
                  </li>
                  <li class="nav-item">
                    <text-editable tag="a"
                                   name="link5"
                                   :cssClass="'nav-link'"
                                   :editMode="editMode"
                                   :styles="data.link5.styles"
                                   :src="data.link5.src"
                                   :text="data.link5.text">
                    </text-editable>
                  </li>
                </ul>
                <text-editable tag="a"
                               name="link6"
                               :cssClass="'btn btn-white btn-empty ml-md-3'"
                               :editMode="editMode"
                               :styles="data.link5.styles"
                               :src="data.link5.src"
                               :text="data.link5.text">
                </text-editable>
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
    name: 'Header',
    mixins: [widgetMixin],
    props: {
      data: {
        default () {
          return {
            // general widget config
            config: {
              fullWidth: true
            },
            logo: {
              styles: {
                height: '2em'
              },
              src: '/static/imgs/img_logo.png'
            },
            bg: {
              styles: {}
            },
            link1: {
              styles: {},
              text: 'Link 1',
              src: 'tamasha.com'
            },
            link2: {
              styles: {},
              text: 'Link 2',
              src: 'tamasha.com'
            },
            link3: {
              styles: {},
              text: 'Link 3',
              src: 'tamasha.com'
            },
            link4: {
              styles: {},
              text: 'Link 4',
              src: 'tamasha.com'
            },
            link5: {
              styles: {},
              text: 'Link 5',
              src: 'tamasha.com'
            },
            link6: {
              styles: {},
              text: 'Link 6',
              src: 'tamasha.com'
            }
          }
        },
        require: false
      }
    }
  }
</script>
