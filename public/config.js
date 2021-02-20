window.CONFIG = {
  locale: 'fa',
  editorDirection: 'rtl',
  editorFont: 'IRANSans',
  // NOTE: Layout Direction
  direction: 'rtl',
  pageSideBarIsActive: false,
  templates: {
    landingo: {
      img: '/templates/landingo.png',
      url: '/templates/landingo.json'
    },
    simple: {
      img: '/templates/simple.png',
      url: '/templates/simple.json'
    }
  },
  fonts: {
    en: [ 'Roboto', 'Open Sans', 'Lato', 'serif', 'fantasy', 'monospace' ],
    fa: [ 'IranSans', 'IranYekan', 'tahoma' ]
  },
  languages: [
    {
      title: 'English',
      lang: 'en',
      isRTL: false
    },
    {
      title: 'Persian',
      lang: 'fa',
      isRTL: true
    },
    {
      title: 'France',
      lang: 'fr',
      isRTL: false
    },
    {
      title: 'Arabic',
      lang: 'ar',
      isRTL: true
    }
  ],
  siteDefaultSettings: {
    name: 'Landingo',
    title: '',
    description: '',
    language: 'fa',
    baseURL: '',
    canonical: '/',
    nextURL: '',
    favicon: [],
    faviconFile: '',
    image: '/img/site-image.png',
    imageFile: [],
    imageWidth: '',
    imageHeight: '',
    imageType: '',
    secureURL: '',
    facebookAppID: '',
    twitterAccount: '',
    twitterCard: 'summary',
    type: 'Organization',
    color: '#fff',
    exportAddFontIranYekan: true,
    exportAddIranSansFont: true,
    exportCssSingleFile: true,
    exportJavascriptSingleFile: true,
    exportAddFontIcon: true
  },
  cdn: {
    css: {
      iransans: '/iransans.css',
      iranyekan: '/iranyekan.css',
      bootstrap: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css',
      'bootstrap-rtl': '/lib/bootstrap-rtl.css',
      maize: 'https://gitcdn.link/repo/babakhani/maize/master/public/lib/maize_blocks.min.css',
      fontawesome: 'https://use.fontawesome.com/releases/v5.7.0/css/all.css',
      aos: 'https://unpkg.com/aos@2.3.1/dist/aos.css',
      slick: '/lib/slick.css',
      slicktheme: '/lib/slick-theme.css'
    },
    js: {
      jquery: 'https://code.jquery.com/jquery-3.4.1.slim.min.js',
      popper: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
      bootstrap: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js',
      aos: 'https://unpkg.com/aos@2.3.1/dist/aos.js',
      slick: '/lib/slick.min.js'
    },
    fonts: {
      'iranyekanwebregular.eot': '/webfonts/',
      'iranyekanwebregular.woff': '/webfonts/',
      'iranyekanwebregular.ttf': '/webfonts/',
      'iranyekanweblight.eot': '/webfonts/',
      'iranyekanweblight.woff': '/webfonts/',
      'iranyekanweblight.ttf': '/webfonts/',
      'iranyekanwebmedium.eot': '/webfonts/',
      'iranyekanwebmedium.woff': '/webfonts/',
      'iranyekanwebmedium.ttf': '/webfonts/',
      'iranyekanwebbold.eot': '/webfonts/',
      'iranyekanwebbold.woff': '/webfonts/',
      'iranyekanwebbold.ttf': '/webfonts/',

      'iransansweb.eot': '/webfonts/',
      'iransansweb.woff': '/webfonts/',
      'iransansweb.woff2': '/webfonts/',
      'iransansweb.ttf': '/webfonts/',
      'iransansweb_light.eot': '/webfonts/',
      'iransansweb_light.woff': '/webfonts/',
      'iransansweb_light.woff2': '/webfonts/',
      'iransansweb_light.ttf': '/webfonts/',
      'iransansweb_medium.eot': '/webfonts/',
      'iransansweb_medium.woff': '/webfonts/',
      'iransansweb_medium.woff2': '/webfonts/',
      'iransansweb_medium.ttf': '/webfonts/',
      'iransansweb_bold.eot': '/webfonts/',
      'iransansweb_bold.woff': '/webfonts/',
      'iransansweb_bold.woff2': '/webfonts/',
      'iransansweb_bold.ttf': '/webfonts/',

      'fa-brands-400.eot': 'https://raw.githack.com/FortAwesome/Font-Awesome/master/webfonts/',
      'fa-brands-400.svg': 'https://raw.githack.com/FortAwesome/Font-Awesome/master/webfonts/',
      'fa-brands-400.ttf': 'https://raw.githack.com/FortAwesome/Font-Awesome/master/webfonts/',
      'fa-brands-400.woff': 'https://raw.githack.com/FortAwesome/Font-Awesome/master/webfonts/',
      'fa-brands-400.woff2': 'https://raw.githack.com/FortAwesome/Font-Awesome/master/webfonts/',
      'fa-regular-400.eot': 'https://raw.githack.com/FortAwesome/Font-Awesome/master/webfonts/',
      'fa-regular-400.svg': 'https://raw.githack.com/FortAwesome/Font-Awesome/master/webfonts/',
      'fa-regular-400.ttf': 'https://raw.githack.com/FortAwesome/Font-Awesome/master/webfonts/',
      'fa-regular-400.woff': 'https://raw.githack.com/FortAwesome/Font-Awesome/master/webfonts/',
      'fa-regular-400.woff2': 'https://raw.githack.com/FortAwesome/Font-Awesome/master/webfonts/',
      'fa-solid-900.eot': 'https://raw.githack.com/FortAwesome/Font-Awesome/master/webfonts/',
      'fa-solid-900.svg': 'https://raw.githack.com/FortAwesome/Font-Awesome/master/webfonts/',
      'fa-solid-900.ttf': 'https://raw.githack.com/FortAwesome/Font-Awesome/master/webfonts/',
      'fa-solid-900.woff': 'https://raw.githack.com/FortAwesome/Font-Awesome/master/webfonts/',
      'fa-solid-900.woff2': 'https://raw.githack.com/FortAwesome/Font-Awesome/master/webfonts/'
    }
  }
}
