'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _graphqlJsClient = require('./graphql-js-client');

var _graphqlJsClient2 = _interopRequireDefault(_graphqlJsClient);

var _babelPluginGraphqlJsClientTransform = require('babel-plugin-graphql-js-client-transform');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

const _document = _graphqlJsClient2.default.document();

_document.addQuery(root => {
  root.add('shop', shop => {
    shop.add('name');
    shop.add('description');
    shop.add('products', {
      args: {
        first: 20
      }
    }, products => {
      products.add('pageInfo', pageInfo => {
        pageInfo.add('hasNextPage');
        pageInfo.add('hasPreviousPage');
      });
      products.add('edges', edges => {
        edges.add('node', node => {
          node.add('id');
          node.add('title');
          node.add('options', options => {
            options.add('name');
            options.add('values');
          });
          node.add('variants', {
            args: {
              first: 250
            }
          }, variants => {
            variants.add('pageInfo', pageInfo => {
              pageInfo.add('hasNextPage');
              pageInfo.add('hasPreviousPage');
            });
            variants.add('edges', edges => {
              edges.add('node', node => {
                node.add('title');
                node.add('selectedOptions', selectedOptions => {
                  selectedOptions.add('name');
                  selectedOptions.add('value');
                });
                node.add('image', image => {
                  image.add('src');
                });
                node.add('price');
              });
            });
          });
          node.add('images', {
            args: {
              first: 250
            }
          }, images => {
            images.add('pageInfo', pageInfo => {
              pageInfo.add('hasNextPage');
              pageInfo.add('hasPreviousPage');
            });
            images.add('edges', edges => {
              edges.add('node', node => {
                node.add('src');
              });
            });
          });
        });
      });
    });
  });
})

const shopNameAndProductsPromise = _graphqlJsClient2.default.send(_document).then(result => {
  return result.model.shop;
});

app.set('view engine', 'pug');

app.use(_express2.default.static(_path2.default.join(__dirname, '../../shared')));

app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  const checkoutId = req.query.checkoutId;

  // Create a checkout if it doesn't exist yet
  if (!checkoutId) {
    const _document2 = _graphqlJsClient2.default.document();

    _document2.addMutation(root => {
      root.add('checkoutCreate', {
        args: {
          input: {
            allowPartialAddresses: true,
            shippingAddress: {
              city: 'Toronto',
              province: 'ON',
              country: 'Canada'
            }
          }
        }
      }, checkoutCreate => {
        checkoutCreate.add('userErrors', userErrors => {
          userErrors.add('message');
          userErrors.add('field');
        });
        checkoutCreate.add('checkout', checkout => {
          checkout.add('id');
        });
      });
    })

    return _graphqlJsClient2.default.send(_document2).then(result => {
      res.redirect(`/?checkoutId=${result.model.checkoutCreate.checkout.id}`);
    });
  }

  // Fetch the checkout

  const _document3 = _graphqlJsClient2.default.document();

  _document3.addQuery([_graphqlJsClient2.default.variable('checkoutId', 'ID!')], root => {
    root.add('node', {
      args: {
        id: _graphqlJsClient2.default.variable('checkoutId')
      }
    }, node => {
      node.addInlineFragmentOn('Checkout', Checkout => {
        Checkout.add('webUrl');
        Checkout.add('subtotalPrice');
        Checkout.add('totalTax');
        Checkout.add('totalPrice');
        Checkout.add('lineItems', {
          args: {
            first: 250
          }
        }, lineItems => {
          lineItems.add('pageInfo', pageInfo => {
            pageInfo.add('hasNextPage');
            pageInfo.add('hasPreviousPage');
          });
          lineItems.add('edges', edges => {
            edges.add('node', node => {
              node.add('title');
              node.add('variant', variant => {
                variant.add('title');
                variant.add('image', image => {
                  image.add('src');
                });
                variant.add('price');
              });
              node.add('quantity');
            });
          });
        });
      });
    });
  })

  const cartPromise = _graphqlJsClient2.default.send(_document3, { checkoutId }).then(result => {
    return result.model.node;
  });

  return Promise.all([shopNameAndProductsPromise, cartPromise]).then(([shop, cart]) => {
    res.render('index', {
      products: shop.products,
      cart,
      shop,
      isCartOpen: req.query.cart
    }, function (err, html) {
      res.send(html);
      var fs = require('fs');
      fs.writeFile('products.html', html, function (err) {
        if (err) return console.log(err);
        console.log('html > products.html');
        console.log('WORKING');
      });
    });
  });
});

