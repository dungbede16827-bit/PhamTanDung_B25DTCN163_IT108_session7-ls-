// let list = [
//     {id: 1 , nameMusic: "Cắt đôi nỗi sầu",name:"Nguyễn Thế Hiếu" , status :"Đang nghe"},
//     {id: 2 , nameMusic: "Khó vẽ nụ cười",name:"Phạm Hồng Phong" , status :"chưa nghe"},
 
// ];

// localStorage.setItem("list",JSON.stringify(list));

let list =JSON.parse(localStorage.getItem("list")) || []; // trước sai thì lấy sau
let editId = null;
// chức năng hiển thị dữ liệu giao diện

function renderList() {
    let songList = document.getElementById("songTable");

    songList.innerHTML = "";
    
    list.forEach(ms => {
        songList.innerHTML +=`
        <tr>
                <td>${ms.id}</td>
                <td>${ms.nameMusic}</td>
                <td>${ms.name}</td>
                <td>${ms.status}</td>
                <td><button onclick="editSong(${ms.id})" >Sửa</button> <button onclick="deleteList(${ms.id})">Xóa</button></td>
            </tr>`
        
    });
   
}

function handleSubmit() {
    
    const titleMusic = document.getElementById("title").value;
    const artist = document.getElementById("artist").value;
    
    if(editId !== null) {
        let index = list.findIndex(ms => ms.id === editId);
        list[index].nameMusic = titleMusic;
        list[index].name = artist;

        editId = null;
        document.getElementById("formTitle").innerText = "Thêm bài hát";
        document.getElementById("submitBtn").innerText = "Thêm";

    } else {
        const newList = {
        id: list.length  !== 0 ? list[list.length -1].id + 1 : 1,
        nameMusic: titleMusic,
        name: artist,
        status: "Chưa nghe"
        
    }
    list.push(newList);
    }

    
    
    localStorage.setItem("list",JSON.stringify(list));
    document.getElementById("title").value = "";
    document.getElementById("artist").value = "";
    renderList();

}
function deleteList(listId) {
     let check = confirm("Bạn có chắc chắn muốn xóa bài hát này không?");
    if (check) {
        list = list.filter(ms => ms.id !== listId);
    localStorage.setItem("list",JSON.stringify(list));
    renderList();
    }
    

}

function editSong(id) {
    let song = list.find(ms => ms.id === id);
    document.getElementById("title").value = song.nameMusic
    document.getElementById("artist").value = song.name

    document.getElementById("formTitle").innerText = "Sửa bài hát";
    document.getElementById("submitBtn").innerText = "Cập nhật";
    editId = id;
}
function searchSong() {
    
    let keyword = document.getElementById("search").value.toLowerCase();

    let songList  = document.getElementById("songTable");
    
    songList.innerHTML = "";

    list
    .filter(song => song.nameMusic.toLowerCase().includes(keyword))
        .forEach(ms => {
            songList.innerHTML += `
            <tr>
                <td>${ms.id}</td>
                <td>${ms.nameMusic}</td>
                <td>${ms.name}</td>
                <td>${ms.status}</td>
                <td>
                    <button onclick="editSong(${ms.id})">Sửa</button>
                    <button onclick="deleteList(${ms.id})">Xóa</button>
                </td>
            </tr>
            `;
        });


}


renderList();
