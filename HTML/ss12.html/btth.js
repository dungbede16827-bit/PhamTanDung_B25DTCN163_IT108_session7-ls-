const products = [

    

    { id: 3, name: "Cành Đào", price: 500000, img: "./giolua.jpg" },

    { id: 4, name: "Mứt Tết", price: 120000, img: "" },

    { id: 5, name: "Lì Xì (Tệp)", price: 20000, img: "" },

    { id: 6, name: "Dưa Hấu", price: 60000, img: "" }

];
const cart = [
    { id: 1, name: "Bánh Chưng", price: 150000, img: "" },

    { id: 2, name: "Giò Lụa", price: 180000, img: "" },

]

function renderProducts() {

    const productList = document.getElementById("product-list");
    products.forEach((product) => {
        productList.innerHTML += `<div class="product-card">
                    <img src="./img/banhchung.webp" alt="">
                    <h3>${product.img}Bánh Chưng Tranh Khúc</h3>
                    <p class="price">${product.price.toLocaleString("vi-vn")} 150.000đ</p>
                    <button class="btn-add" id="btn-add-${product.id}">Thêm vào giỏ</button>
                </div>`
    })
}
function rederCart() {
    const cartList = document.getElementsByClassName("cart-list") [0];
    cartList.forEach(() => {
        cartList.innerHTML += `<li>
                        <span class="cart-item-name">${item.name}</span>
                        <div>
                            <span class="cart-item-price">${item.price.toLocaleString("vi-vn")}đ</span>
                            <button class="btn-remove">X</button>
                        </div>
                        </li>`
    });

    const emptyStr = document.getElementsByClassName(empty-msg)[0];
    if(cart.length !== 0) {
        emptyStr.style.display = "none";
    }
    const totalElement = document.getElementById("total-pricce");
    totalElement.innerText = cart.reduce((total,item) => total + item ,0).toLocaleString("vi-vn")+ "đ";
}
renderProducts();
rederCart();