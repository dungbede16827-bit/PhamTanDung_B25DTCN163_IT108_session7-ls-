// let products = [
//     {id:1 , nameProduct: "Laptop Dell XPS 13" , price:"28.500.000 ₫" , inventory:36 },
//     {id:2 , nameProduct: "Chuột Logitech MX Master" , price:"1.850.000 ₫	" , inventory:34 },

// ];
// localStorage.setItem("Products",JSON.stringify(Products));

let products = JSON.parse(localStorage.getItem("products")) || [];
let editId = null;
let btn = document.getElementById("btnSubmit")

function rederProduct(products) {
    let ListProduct = document.getElementById("tbody");
    ListProduct.innerHTML =""
    products.forEach(prd => { 
        ListProduct.innerHTML += `
        <tr id="row-SPJ8061MB">
                <td>${prd.id}</td>
                <td class="td-name">${prd.nameProduct}</td>
                <td class="td-price">${prd.price.toLocaleString()} đ</td>
                <td class="center" style="font-weight: 700">${prd.inventory}</td>
                <td>
                  <div class="td-actions">
                    <button class="btn btn-sm btn-edit" onclick = "updateProduct(${prd.id})" >✏ Sửa</button>
                    <button class="btn btn-sm btn-del" onclick = "deleteProduct(${prd.id})">✕ Xóa</button>
                  </div>
        `


        
    });


}
function submitForm(e) {
    e.preventDefault();
    let nameInput = document.getElementById("iName").value;
    let priceInput = document.getElementById("iPrice").value;
    let inventoryInput = document.getElementById("iStock").value;

    if(nameInput === "" || isNaN(priceInput) || isNaN(inventoryInput)) {
        alert("Vui lòng điền đầy đủ thông tin ");
    return;
    }else if ( priceInput < 0 || inventoryInput < 0 ) {
        alert("giá và số lượng tồn kho phải lớn hơn 0");
        return;
    }

    if(editId) {
        let idIndex = products.findIndex(e => e.id === editId);
        products[idIndex].nameProduct = nameInput;
        products[idIndex].price = priceInput;
        products[idIndex].inventory = inventoryInput;

    editId = null;
    alert("Cập nhật sản phẩm thành công");
        btn.innerText = "Thêm công việc";
    
    } else {
        const newProduct = {
       id: products.length !== 0 ? products[products.length -1].id + 1 : 1,
        nameProduct: nameInput,
        price:priceInput.toLocaleString(),
        inventory:inventoryInput,
    }
    products.push(newProduct);
    }
    
    nameInput.value = "";
    priceInput.value = "";
    inventoryInput.value = "";
    localStorage.setItem("products",JSON.stringify(products));
    rederProduct(products);

}

function deleteProduct(prdId) {
    let check = confirm("bạn có chắc chắn muốn xóa không ? ");
    if(check) {
        products = products.filter(prd => prd.id !== prdId) ;
    localStorage.setItem("products",JSON.stringify(products));
    rederProduct(products);
    }
    

}
function findProduct() {
    let findInput = document.getElementById("searchInput");
    let searchProduct = findInput.value.toLowerCase().trim();
    let findProduct = products.filter(p => p.nameProduct.toLowerCase().includes(searchProduct));
    rederProduct(findProduct);
}

function updateProduct(id) {
 let product = products.find(e => e.id === id);
 let nameInput = document.getElementById("iName");
 let priceInput = document.getElementById("iPrice");
 let inventoryInput = document.getElementById("iStock");

 nameInput.value = product.nameProduct;
 priceInput.value = product.price;
 inventoryInput.value = product.inventory;
    editId = id;

    btn.innerText = "Cập Nhật";

}
function sortProduct() {
    let check = document.getElementById("sortSelect");
    if(check.value === "name_asc") {
        products.sort((a,b) => a.nameProduct.localeCompare(b.nameProduct))
        rederProduct(products);
    }else if(check.value === "name_desc") {
        products.sort((a,b) => b.nameProduct.localeCompare(a.nameProduct))
        rederProduct(products);
    } else if(check.value ==="price_asc") {
         products.sort((a,b) => a.price - (b.price))
         rederProduct(products);
    } else {
         products.sort((a,b) => b.price - (a.price))
         rederProduct(products);
    }
    
}

function resetForm() {
    document.getElementById("iName").value = "";
    document.getElementById("iPrice").value = "";
    document.getElementById("iStock").value = "";
    editId = null;
    btn.innerText = "Thêm sản phẩm";
    



}








rederProduct(products);