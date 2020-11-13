const CONFIG = window.CONFIG
export default (settings) => {
  let out = `
  <title> ${settings.title} </title>
  <meta name="description" content="${settings.description}"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta charset="UTF-8">
  <link id="mainFavicon" rel="icon" href="${settings.favicon}" type="image/svg" />
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta http-equiv="Content-type" content="text/html;charset=UTF-8">
  <meta name="apple-mobile-web-app-capable" content="yes"/>
  <meta http-equiv="content-language" content="${settings.language}"/>
  <link rel="canonical" href="${settings.canonical}"/>
  <meta name="robots" content="index,follow"/>
  <meta name="theme-color" content="${settings.color}">
  <link rel="next" href="${settings.nextURL}"/>
  <!-- Semantic META -->
  <meta property="description" content="${settings.description}">
  <meta property="og:url" content="${settings.canonical}">
  <meta property="og:title" content="${settings.title}">
  <meta property="og:description" content="${settings.description}">
  <meta property="og:site_name" content="${settings.title}">
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
        "name": "${settings.title}",
        "logo": "${settings.image}"
    }
  </script>
  <meta name="format-detection" content="telephone=no">
  <style>
    html,
    body {
      overflow-x: hidden;
      font-family: 'IRANSans';
      scroll-behavior: smooth;
    }
    * {
      font-family: 'IRANSans';
    }
  </style>
  `
  Object.keys(CONFIG.cdn.css).forEach((key) => {
    out += ` <link id="${key}_css" rel="stylesheet" href="${CONFIG.cdn.css[key]}">`
  })
  Object.keys(CONFIG.cdn.js).forEach((key) => {
    out += `<script id="${key}_js" type="text/javascript" src="${CONFIG.cdn.js[key]}"> </script>`
  })

  out += `
  <script>
    $(document).ready(() => {
       AOS.init();
       $('.slick-slider').each(function() {
          $(this).slick($(this).data().slider)
       });
    })
  </script>
  ${settings.hotjarScript ? settings.hotjarScript : ''}
  ${settings.gaScript ? settings.gaScript : ''}
  `
  return out
}
