export default (settings) => { return `
  <title> ${settings.title} </title>
  <meta name="description" content="${settings.description}"/>
  <meta charset="UTF-8">
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
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        rel="stylesheet"
        crossorigin="anonymous">
  <link rel="stylesheet"
        crossorigin="anonymous"
        href="https://gitcdn.link/repo/babakhani/maize/master/public/lib/maize_blocks.min.css">
  <script 
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        type="text/javascript" 
        crossorigin="anonymous"
        src="https://code.jquery.com/jquery-3.4.1.slim.min.js" ></script>
  <script 
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        type="text/javascript" 
        crossorigin="anonymous"
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" ></script>
  <script 
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        type="text/javascript" 
        crossorigin="anonymous"
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" ></script>
`}
