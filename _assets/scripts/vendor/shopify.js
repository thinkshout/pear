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
      ui.createComponent('product', {
        id: [11148954453],
        node: document.getElementById('product-component-d012481568d'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "variantId": "all",
    "width": "150px",
    "contents": {
      "img": false,
      "imgWithCarousel": false,
      "title": false,
      "variantTitle": false,
      "price": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
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
        "background-color": "#f8b493",
        "font-family": "Roboto, sans-serif",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        "padding-left": "20px",
        "padding-right": "20px",
        ":hover": {
          "background-color": "#F48552"
        },
        "border-radius": "5px",
        ":focus": {
          "background-color": "#F48552"
        },
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Roboto, sans-serif"
      },
      "description": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      },
      "compareAt": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Roboto",
      "Droid Serif",
      "Roboto",
      "Droid Serif",
      "Droid Serif",
      "Droid Serif"
    ]
  },
  "cart": {
    "contents": {
      "button": true
    },
    "text": {
      "notice": ""
    },
    "styles": {
      "cart": {
        "background-color": "#FFFFFF"
      },
      "button": {
        "background-color": "#f8b493",
        "font-family": "Roboto, sans-serif",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        ":hover": {
          "background-color": "#F48552"
        },
        "border-radius": "5px",
        ":focus": {
          "background-color": "#F48552"
        },
        "font-weight": "bold"
      },
      "title": {
        "color": "#212d5b"
      },
      "footer": {
        "background-color": "#FFFFFF"
      },
      "header": {
        "color": "#212d5b"
      },
      "lineItems": {
        "color": "#212d5b"
      },
      "subtotalText": {
        "color": "#212d5b"
      },
      "subtotal": {
        "color": "#212d5b"
      },
      "notice": {
        "color": "#212d5b"
      },
      "currency": {
        "color": "#212d5b"
      },
      "close": {
        ":hover": {
          "color": "#212d5b"
        },
        "color": "#212d5b"
      },
      "emptyCart": {
        "color": "#212d5b"
      }
    },
    "googleFonts": [
      "Roboto"
    ]
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
        "background-color": "#f8b493",
        "font-family": "Roboto, sans-serif",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        "padding-left": "20px",
        "padding-right": "20px",
        ":hover": {
          "background-color": "#F48552"
        },
        "border-radius": "5px",
        ":focus": {
          "background-color": "#F48552"
        },
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Roboto, sans-serif"
      },
      "description": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      },
      "compareAt": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Roboto",
      "Droid Serif",
      "Roboto",
      "Droid Serif",
      "Droid Serif",
      "Droid Serif"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Roboto, sans-serif",
        "background-color": "#f8b493",
        ":hover": {
          "background-color": "#F48552"
        },
        ":focus": {
          "background-color": "#F48552"
        },
        "font-weight": "bold"
      },
      "count": {
        "font-size": "14px"
      }
    },
    "googleFonts": [
      "Roboto"
    ]
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Droid Serif, serif"
      },
      "select": {
        "font-family": "Roboto, sans-serif"
      }
    },
    "googleFonts": [
      "Droid Serif",
      "Droid Serif"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#212d5b"
      },
      "title": {
        "color": "#212d5b"
      },
      "price": {
        "color": "#212d5b"
      },
      "quantity": {
        "color": "#212d5b"
      },
      "quantityIncrement": {
        "color": "#212d5b",
        "border-color": "#212d5b"
      },
      "quantityDecrement": {
        "color": "#212d5b",
        "border-color": "#212d5b"
      },
      "quantityInput": {
        "color": "#212d5b",
        "border-color": "#212d5b"
      }
    }
  }
}
      });
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [11388870997],
        node: document.getElementById('product-component-c4f607df048'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "variantId": "all",
    "width": "150px",
    "contents": {
      "img": false,
      "imgWithCarousel": false,
      "title": false,
      "variantTitle": false,
      "price": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
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
        "background-color": "#f8b493",
        "font-family": "Roboto, sans-serif",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        "padding-left": "20px",
        "padding-right": "20px",
        ":hover": {
          "background-color": "#F48552"
        },
        "border-radius": "5px",
        ":focus": {
          "background-color": "#F48552"
        },
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Roboto, sans-serif"
      },
      "description": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      },
      "compareAt": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Roboto",
      "Droid Serif",
      "Roboto",
      "Droid Serif",
      "Droid Serif",
      "Droid Serif"
    ]
  },
  "cart": {
    "contents": {
      "button": true
    },
    "text": {
      "notice": ""
    },
    "styles": {
      "cart": {
        "background-color": "#FFFFFF"
      },
      "button": {
        "background-color": "#f8b493",
        "font-family": "Roboto, sans-serif",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        ":hover": {
          "background-color": "#F48552"
        },
        "border-radius": "5px",
        ":focus": {
          "background-color": "#F48552"
        },
        "font-weight": "bold"
      },
      "title": {
        "color": "#212d5b"
      },
      "footer": {
        "background-color": "#FFFFFF"
      },
      "header": {
        "color": "#212d5b"
      },
      "lineItems": {
        "color": "#212d5b"
      },
      "subtotalText": {
        "color": "#212d5b"
      },
      "subtotal": {
        "color": "#212d5b"
      },
      "notice": {
        "color": "#212d5b"
      },
      "currency": {
        "color": "#212d5b"
      },
      "close": {
        ":hover": {
          "color": "#212d5b"
        },
        "color": "#212d5b"
      },
      "emptyCart": {
        "color": "#212d5b"
      }
    },
    "googleFonts": [
      "Roboto"
    ]
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
        "background-color": "#f8b493",
        "font-family": "Roboto, sans-serif",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        "padding-left": "20px",
        "padding-right": "20px",
        ":hover": {
          "background-color": "#F48552"
        },
        "border-radius": "5px",
        ":focus": {
          "background-color": "#F48552"
        },
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Roboto, sans-serif"
      },
      "description": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      },
      "compareAt": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Roboto",
      "Droid Serif",
      "Roboto",
      "Droid Serif",
      "Droid Serif",
      "Droid Serif"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Roboto, sans-serif",
        "background-color": "#f8b493",
        ":hover": {
          "background-color": "#F48552"
        },
        ":focus": {
          "background-color": "#F48552"
        },
        "font-weight": "bold"
      },
      "count": {
        "font-size": "14px"
      }
    },
    "googleFonts": [
      "Roboto"
    ]
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Droid Serif, serif"
      },
      "select": {
        "font-family": "Roboto, sans-serif"
      }
    },
    "googleFonts": [
      "Droid Serif",
      "Droid Serif"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#212d5b"
      },
      "title": {
        "color": "#212d5b"
      },
      "price": {
        "color": "#212d5b"
      },
      "quantity": {
        "color": "#212d5b"
      },
      "quantityIncrement": {
        "color": "#212d5b",
        "border-color": "#212d5b"
      },
      "quantityDecrement": {
        "color": "#212d5b",
        "border-color": "#212d5b"
      },
      "quantityInput": {
        "color": "#212d5b",
        "border-color": "#212d5b"
      }
    }
  }
}
      });
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [11389189717],
        node: document.getElementById('product-component-2e57587bb16'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "variantId": "all",
    "width": "150px",
    "contents": {
      "img": false,
      "imgWithCarousel": false,
      "title": false,
      "variantTitle": false,
      "price": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
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
        "background-color": "#f8b493",
        "font-family": "Roboto, sans-serif",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        "padding-left": "20px",
        "padding-right": "20px",
        ":hover": {
          "background-color": "#F48552"
        },
        "border-radius": "5px",
        ":focus": {
          "background-color": "#F48552"
        },
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Roboto, sans-serif"
      },
      "description": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      },
      "compareAt": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Roboto",
      "Droid Serif",
      "Roboto",
      "Droid Serif",
      "Droid Serif",
      "Droid Serif"
    ]
  },
  "cart": {
    "contents": {
      "button": true
    },
    "text": {
      "notice": ""
    },
    "styles": {
      "cart": {
        "background-color": "#FFFFFF"
      },
      "button": {
        "background-color": "#f8b493",
        "font-family": "Roboto, sans-serif",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        ":hover": {
          "background-color": "#F48552"
        },
        "border-radius": "5px",
        ":focus": {
          "background-color": "#F48552"
        },
        "font-weight": "bold"
      },
      "title": {
        "color": "#212d5b"
      },
      "footer": {
        "background-color": "#FFFFFF"
      },
      "header": {
        "color": "#212d5b"
      },
      "lineItems": {
        "color": "#212d5b"
      },
      "subtotalText": {
        "color": "#212d5b"
      },
      "subtotal": {
        "color": "#212d5b"
      },
      "notice": {
        "color": "#212d5b"
      },
      "currency": {
        "color": "#212d5b"
      },
      "close": {
        ":hover": {
          "color": "#212d5b"
        },
        "color": "#212d5b"
      },
      "emptyCart": {
        "color": "#212d5b"
      }
    },
    "googleFonts": [
      "Roboto"
    ]
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
        "background-color": "#f8b493",
        "font-family": "Roboto, sans-serif",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        "padding-left": "20px",
        "padding-right": "20px",
        ":hover": {
          "background-color": "#F48552"
        },
        "border-radius": "5px",
        ":focus": {
          "background-color": "#F48552"
        },
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Roboto, sans-serif"
      },
      "description": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      },
      "compareAt": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Roboto",
      "Droid Serif",
      "Roboto",
      "Droid Serif",
      "Droid Serif",
      "Droid Serif"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Roboto, sans-serif",
        "background-color": "#f8b493",
        ":hover": {
          "background-color": "#F48552"
        },
        ":focus": {
          "background-color": "#F48552"
        },
        "font-weight": "bold"
      },
      "count": {
        "font-size": "14px"
      }
    },
    "googleFonts": [
      "Roboto"
    ]
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Droid Serif, serif"
      },
      "select": {
        "font-family": "Roboto, sans-serif"
      }
    },
    "googleFonts": [
      "Droid Serif",
      "Droid Serif"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#212d5b"
      },
      "title": {
        "color": "#212d5b"
      },
      "price": {
        "color": "#212d5b"
      },
      "quantity": {
        "color": "#212d5b"
      },
      "quantityIncrement": {
        "color": "#212d5b",
        "border-color": "#212d5b"
      },
      "quantityDecrement": {
        "color": "#212d5b",
        "border-color": "#212d5b"
      },
      "quantityInput": {
        "color": "#212d5b",
        "border-color": "#212d5b"
      }
    }
  }
}
      });
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [11389243733],
        node: document.getElementById('product-component-8537c49791b'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "variantId": "all",
    "width": "150px",
    "contents": {
      "img": false,
      "imgWithCarousel": false,
      "title": false,
      "variantTitle": false,
      "price": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
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
        "background-color": "#f8b493",
        "font-family": "Roboto, sans-serif",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        "padding-left": "20px",
        "padding-right": "20px",
        ":hover": {
          "background-color": "#F48552"
        },
        "border-radius": "5px",
        ":focus": {
          "background-color": "#F48552"
        },
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Roboto, sans-serif"
      },
      "description": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      },
      "compareAt": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Roboto",
      "Droid Serif",
      "Roboto",
      "Droid Serif",
      "Droid Serif",
      "Droid Serif"
    ]
  },
  "cart": {
    "contents": {
      "button": true
    },
    "text": {
      "notice": ""
    },
    "styles": {
      "cart": {
        "background-color": "#FFFFFF"
      },
      "button": {
        "background-color": "#f8b493",
        "font-family": "Roboto, sans-serif",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        ":hover": {
          "background-color": "#F48552"
        },
        "border-radius": "5px",
        ":focus": {
          "background-color": "#F48552"
        },
        "font-weight": "bold"
      },
      "title": {
        "color": "#212d5b"
      },
      "footer": {
        "background-color": "#FFFFFF"
      },
      "header": {
        "color": "#212d5b"
      },
      "lineItems": {
        "color": "#212d5b"
      },
      "subtotalText": {
        "color": "#212d5b"
      },
      "subtotal": {
        "color": "#212d5b"
      },
      "notice": {
        "color": "#212d5b"
      },
      "currency": {
        "color": "#212d5b"
      },
      "close": {
        ":hover": {
          "color": "#212d5b"
        },
        "color": "#212d5b"
      },
      "emptyCart": {
        "color": "#212d5b"
      }
    },
    "googleFonts": [
      "Roboto"
    ]
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
        "background-color": "#f8b493",
        "font-family": "Roboto, sans-serif",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        "padding-left": "20px",
        "padding-right": "20px",
        ":hover": {
          "background-color": "#F48552"
        },
        "border-radius": "5px",
        ":focus": {
          "background-color": "#F48552"
        },
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Roboto, sans-serif"
      },
      "description": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      },
      "compareAt": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Roboto",
      "Droid Serif",
      "Roboto",
      "Droid Serif",
      "Droid Serif",
      "Droid Serif"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Roboto, sans-serif",
        "background-color": "#f8b493",
        ":hover": {
          "background-color": "#F48552"
        },
        ":focus": {
          "background-color": "#F48552"
        },
        "font-weight": "bold"
      },
      "count": {
        "font-size": "14px"
      }
    },
    "googleFonts": [
      "Roboto"
    ]
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Droid Serif, serif"
      },
      "select": {
        "font-family": "Roboto, sans-serif"
      }
    },
    "googleFonts": [
      "Droid Serif",
      "Droid Serif"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#212d5b"
      },
      "title": {
        "color": "#212d5b"
      },
      "price": {
        "color": "#212d5b"
      },
      "quantity": {
        "color": "#212d5b"
      },
      "quantityIncrement": {
        "color": "#212d5b",
        "border-color": "#212d5b"
      },
      "quantityDecrement": {
        "color": "#212d5b",
        "border-color": "#212d5b"
      },
      "quantityInput": {
        "color": "#212d5b",
        "border-color": "#212d5b"
      }
    }
  }
}
      });
    });
  }
})();
