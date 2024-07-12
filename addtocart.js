const product = [
    {
      id: 4,
      image: 'images/baseballhat.jpg',
      title: 'Baseball Hat',
      price: 1000,
    },
    {
      id: 1,
      image: 'images/sweatshort.png',
      title: 'Sweat Shorts',
      price: 2500,
    },
    {
      id: 2,
      image: 'images/canvasbag.jpg',
      title: 'Canvas Bag',
      price: 200,
    },
    {
      id: 3,
      image: 'images/deskcalender.jpg',
      title: 'D. Calendar',
      price: 500,
    },
    {
      id: 0,
      image: 'images/cotton-black.png',
      title: 'Cotton T-shirt',
      price: 3500,
      sizes: ['S', 'M', 'L'],
      colors: ['Black', 'ash'],
    },
    {
      id: 5,
      image: 'images/blendtshirt-black.png',
      title: 'Blend T-shirt',
      price: 2500,
      sizes: ['S', 'M', 'L'],
      colors: ['Black', 'White'],
    },
    {
      id: 6,
      image: 'images/ultrantshirt-black.png',
      title: 'Ultran T-shirt',
      price: 3500,
      sizes: ['S', 'M', 'L'],
      colors: ['Black', 'White'],
    },
    {
      id: 7,
      image: 'images/sweattshirt-black.png',
      title: 'Sweat T-shirt',
      price: 4500,
      sizes: ['S', 'M', 'L'],
      colors: ['Black', 'White'],
    },
  ];
  
  let cart = [];
  
  document.getElementById('root').innerHTML = product.map((item, index) => {

    const { id, image, title, price, sizes, colors } = item;
    const sizeOptions = sizes ? sizes.map(size => `<option value="${size}">${size}</option>`).join('') : '';
    const colorOptions = colors ? colors.map(color => `<option value="${color}">${color}</option>`).join('') : '';
    const quantityOptions = `<label for="quantity_${id}"><i>Quantity</i></label>
          <input type="number" id="quantity_${id}" class="quantity-select" value="1" min="1">
          </select>`;
  
    return (
      `<div class='box'>
        <div class='img-box'>
          <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
          <p>${title}</p>
          <h2>Rs ${price}.00</h2>
          ${quantityOptions}
          ${sizeOptions ? `<label for="size_${id}"><i>Size</i></label>
            <select id="size_${id}" class="size-select">
              ${sizeOptions}
            </select>` : ''}
          ${colorOptions ? `<label for="color_${id}"><i>Color</i></label>
            <select id="color_${id}" class="color-select">
              ${colorOptions}
            </select>` : ''}
          <button onclick='addToCart(${index}, document.getElementById("quantity_${id}")?.value, document.getElementById("size_${id}")?.value, document.getElementById("color_${id}")?.value)'>Add to cart</button>
        </div>
      </div>`
    );
  }).join('');
  
  
  function addToCart(index, quantity, size, color) {
    const selectedProduct = { ...product[index], quantity: parseInt(quantity, 10), size, color };
  
    // Check if the selected color exists for the product
    const colorImageMap = {
        "Cotton T-shirt": {
          "Black": "images/cotton-black.png",
          "ash": "images/cotton-ash.png" // Assuming you have an image for ash color
        },
        "Blend T-shirt": {
          "Black": "images/blendtshirt-black.png",
          "White": "images/blendtshirt-white.png"
        },
        "Sweat T-shirt": { // Corrected key to match the title
          "Black": "images/sweattshirt-black.png",
          "White": "images/sweattshirt-white.png"
        },
        "Ultran T-shirt": {
          "Black": "images/ultrantshirt-black.png",
          "White": "images/ultrantshirt-white.png"
        }
      };
  
    const newImage = colorImageMap[selectedProduct.title] ? colorImageMap[selectedProduct.title][color] : product[index].image;
    selectedProduct.image = newImage;
  
    const existingProductIndex = cart.findIndex(item => item.id === selectedProduct.id && item.size === selectedProduct.size && item.color === selectedProduct.color);
    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += selectedProduct.quantity;
    } else {
      cart.push(selectedProduct);
    }
    sessionStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  
    // Change product image in cart based on selected color
    const cartItem = document.querySelector(`#cartItem .cart-item:nth-child(${existingProductIndex + 1})`);
    if (cartItem) {
      const imageElement = cartItem.querySelector('.rowimg');
      if (imageElement) {
        const newImageSrc = `images/${selectedProduct.title.toLowerCase().replace(/\s+/g, '')}-${color.toLowerCase()}.png`;
        imageElement.src = newImageSrc;
      }
    }
  }
  
  function delElement(index) {
    cart.splice(index, 1);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  }
  
  function displayCart() {
    let total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length === 0) {
      document.getElementById('cartItem').innerHTML = "Your cart is empty";
     
      document.getElementById("total").innerHTML = "Rs 0.00";
    } else {
      document.getElementById("cartItem").innerHTML = cart.map((item, index) => {
        const { image, title, price, quantity, size, color } = item;
        total += price * quantity;
        return (
          `<div class='cart-item'>
            <div class='row-img'>
              <img class='rowimg' src=${image}></img>
            </div>
            <div class='item-info'>
              <p>${title}</p>
              ${title === 'Cotton T-shirt' || title === 'Blend T-shirt' || title === 'Ultran T-shirt' || title === 'Sweat T-shirt' ? `<p>Size: ${size}</p>
              <p>Color: ${color}</p>` : ''}
              <p>Quantity: ${quantity}</p>
              <h2>Rs ${(price * quantity).toFixed(2)}</h2>
            </div>
            <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
          </div>`
        );
      }).join('');
      document.getElementById("total").innerHTML = "Rs " + total.toFixed(2);
    }
  }
  
  function checkout() {
    if (cart.length === 0) {
        document.getElementById("validationMessage").textContent = "Please select at least one product before proceeding to checkout.";
    } else {
        // Store cart information in session storage
        sessionStorage.setItem('cart', JSON.stringify(cart));
        // Proceed to checkout_section.html
        window.open("checkout_section.html", "_self");  // Opens checkout_section.html in the same tab
    }
}
  
  displayCart(); // Display cart items initially
    