app.post('/add_line_item/:id', (req, res) => {
  const options = req.body;
  const productId = req.params.id;
  const checkoutId = options.checkoutId;
  const quantity = parseInt(options.quantity, 10);
  console.log('cart');
  delete options.quantity;
  delete options.checkoutId;

  return shopNameAndProductsPromise.then(shop => {
    // Find the product that is selected
    const targetProduct = shop.products.find(product => {
      return product.id === productId;
    });

    // Find the corresponding variant
    const selectedVariant = targetProduct.variants.find(variant => {
      return variant.selectedOptions.every(selectedOption => {
        return options[selectedOption.name] === selectedOption.value.valueOf();
      });
    });
    console.log(productId);

    // Add the variant to our cart
    const input = {
      checkoutId,
      lineItems: [{ variantId: selectedVariant.id, quantity }]
    };
    console.log(checkoutId);

    const _document4 = _graphqlJsClient2.default.document();

    _document4.addMutation([_graphqlJsClient2.default.variable('checkoutId', 'ID!'), _graphqlJsClient2.default.variable('lineItems', '[CheckoutLineItemInput!]!')], root => {
      root.add('checkoutLineItemsAdd', {
        args: {
          checkoutId: _graphqlJsClient2.default.variable('checkoutId'),
          lineItems: _graphqlJsClient2.default.variable('lineItems')
        }
      }, checkoutLineItemsAdd => {
        checkoutLineItemsAdd.add('userErrors', userErrors => {
          userErrors.add('message');
          userErrors.add('field');
        });
        checkoutLineItemsAdd.add('checkout', checkout => {
          checkout.add('id');
        });
      });
    })

    return _graphqlJsClient2.default.send(_document4, input).then(result => {
      res.redirect(`/?cart=true&checkoutId=${result.model.checkoutLineItemsAdd.checkout.id}`);
    });
  });
});

app.post('/remove_line_item/:id', (req, res) => {
  const checkoutId = req.body.checkoutId;
  const input = {
    checkoutId,
    lineItemIds: [req.params.id]
  };

  const _document5 = _graphqlJsClient2.default.document();

  _document5.addMutation([_graphqlJsClient2.default.variable('checkoutId', 'ID!'), _graphqlJsClient2.default.variable('lineItemIds', '[ID!]!')], root => {
    root.add('checkoutLineItemsRemove', {
      args: {
        checkoutId: _graphqlJsClient2.default.variable('checkoutId'),
        lineItemIds: _graphqlJsClient2.default.variable('lineItemIds')
      }
    }, checkoutLineItemsRemove => {
      checkoutLineItemsRemove.add('userErrors', userErrors => {
        userErrors.add('message');
        userErrors.add('field');
      });
      checkoutLineItemsRemove.add('checkout', checkout => {
        checkout.add('id');
      });
    });
  })

  return _graphqlJsClient2.default.send(_document5, input).then(result => {
    res.redirect(`/?cart=true&checkoutId=${result.model.checkoutLineItemsRemove.checkout.id}`);
  });
});

function updateLineItem(checkoutId, quantity, id) {
  const input = {
    checkoutId,
    lineItems: [{ id, quantity }]
  };

  const _document6 = _graphqlJsClient2.default.document();

  _document6.addMutation([_graphqlJsClient2.default.variable('checkoutId', 'ID!'), _graphqlJsClient2.default.variable('lineItems', '[CheckoutLineItemUpdateInput!]!')], root => {
    root.add('checkoutLineItemsUpdate', {
      args: {
        checkoutId: _graphqlJsClient2.default.variable('checkoutId'),
        lineItems: _graphqlJsClient2.default.variable('lineItems')
      }
    }, checkoutLineItemsUpdate => {
      checkoutLineItemsUpdate.add('userErrors', userErrors => {
        userErrors.add('message');
        userErrors.add('field');
      });
      checkoutLineItemsUpdate.add('checkout', checkout => {
        checkout.add('id');
      });
    });
  })

  return _graphqlJsClient2.default.send(_document6, input);
}

app.post('/decrement_line_item/:id', (req, res) => {
  return updateLineItem(req.body.checkoutId, parseInt(req.body.currentQuantity, 10) - 1, req.params.id).then(result => {
    res.redirect(`/?cart=true&checkoutId=${result.model.checkoutLineItemsUpdate.checkout.id}`);
  });
});

app.post('/increment_line_item/:id', (req, res) => {
  return updateLineItem(req.body.checkoutId, parseInt(req.body.currentQuantity, 10) + 1, req.params.id).then(result => {
    res.redirect(`/?cart=true&checkoutId=${result.model.checkoutLineItemsUpdate.checkout.id}`);
  });
});

app.listen(4200, () => {
  console.log('Example app listening on port 4200!'); // eslint-disable-line no-console
});