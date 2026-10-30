let products = [];
let editId = null;

let productForm = document.getElementById('productForm');
let productName = document.getElementById('productName');
let productCategory = document.getElementById('productCategory');
let productPrice = document.getElementById('productPrice');
let productQuantity = document.getElementById('productQuantity');
let productDescription = document.getElementById('productDescription');
let totalProductsEl = document.getElementById('totalProducts');
let totalQuantityEl = document.getElementById('totalQuantity');
let totalValueEl = document.getElementById('totalValue');

let productTableBody = document.getElementById('productTableBody')

productForm.addEventListener('submit', createProduct)

function loadData() {
    let data = localStorage.getItem('products');
    if (data) {
        products = JSON.parse(data);
        renderData();
    }
}

loadData();

function createProduct(e) {
    e.preventDefault()
    let newProduct = {
        id: editId ? editId : Date.now(),
        productName: productName.value.trim(),
        productCategory: productCategory.value,
        productPrice: Number(productPrice.value),
        productQuantity: Number(productQuantity.value),
        productDescription: productDescription.value
    }
    if (editId) {
        
        products = products.map(p => p.id === editId ? newProduct : p);
        editId = null;
    } else {
       
        products.push(newProduct);
    }
    
    localStorage.setItem('products', JSON.stringify(products))
    productForm.reset()

    renderData()


}

// render
function renderData() {
    productTableBody.innerHTML = "";

    products.forEach((product) => { 
        let createTr = document.createElement('tr');

    createTr.innerHTML = `
    <td>${product.id}</td>
      <td>${product.productName}</td>
      <td>${product.productCategory}</td>
      <td>${product.productPrice}</td>
      <td>${product.productQuantity}</td>
      <td>${product.productDescription}</td>
      <td>
        <button onclick="editProduct(${product.id})" >
                      ✏️ Sửa
        </button>
        <button onclick="deleteProduct(${product.id})" >
                      🗑️ Xóa
        </button>
      </td>
    `
    productTableBody.appendChild(createTr)
    })
    
    updateStats();

}

function editProduct(id) {
    let product = products.find(p => p.id === id);

    
    productName.value = product.productName;
    productCategory.value = product.productCategory;
    productPrice.value = product.productPrice;
    productQuantity.value = product.productQuantity;
    productDescription.value = product.productDescription;

    editId = id;
    productName.focus();
}

function deleteProduct(id) {
    let confirmDelete = confirm("Bạn có chắc muốn xóa không?");

    if (confirmDelete) {
        products = products.filter(p => p.id !== id);

        localStorage.setItem('products', JSON.stringify(products));
        renderData();
    }
}
function updateStats() {
    let totalProducts = products.length;

    let totalQuantity = 0;
    let totalValue = 0;

    products.forEach(product => {
        totalQuantity += product.productQuantity;
        totalValue += product.productQuantity * product.productPrice;
    });

    totalProductsEl.textContent = totalProducts;
    totalQuantityEl.textContent = totalQuantity;

    // format tiền VND cho đẹp
    totalValueEl.textContent = totalValue.toLocaleString('vi-VN') + " ₫";
}
