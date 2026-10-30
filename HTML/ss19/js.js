let products = [
{
id: 1,
name: "Tai nghe Bluetooth",
price: 350000, // VNĐ
image: "https://via.placeholder.com/200x200?text=Tai+Nghe",
description: "Tai nghe Bluetooth không dây, pin 8 giờ, kêt nôi ổn định."

},
{
id: 2,
name: "Chuột không dây",
price: 250000, // VNĐ
image: "https://via.placeholder.com/200x200?text=Chuot",
description: "Chuột không dây thiêt kê công thái học, DPI cao, phù hợp làm việc và chơi game."
}
];

let cart = {};
const STORAGE_KEY = "mp19_cart_v1";

const productsGridEl = document.getElementById("products-grid");
const productsEmptyEl = document.getElementById("products-empty");
const productCountBadgeEl = document.getElementById("product-count-badge");

const cartTbodyEl = document.getElementById("cart-tbody");
const cartEmptyEl = document.getElementById("cart-empty");

const cartLinesBadgeEl = document.getElementById("cart-lines-badge");
const cartQtyBadgeEl = document.getElementById("cart-qty-badge");

const statLinesEl = document.getElementById("stat-lines");
const statQtyEl = document.getElementById("stat-qty");
const statTotalEl = document.getElementById("stat-total");

const clearCartBtn = document.getElementById("clear-cart-btn");

function formatVND(n) {
  return new Intl.NumberFormat("vi-VN").format(n || 0) + " VNĐ";
}

function getProduct(id) {
  return products.find(p => p.id === id);
}

function getCartItems() {
  return Object.values(cart);
}

function calcStats() {
  let lines = 0, qty = 0, total = 0;

  getCartItems().forEach(it => {
    let p = getProduct(it.productId);
    if (!p) return;
    lines++;
    qty += it.quantity;
    total += p.price * it.quantity;
  });

  return { lines, qty, total };
}

function renderProducts() {
  productCountBadgeEl.innerText = products.length + " sản phẩm";

  if (!products.length) {
    productsEmptyEl.classList.remove("hidden");
    productsGridEl.innerHTML = "";
    return;
  }

  productsEmptyEl.classList.add("hidden");

  productsGridEl.innerHTML = products.map(p => `
    <div class="card">
      <img src="${p.image}" data-fallback="https://picsum.photos/seed/fallback-${p.id}/1200/800">
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <b>${formatVND(p.price)}</b>
      <button data-id="${p.id}" class="add-btn">Thêm</button>
    </div>
  `).join("");

  productsGridEl.querySelectorAll("img").forEach(img => {
    img.onerror = () => {
      if (img.dataset.loaded) return;
      img.dataset.loaded = 1;
      img.src = img.dataset.fallback;
    };
  });
}

function renderCart() {
  let items = getCartItems();

  cartEmptyEl.classList.toggle("hidden", items.length > 0);

  cartTbodyEl.innerHTML = items.map(it => {
    let p = getProduct(it.productId);
    if (!p) return "";
    return `
      <tr>
        <td>${p.name}</td>
        <td>${formatVND(p.price)}</td>
        <td>
          <button data-action="dec" data-id="${p.id}">-</button>
          ${it.quantity}
          <button data-action="inc" data-id="${p.id}">+</button>
        </td>
        <td>${formatVND(p.price * it.quantity)}</td>
        <td><button data-action="remove" data-id="${p.id}">Xóa</button></td>
      </tr>
    `;
  }).join("");

  let s = calcStats();
  cartLinesBadgeEl.innerText = s.lines + " dòng";
  cartQtyBadgeEl.innerText = s.qty + " món";

  statLinesEl.innerText = s.lines;
  statQtyEl.innerText = s.qty;
  statTotalEl.innerText = formatVND(s.total);
}

function addToCart(id) {
  if (!cart[id]) cart[id] = { productId: id, quantity: 1 };
  else cart[id].quantity++;
  save();
  renderCart();
}

function inc(id) {
  cart[id].quantity++;
  save();
  renderCart();
}

function dec(id) {
  cart[id].quantity--;
  if (cart[id].quantity <= 0) delete cart[id];
  save();
  renderCart();
}

function removeItem(id) {
  let p = getProduct(id);
  if (!confirm("Xóa " + (p ? p.name : "") + " ?")) return;
  delete cart[id];
  save();
  renderCart();
}

function clearCart() {
  if (!confirm("Xóa toàn bộ giỏ hàng?")) return;
  cart = {};
  save();
  renderCart();
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

function load() {
  let data = localStorage.getItem(STORAGE_KEY);
  if (data) cart = JSON.parse(data);
}

productsGridEl.addEventListener("click", e => {
  if (e.target.classList.contains("add-btn")) {
    addToCart(Number(e.target.dataset.id));
  }
});

cartTbodyEl.addEventListener("click", e => {
  let id = Number(e.target.dataset.id);
  let action = e.target.dataset.action;

  if (action === "inc") inc(id);
  if (action === "dec") dec(id);
  if (action === "remove") removeItem(id);
});

clearCartBtn.onclick = () => {
  if (!getCartItems().length) return alert("Giỏ trống");
  clearCart();
};

load();
renderProducts();
renderCart();