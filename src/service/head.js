const CONFIG = window.CONFIG
export default (settings) => {
  return `
  <title> ${settings.title} </title>
  <meta name="description" content="${settings.description}"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta charset="UTF-8">
  <link rel="icon" href="${settings.favicon}" type="image/x-icon" />
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta http-equiv="Content-type" content="text/html;charset=UTF-8">
  <meta name="apple-mobile-web-app-capable" content="yes"/>
  <meta http-equiv="content-language" content="${settings.language}"/>
  <base href="${settings.baseURL}" target="_blank">
  <link rel="canonical" href="${settings.canonical}"/>
  <meta name="robots" content="index,follow"/>
  <meta name="theme-color" content="${settings.color}">
  <link rel="next" href="${settings.nextURL}"/>
  <!-- Semantic META -->
  <meta property="description" content="${settings.description}">
  <meta property="og:url" content="${settings.canonical}">
  <meta property="og:title" content="${settings.title}">
  <meta property="og:description" content="${settings.description}">
  <meta property="og:site_name" content="${settings.name}">
  <meta property="og:image" content="${settings.image}">
  <meta property="og:image:secure_url" content="${settings.secureURL}">
  <meta property="og:image:width" content="${settings.imageWidth}">
  <meta property="og:image:height" content="${settings.imageHeight}">
  <meta property="og:image:type" content="${settings.imageType}">
  <meta property="fb:app_id" content="${settings.facebookAppID}">
  <!-- Twitter -->
  <meta name="twitter:card" content="${settings.twitterCard}">
  <meta name="twitter:site" content="${settings.twitterAccount}">
  <meta name="twitter:title" content="${settings.title}">
  <meta name="twitter:description" content="${settings.description}">
  <meta name="twitter:image" content="${settings.image}">
  <script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "${settings.type}",
        "url": "${settings.canonical}",
        "name": "${settings.name}",
        "logo": "${settings.image}"
    }
  </script>
  <meta name="format-detection" content="telephone=no">

  <link 
        id="bootstrap_css"
        rel="stylesheet"
        href="${CONFIG.cdn.css.bootstrap}">
  <link 
        id="maize_css"
        rel="stylesheet"
        href="${CONFIG.cdn.css.maize}">
  <link 
        id="fontawesome_css"
        rel="stylesheet" 
        href="${CONFIG.cdn.css.fontawesome}">
  <link 
        id="aos_css"
        rel="stylesheet" 
        href="${CONFIG.cdn.css.aos}">
  <script 
        id="jquery_js"
        type="text/javascript" 
        src="${CONFIG.cdn.js.jquery}">
        </script>
  <script 
        id="popper_js"
        type="text/javascript" 
        src="${CONFIG.cdn.js.popper}">
        </script>
  <script 
        id="bootstrap_js"
        type="text/javascript" 
        src="${CONFIG.cdn.js.bootstrap}">
        </script>
  <script 
        id="aos_js"
        src="${CONFIG.cdn.js.aos}">
        </script>
  <script>
    $(document).ready(() => {
       AOS.init();
    })
  </script>

  ${settings.hotjarScript ? settings.hotjarScript : ''}
  ${settings.gaScript ? settings.gaScript : ''}
`
}
