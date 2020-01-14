<template>
  <div>
      <WidgetToolbox/>
      <BgEditable>
         <header>
             <nav class="navbar navbar-expand-md">
               <ImageEditable 
                  name="logo"
                 :partData="touchedData.logo"/>
               <button 
                 class="navbar-toggler" 
                 type="button" 
                 data-toggle="collapse" 
                 data-target="#navbarNav1" 
                 aria-controls="navbarNav1" 
                 aria-expanded="false" 
                 aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarNav1">
                 <ul class="navbar-nav mr-auto">
                   <li class="nav-item">
                     <TextEditable tag="a"
                                   cssClass="nav-link"
                                   name="header_link_1"
                                   :partData="touchedData.header_link_1"/>
                   </li>
                   <li class="nav-item">
                     <TextEditable tag="a"
                                   cssClass="nav-link"
                                   name="header_link_2"
                                   :partData="touchedData.header_link_2"/>
                   </li>
                   <li class="nav-item">
                     <TextEditable tag="a"
                                   cssClass="nav-link"
                                   name="header_link_3"
                                   :partData="touchedData.header_link_3"/>
                   </li>
                   <li class="nav-item">
                     <TextEditable tag="a"
                                   cssClass="nav-link"
                                   name="header_link_4"
                                   :partData="touchedData.header_link_4"/>
                   </li>
                 </ul>
                 <ul class="navbar-nav justify-content-end d-none d-lg-flex ml-md-auto">
                   <li class="nav-item ml-3">
                     <IconEditable 
                        cssClass="nav-link"
                        name="header_social_link_1"
                        :partData="touchedData.header_social_link_1"/>
                   </li>
                   <li class="nav-item ml-3">
                     <IconEditable 
                        cssClass="nav-link"
                        name="header_social_link_2"
                        :partData="touchedData.header_social_link_2"/>
                   </li>
                   <li class="nav-item ml-3">
                     <IconEditable 
                        cssClass="nav-link"
                        name="header_social_link_3"
                        :partData="touchedData.header_social_link_3"/>
                   </li>
                 </ul>
                 <TextEditable tag="a"
                               cssClass="btn btn-primary ml-md-3"
                               name="header_button"
                               :partData="touchedData.header_button"/>
               </div>
             </nav>
         </header>
      </BgEditable>
  </div>
</template>
<script>
  import widgetMixin from '@/mixins/widget'

  export default {
    name: 'Header_5',
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
            logo: {
              styles: {
                height: '30px'
              },
              href: '#',
              src: this.faker.img.logo()
            },
            header_link_1: {
              styles: {},
              text: this.faker.lorem.words(1),
              href: this.faker.internet.url()
            },
            header_link_2: {
              styles: {},
              text: this.faker.lorem.words(1),
              href: this.faker.internet.url()
            },
            header_link_3: {
              styles: {},
              text: this.faker.lorem.words(1),
              href: this.faker.internet.url()
            },
            header_link_4: {
              styles: {},
              text: this.faker.lorem.words(1),
              href: this.faker.internet.url()
            },
            header_social_link_1: {
              styles: {},
              iconName: 'fab fa-github',
              text: '<i class="fab fa-slack"></i>',
              href: this.faker.internet.url()
            },
            header_social_link_2: {
              styles: {},
              iconName: 'fab fa-instagram',
              text: '<i class="fab fa-github"></i>',
              href: this.faker.internet.url()
            },
            header_social_link_3: {
              styles: {},
              iconName: 'fab fa-twitter',
              text: '<i class="fab fa-twitter"></i>',
              href: this.faker.internet.url()
            },
            header_button: {
              styles: {
                'min-width': '6em',
                'color': 'white'
              }, 
              text: this.faker.lorem.words(1),
              src: this.faker.internet.url
            }
          }
        },
        require: false
      }
    }
  }
</script>
