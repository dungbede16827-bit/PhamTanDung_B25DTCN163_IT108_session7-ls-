// thêm 
let products = [];
let checkVarStatus = null;

// truy xuat phan tu
let productForm = document.getElementById('productForm')
let productName = document.getElementById('productName')
let productPrice = document.getElementById('productPrice')
let productQuantity = document.getElementById('productQuantity')
let productCategory = document.getElementById('productCategory')
let productDescription = document.getElementById("productDescription");

let productTapleBody = document.getElementById('productTableBody');
let totalProductsElement = document.getElementById('totalProducts');
let totalValueEL = document.getElementById('totalValue')
let totalQuantityEl = document.getElementById('totalQuantity');
let sumbitBtn = document.getElementById('submitBtn');
let formTitle = document.getElementById('formTitle');
// bat su kien them
productForm.addEventListener('submit', createProduct)

// lấy dữ liệu từ localStoreage

function getData() {
    let getProduct = localStorage.getItem('products')
    if (getProduct) {
        products = JSON.parse(getProduct) // chuyển đổi dạng nguyên thủy parse từ getItem để hiển thị
        renderData()
    }
}

// gọi hàm 
getData()

//create product
function createProduct(e) {
    e.preventDefault(); // ngăn reload hiển thị biến ấy

    if (checkVarStatus !== null) {
        let findObject = products.find(p => p.id === checkVarStatus);
        if (findObject) {
            findObject.productName = productName.value.trim();
            findObject.productPrice = +productPrice.value;
            findObject.productQuantity = +productQuantity.value;
            findObject.productCategory = productCategory.value;
            findObject.productDescription = productDescription.value;
        }
        checkVarStatus = null;
        sumbitBtn.textContent = 'Thêm';
        formTitle.textContent = 'Thêm sản phẩm';

    }
    let newProduct = {
        id: Date.now(),
        productName: productName.value.trim(),
        productPrice: +productPrice.value,
        productQuantity: +productQuantity.value,
        productCategory: productCategory.value,
        productDescription: productDescription.value,

    }
    products.push(newProduct);
    console.log(products);
    localStorage.setItem('products', JSON.stringify(products));
    // key  // chuyển hóa dữ liệu muốn lưu thành dạng json trong json truyền mảng vào
    products.reset();

    renderData()
}

// render
// dùng forEach() -> duyệt qua mảng 
// - tạo tờ giấy A4 
function renderData() {
    productTapleBody.innerHTML = '';
    // - Tạo tờ giấy A4
    let createTr = document.createElement('tr');
    // - viết nội dung vào tờ giấy A4 đấy (innerHTML)
    createTr.innerHTML = ``, // xóa cái cũ

        products.forEach((task) => {

            createTr.innerHTML += `<td>${task.id}</td>
      <td>${task.id}</td>
      <td>${task.productName}</td>
      <td>${task.productPrice.toLocaleString('vi-VN')}</td>
      <td>${task.productQuantity}</td>
      <td>${task.productCategory}</td>
      <td>${task.productDescription}</td>
      <td>
        <button onClick = "updateProducts(${task.id})" >Sửa</button>
        <button ${task.id}>Xóa</button>
        </td>`;
            // - DÍnh tờ giấy A4 vào nơi muốn hiển thị -> appendchild()
            productTapleBody.appendChild(createTr);

        })


}

// tổng số sản phẩm
function stats() {
    let totalProducts = products.length;
    let totalPrice = products.reduce((total, product) => total + +product.productPrice * +product.productQuantity, 0);
    let totalQuantityEl = products.reduce((total, product) => total + +product.productQuantity, 0);


    totalProductsElement.textContent = totalProducts;
    totalValueEL.textContent = totalPrice.toLocaleString('vi-VN');
    totalQuantityEl.textContent = totalQuantityEl;

    // tổng số lượng 

}
function updateProduct(id) {
    // tìm id để tìm objeck cần sửa
    // hiển thị dữ liệu đối tượng cần sửa lên form
    
    // gán giá mới vào đối tượng cần sửa
    let findObject = products.find(p => p.id === id);
    if (findObject) {
        checkVarStatus = id;
        productName.value = findObject.productName;
        productPrice.value = findObject.productPrice;
        productQuantity.value = findObject.productQuantity;
        productCategory.value = findObject.productCategory;
        productDescription.value = findObject.productDescription;
        // xóa sản phẩm cũ
       
    }
    productName.focus();
    // sửa giaop diện nút thêm thành cập nhật và tiêu đề form tương ứng
        sumbitBtn.textContent = 'Cập nhật';
    formTitle.textContent = 'Cập nhật sản phẩm';

    // gán giá trị mới ở ô mik nhập vào dữ liệu gốc (code ở trên hàm createProduct)
}

function deleteProduct(id) {
    products = products.filter(p => p.id !== id);
    localStorage.setItem('products', JSON.stringify(products));
    renderData();
}




