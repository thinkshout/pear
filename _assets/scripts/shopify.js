
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
                    node: document.getElementById('collection-component-e43e4e1e17c'),
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
                            "styles": {
                                "product": {
                                    "@media (min-width: 601px)": {
                                        "max-width": "calc(25% - 20px)",
                                        "margin-left": "20px",
                                        "margin-bottom": "50px"
                                    }
                                }
                            }
                        },
                        "cart": {
                            "contents": {
                                "button": true
                            },
                            "styles": {
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
