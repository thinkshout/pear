(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'we-care-for-p-ear.myshopify.com',
      apiKey: '7225f3b6029ac5df5a9f228671ad7640',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: 436910357,
        node: document.getElementById('collection-component-dcedb40fb41'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "variantId": "all",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "Add to Cart"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#e46a25",
        "color": "#f8f8f5",
        "padding-left": "25px",
        "padding-right": "25px",
        ":hover": {
          "background-color": "#cd5f21",
          "color": "#f8f8f5"
        },
        "border-radius": "10px",
        ":focus": {
          "background-color": "#cd5f21"
        }
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#e46a25",
        "color": "#f8f8f5",
        ":hover": {
          "background-color": "#cd5f21",
          "color": "#f8f8f5"
        },
        "border-radius": "10px",
        ":focus": {
          "background-color": "#cd5f21"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#e46a25",
        "color": "#f8f8f5",
        "padding-left": "25px",
        "padding-right": "25px",
        ":hover": {
          "background-color": "#cd5f21",
          "color": "#f8f8f5"
        },
        "border-radius": "10px",
        ":focus": {
          "background-color": "#cd5f21"
        }
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#e46a25",
        ":hover": {
          "background-color": "#cd5f21"
        },
        ":focus": {
          "background-color": "#cd5f21"
        }
      },
      "count": {
        "color": "#f8f8f5",
        ":hover": {
          "color": "#f8f8f5"
        },
        "font-size": "16px"
      },
      "iconPath": {
        "fill": "#f8f8f5"
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
      });
    });
  }
})();
