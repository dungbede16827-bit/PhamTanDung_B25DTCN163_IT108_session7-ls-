const products = [
  { id: 1, name: "Bánh Chưng", price: 150000, img: "./img/banhchung.webp" },
  { id: 2, name: "Giò Lụa", price: 180000, img: "./img/giolua.jpg" },
  { id: 3, name: "Cành Đào", price: 500000, img: "./img/canhdao.webp" },
  { id: 4, name: "Mứt Tết", price: 120000, img: "./img/muttet.webp" },
  { id: 5, name: "Lì Xì (Tệp)", price: 20000, img: "./img/lixi.webp" },
  { id: 6, name: "Dưa Hấu", price: 60000, img: "./img/duahau.jpg" },
];

let cartList = [];

function renderProduct() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    productList.innerHTML += `
      <div class="product-card">
        <img src="${product.img}" alt="">
        <h3>${product.name}</h3>
        <p class="price">${product.price.toLocaleString("vi-VN")}đ</p>
        <button class="btn-add" onclick="addToCart(${product.id})">
          Thêm vào giỏ
        </button>
      </div>
    `;
  });
}

function addToCart(id) {
  const product = products.find((value) => value.id === id);
  cartList.push(product);
  renderCart();
}

function removeItem(index) {
  cartList.splice(index, 1);
  renderCart();
}

function renderCart() {
  const cart = document.getElementById("cart-list");
  const totalPriceEl = document.getElementById("total-price");

  cart.innerHTML = "";
  if (cartList.length === 0) {
    cart.innerHTML = `<li class="empty-msg">Chưa có món nào...</li>`;
    totalPriceEl.innerText = "0đ";
    return;
  }

  let total = 0;

  // Render từng sản phẩm
  cartList.forEach((item, index) => {
    total += item.price;

    cart.innerHTML += `
      <li>
        <span class="cart-item-name">${item.name}</span>
        <div>
          <span class="cart-item-price">
            ${item.price.toLocaleString("vi-VN")}
          </span>
          <button class="btn-remove" onclick="removeItem(${index})">
            X
          </button>
        </div>
      </li>
    `;
  });

  // Cập nhật tổng tiền
  totalPriceEl.innerText = total.toLocaleString("vi-VN") + "đ";
}
function addToCart(id) {
  const product = products.find((value) => value.id === id);
  let cartItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    img: product.img,
    quantity: 1,
  }
  cartList.push(cartItem);
  renderCart();
}


renderProduct();
renderCart();