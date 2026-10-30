console.log(sessionStorage);

// GEt - lấy dữ liệt nằm trong Ss Storage

sessionStorage.email; 
sessionStorage.password;  


// getItem();
let eamil = sessionStorage.getItem("email"); 

//  CRATE - thêm mới dữ liệu vào trong session storage
sessionStorage.username = "mck123123";

// .setItem();
sessionStorage.setItem("dob" ,"31/3/2008");

// UPDATE - Cập nhật dữ liệu trong session storage
sessionStorage.dob ="3/3/2007";
sessionStorage.dob ="3/3/2008";

// Delete  - xóa dữ liệu trong ss store

delete sessionStorage.dob;
sessionStorage.removeItem("username");

sessionStorage.name = "Hello world"

sessionStorage.age = "18";

sessionStorage.status = true;

// JSON - JavaScript Object Notation

sessionStorage.dob = "31/03/1982";

let studentList = [
    {
        id: 1,
        name: "Trần Văn A",
    },
    {
        id: 2,
        name: "Nguyễn Văn B",
    }
];
sessionStorage.studentList =JSON.stringify(studentList);

console.log(JSON.parse(sessionStorage.studentList)); 

localStorage.age = JSON.stringify(18);

localStorage.studentList = JSON.stringify([{id: 1 , name: "hello"}]);
localStorage.studentList