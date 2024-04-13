
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.fbbf4efa345fde34b88e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/387.baseline.en.6250a412e92c2a22e88a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/24.baseline.en.eefc351400c25b603d0c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/706.baseline.en.10770b96ef7c109951e2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.dc79e77a449f0d463e6e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/751.baseline.en.24f248f26b01efbab714.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/836.baseline.en.71c164036ad0904258f4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/806.baseline.en.4245c886f03517f65ecf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/100.baseline.en.020d600cdd4f3c98c2a3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.en.65b7c5d1718c5a7a6340.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/387.baseline.en.081d8a5fab91a37ae8c5.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.f79e630f70b79519e81e.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/836.baseline.en.5c8be743b69bc96dbc9b.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.baseline.en.ad63daad97bd557389eb.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  