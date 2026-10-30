<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let student = [
            { id: "SV001", name: "Nguyễn Văn An", age: 20, gpa: 8.2, status: "active" },
            { id: "SV002", name: "Trần Thị Bình", age: 19, gpa: 7.5, status: "active" },
            { id: "SV003", name: "Lê Hoàng Nam", age: 22, gpa: 6.8, status: "inactive" },
            { id: "SV004", name: "Phạm Minh Tuấn", age: 18, gpa: 9.1, status: "active" },
            { id: "SV005", name: "Hoàng Thị Mai", age: 23, gpa: 5.9, status: "inactive" }
        ];
        const showMenu = () => {
         let choice = prompt(`
         Mời bạn nhập lựa chọn : 
                 1   Create Student
                 2   Update Student
                 3   Soft Delete Student
                 4   Restore Student
                 5   View Students (Pipeline Mode)
                 6   Analytics Dashboard
                 7   Exit
            Enter your choice: 
            
         `)
         return choice;
        };
        function createStudent() {
            let name;
            while(true) {
                name = prompt("Nhập tên sinh viên:")
                if(!name || name.trim() === "") {
                    alert("tên khong được để trống !");
                    continue;
                }
                name = name.trim();
                break;
            }

            let age 
            while(true) {
                age = Number(prompt("Nhập tuổi sinh viên:"));
                if(isNaN(age) || age <= 0 || age > 60) {
                    alert("Tuổi phải là một số dương và không vượt quá 60!");
                    continue;
                }
                break;
            }

            let gpa 
            while(true) {
                gpa = Number(prompt("Nhập GPA sinh viên (0.0 - 10.0):"));
                if(isNaN(gpa) || gpa < 0 || gpa > 10) {
                    alert("GPA phải là một số từ 0.0 đến 10.0!");
                    continue;
                }
                break;
            }
            let id = prompt("Nhập ID sinh viên (duy nhất):");
            if(student.some(st => st.id === id)) {
                alert("ID đã tồn tại, vui lòng nhập ID khác.");
                return;
            }
            let newStudent = {
                id: id,
                name: name,
                age: age,
                gpa: gpa,
                status: "active"
            };
            student.push(newStudent);
            alert("Sinh viên mới đã được tạo thành công!");
        }
        function updateStudent() {
            
         let id = prompt("Nhập ID sinh viên cần cập nhật:");
         let st = student.find(st => st.id === id);
         if(!st) {
            alert("Không tìm thấy sinh viên với ID đã nhập.");
            return;
         }
         let name = prompt(`Nhập tên mới cho sinh viên (hiện tại: ${st.name}):`);
         if(name && name.trim() !== "") {
            st.name = name.trim();
         }
         let age = Number(prompt(`Nhập tuổi mới cho sinh viên (hiện tại: ${st.age}):`));
         if(!isNaN(age) && age > 0 && age <= 60) {
            st.age = age;
         }
         let gpa = Number(prompt(`Nhập GPA mới cho sinh viên (hiện tại: ${st.gpa}):`));
         if(!isNaN(gpa) && gpa >= 0 && gpa <= 10) {
            st.gpa = gpa;
         }
         alert("Thông tin sinh viên đã được cập nhật thành công!");
        }
        function DeleteStudent() {
            let id = prompt("nhập Id để xóa");
            let idDelete = student.find(st => st.id === id);
            if(!idDelete ) {
                alert("không tìm thấy sv có Id như vậy");
                return;
            }
            if(idDelete.status === "inactive") {
                alert("sinh viên này đang ở dạng inactive không cần xóa");
            }
            idDelete.status = "inactive";
            idDelete.deleteAt = Date.now();
            alert(`✅ Sinh viên ${idDelete.name} đã được xóa thành công!`);
        }
        function RestoreStudent() {
            let id = prompt("nhập Id để khôi phục");
            let idRestore = student.find(st => st.id === id);
            if(!idRestore || idRestore.trim() === "") {
                alert("không tìm thấy sv có Id như vậy");
                return;
            }
            if(idRestore.status === "active") {
                alert("sinh viên này đang ở dạng active không cần khôi phục");
            }
            idRestore.status = "active";
            delete idRestore.deleteAt;
            alert(`✅ Sinh viên ${idRestore.name} đã được khôi phục thành công!`);
        }
        function ViewStudents() {

    // 1️ Clone dữ liệu
    let workingData = [...student];


    let search = prompt("Nhập tên cần tìm (bỏ trống nếu không):") || "";
    workingData = workingData.filter(st =>
        st.name.toLowerCase().includes(search.toLowerCase())
    );

    
    let status = prompt("Lọc theo status (active/inactive/all):") || "all";
    if (status !== "all") {
        workingData = workingData.filter(st => st.status === status);
    }


    let sort = prompt("Sắp xếp GPA (asc/desc):") || "asc";
    workingData.sort((a, b) =>
        sort === "asc" ? a.gpa - b.gpa : b.gpa - a.gpa
    );

    
    let pageSize = 5;
    let currentPage = 1;
    let totalRecords = workingData.length;
    let totalPages = Math.ceil(totalRecords / pageSize);

    if (totalRecords === 0) {
        alert("Không có dữ liệu phù hợp.");
        return;
    }

    while (true) {

        let start = (currentPage - 1) * pageSize;
        let pageData = workingData.slice(start, start + pageSize);

        let output = pageData.map(st =>
            `ID:${st.id} | ${st.name} | Age:${st.age} | GPA:${st.gpa} | ${st.status}`
        ).join("\n");

        let action = prompt(`
Trang ${currentPage}/${totalPages}
Tổng bản ghi: ${totalRecords}

${output}

Chọn:
first | last | next | prev | exit
        `);

        if (action === "first") currentPage = 1;
        else if (action === "last") currentPage = totalPages;
        else if (action === "next" && currentPage < totalPages) currentPage++;
        else if (action === "prev" && currentPage > 1) currentPage--;
        else if (action === "exit") break;
    }
}
        function AnalyticsDashboard() {

    let stats = student.reduce((acc, st) => {

        acc.total++;

        if (st.status === "active") acc.active++;
        else acc.inactive++;

        acc.totalGpa += st.gpa;

        if (st.gpa === 0) acc.zeroGpa.push(st);
        if (st.gpa < 3) acc.lowGpa.push(st);

        if (st.gpa >= 8) acc.gioi++;
        else if (st.gpa >= 6.5) acc.kha++;
        else if (st.gpa >= 5) acc.trungBinh++;
        else acc.yeu++;

        return acc;

    }, {
        total: 0,
        active: 0,
        inactive: 0,
        totalGpa: 0,
        zeroGpa: [],
        lowGpa: [],
        gioi: 0,
        kha: 0,
        trungBinh: 0,
        yeu: 0
    });

    let avgGpa = (stats.totalGpa / stats.total).toFixed(2);

    alert(`
===== DASHBOARD =====
Tổng SV: ${stats.total}
Active: ${stats.active}
Inactive: ${stats.inactive}

GPA trung bình: ${avgGpa}

Risk:
GPA = 0: ${stats.zeroGpa.length}
GPA < 3: ${stats.lowGpa.length}

Academic Distribution:
Giỏi: ${stats.gioi}
Khá: ${stats.kha}
Trung bình: ${stats.trungBinh}
Yếu: ${stats.yeu}
    `);
}
        
        const main = () =>  {
            let choice 
            while(choice != 7) {
                choice = showMenu();
                choice = Number(choice);
                switch(choice) {
                    //Create Student
                    case 1: {
                        createStudent();
                        break;
                    }
                    case 2: {
                        updateStudent();
                        break;
                    }
                    case 3: {
                        DeleteStudent();

                        break;
                    }
                    case 4: {
                        RestoreStudent();

                        break;
                    }
                    case 5: {
                        ViewStudents();

                        break;
                    }
                    case 6: {
                        AnalyticsDashboard();

                        break;
                    }
                    case 7: {
                        alert("GoodBye !");
                        break;
                    }
                    default : 
                        alert("lựa chọn không hợp lệ");
                        break;
                    

                }

            }
        }
        main();
    </script>
</body>
</html>