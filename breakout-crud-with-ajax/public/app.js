console.log('did this work??');

$(() => {

  const loadProducts = () => {
    $.get('/api/products')
      .then((products) => {
        console.log(products);
        renderProducts(products);
      });
  };  

  const createProductElement = (product) => {
    // id, price, product_name
    // <div class="product">
    //   <h2>Product name: </h2>
    //   <h2>Price: $</h2>
    // </div>

    const $productName = $('<h2>').text(`Product name: ${product.product_name}`);
    const $price = $('<h2>').text(`Price: $${product.price}`);

    const $product = $('<div>').addClass('product');

    const $form = $(`
      <form>
        <label>New Product Name:</label>
        <input name="productName" value="${product.product_name}" />
        <br/>

        <label>New Price:</label>
        <input name="price" value="${product.price}" />
        <br/>

        <button type="submit">Update!</button>
      </form>
    `);

    $form.on('submit', (event) => {
      event.preventDefault();
      const serialized = $form.serialize();
      console.log(serialized);

      $.ajax({
        type: "PATCH",
        url: `/api/products/${product.id}`,
        data: serialized
      })
        .then(() => {
          loadProducts();
        });
    });

    const $deleteButton = $('<button>').text('Delete!!');
    $deleteButton.on('click', () => {
      $.post(`/api/products/${product.id}/delete`)
        .then(() => {
          loadProducts();
        });
    });

    $product.append($productName, $price, $form, $deleteButton);

    return $product;
  };

  const renderProducts = (products) => {
    const $container = $('#product-container');
    $container.empty(); // $container.html('');
    for (const product of products) {
      const $product = createProductElement(product);
      $container.append($product);
    }
  };

  loadProducts();

  const $newProductForm = $('#new-product');
  $newProductForm.on('submit', function (event) {
    event.preventDefault();
    const serialized = $(this).serialize();
    // const serialized = $newProductForm.serialize();
    console.log(serialized);

    $.post('/api/products', serialized)
      .then(() => {
        // loadProducts();
        window.location = '/new-page';
      })
      .catch(() => {
        window.location = '/error-page';
      });
  });

  const $navButton = $('#go-somewhere');
  $navButton.click(() => {
    window.location = '/about';
  });

});

// $(document).ready(() => {});