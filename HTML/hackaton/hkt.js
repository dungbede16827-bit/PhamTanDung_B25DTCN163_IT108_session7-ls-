let student = [
            {id: "SV001" , name: "Phạm Tấn Dũng" , mathScores: 10 , literatureScore: 10 , englishScore: 10 , tb: 10},
            {id: "SV002" , name: "Nguyễn Văn B" , mathScores: 8 , literatureScore: 8 , englishScore: 10 , tb: 8},
            {id: "SV003" , name: "Trần Văn C" , mathScores: 9 , literatureScore: 9 , englishScore: 9 , tb: 9},

        ];
        function createStudent() {
            let id;
            while(true) {
                id = prompt("mời bạn nhập Id của mình(id duy nhất):")
                
                if( student.some(std => std.id === id) ) {
                    alert("ID đã tồn tại, vui lòng chọn ID khác.");
                    return;
                }
                break;
            }
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
            let mathScores;
            while(true) {
                mathScores = prompt("nhập điểm toán của sinh viên:");
                if(isNaN(mathScores) || mathScores < 0 || mathScores >10) {
                    alert("điểm toán phải là số từ 0 đến 10");
                    continue;
                }
                break;
            }
            let literatureScore;
            while(true) {
                literatureScore = prompt("nhập điểm văn của sinh viên:");
                if(isNaN(literatureScore) || literatureScore < 0 || literatureScore >10) {
                    alert("điểm văn phải là số từ 0 đến 10");
                    continue;
                }
                break;
            }
            let englishScore;
            while(true) {
                englishScore = prompt("nhập điểm anh của sinh viên:");
                if(isNaN(englishScore) || englishScore < 0 || englishScore >10) {
                    alert("điểm anh phải là số từ 0 đến 10");
                    continue;
                }
                break;
            }

            const newStudent = {
                id: id,
                name: name,
                mathScores: Number(mathScores),
                literatureScore: Number(literatureScore),
                englishScore: Number(englishScore),
                tb: (Number(mathScores) + Number(literatureScore) + Number(englishScore)) / student.length
            };
            student.push(newStudent);
                alert("Đã thêm sinh viên: " + newStudent.name);
        }
        function showStudent() {
            alert(`Danh sách sinh viên ban đầu `);
            student.forEach(std => {
                alert(`ID: ${std.id} | Name: ${std.name} | Math: ${std.mathScores} | Literature: ${std.literatureScore} | English: ${std.englishScore} | Average: ${std.tb}`);
            });
            
        };
        function deleteStudent () {
            let id = prompt("mời bạn nhập Id cần xóa : ");
            idDelete = student.find(std => std.id === id)
            if(!idDelete) {
                alert("mã sinh viên không tồn tại");
                return;
            }
            let check = prompt(" có chắc chắn muốn xóa sinh viên đó hay không? (yes/no)");
            check = check.toLocaleUpperCase();
            if(check === "yes") {
                student = student.filter(std => std.id !== id);
                alert("Đã xóa sinh viên có ID: " + id);
            } else {
                alert("Hủy bỏ thao tác xóa.");
            }
            
        }
        function editStudent() {
            let id = prompt("mời bạn nhập Id cần sửa : ");
            const studentEdit = student.find(std => std.id === id);
            if(!studentEdit) {
                alert("mã sinh viên không tồn tại");
                return;
            }
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
            let mathScores;
            while(true) {
                mathScores = prompt("nhập điểm toán của sinh viên:");
                if(isNaN(mathScores) || mathScores < 0 || mathScores >10) {
                    alert("Lỗi ! điểm toán phải là số từ 0 đến 10");
                    continue;
                }
                break;
            }
            let literatureScore;
            while(true) {
                literatureScore = prompt("nhập điểm văn của sinh viên:");
                if(isNaN(literatureScore) || literatureScore < 0 || literatureScore >10) {
                    alert("Lỗi! điểm văn phải là số từ 0 đến 10");
                    continue;
                }   
                break;
            }
            let englishScore;
            while(true) {
                englishScore = prompt("nhập điểm anh của sinh viên:");  
                if(isNaN(englishScore) || englishScore < 0 || englishScore >10) {
                    alert("Lỗi! điểm anh phải là số từ 0 đến 10");
                    continue;
                }
                break;
            }
            studentEdit.name = name;
            studentEdit.mathScores = Number(mathScores);
            studentEdit.literatureScore = Number(literatureScore);
            studentEdit.englishScore = Number(englishScore);
            studentEdit.tb = (Number(mathScores) + Number(literatureScore) + Number(englishScore)) / student.length;
            alert("Đã cập nhật sinh viên: " + name);
        }   
        function searchStudent() {
            let search = prompt("nhập tên hoặc mã sinh viên cần tìm:");
            let idSearch = student.find(std => std.name === search);
            let nameSearch = student.find(st => st.id === search);
            if(!id  || id !== search) {
                alert("không tồn tại tên hoặc id như vậy!");
            } 
            if(student.find(std => std.name === search)) {
                alert(`tìm thấy sinh viên ID:  ${idSearch.id} | Name: ${idSearch.name} | Math: ${idSearch.mathScores} | Literature: ${idSearch.literatureScore} | English: ${idSearch.englishScore} | Average: ${idSearch.tb}`)
            }
            if(student.find(st => st.id === search)) {
                alert(`tìm thấy sinh viên ID:  ${nameSearch.id} | Name: ${nameSearch.name} | Math: ${nameSearch.mathScores} | Literature: ${nameSearch.literatureScore} | English: ${nameSearch.englishScore} | Average: ${nameSearch.tb}`)
            }


            
        }
        function averageScore() {
            sum = student.reduce((sum,i) => {sum += i.tb},0 );
            averageGrade = sum/student.length;
            alert(`điểm trung bình cảu cả lớp là : ${averageGrade}`);
        }
        function arrange() {
            choice = prompt("chọn sắp theo thứ tự tăng/giảm");
            choice = choice.toLocaleUpperCase();8

            if(choice === "tăng") {
                 alert("điểm trung bình từ thấp đến cao")
              let check = student
                .sort((a,b) => b.tb - a.tb)
                    .map((value) => `id: ${value.id} | name: ${value.name} | điểm toán: ${value.mathScores} | điểm văn : ${value.literatureScore} | điểm anh : ${value.englishScore} | điểm tb ${value.tb}`);
                    console.log(check)
                    .join("\n");
                console(check);
            } else {
                alert("điểm trung bình từ cao đến thấp")
              let check2 = student
                .sort((a,b) => a.tb - b.tb)
                    .map((value) => `id: ${value.id} | name: ${value.name} | điểm toán: ${value.mathScores} | điểm văn : ${value.literatureScore} | điểm anh : ${value.englishScore} | điểm tb ${value.tb}`);
                    console.log(check2)
                    .join("\n");
                console(check2);
            }

           

            


        }
        function searchByScoreRange() {
            let minScore = prompt("nhập điểm thấp nhất:");
            let maxScore = prompt("nhập điểm cao nhất:");
            if(isNaN(minScore) || isNaN(maxScore) || minScore < 0 || maxScore > 10 || minScore > maxScore) {
                alert("Lỗi! điểm phải là số từ 0 đến 10 và điểm thấp nhất phải nhỏ hơn hoặc bằng điểm cao nhất.");
                return;
            }
            const studentsInRange = student.filter(std => std.tb >= minScore && std.tb <= maxScore);    
            if(studentsInRange.length === 0) {
                alert("Không có sinh viên nào trong khoảng điểm này.");
            } else {
                let result = studentsInRange
                    .map(std => `ID: ${std.id} | Name: ${std.name} | Math: ${std.mathScores} | Literature: ${std.literatureScore} | English: ${std.englishScore} | Average: ${std.tb}`)     
                    .join("\n");
                alert(`Sinh viên có điểm trung bình từ ${minScore} đến ${maxScore}:\n${result}`);
            }   
            let result = studentsInRange
                    .map(std => `ID: ${std.id} | Name: ${std.name} | Math: ${std.mathScores} | Literature: ${std.literatureScore} | English: ${std.englishScore} | Average: ${std.tb}`)
                    .join("\n");
            console.log(result);
        }   
        function classifyStudents() {
            student.forEach(std => {
                if(std.tb >= 9) {
                    std.classification = "Xuất sắc";
                } else if(std.tb >= 8) {
                    std.classification = "Giỏi";
                } else if(std.tb >= 7) {
                    std.classification = "Khá";
                }   
                else if(std.tb >= 5) {
                    std.classification = "Trung bình";
                } else {
                    std.classification = "Yếu";
                }           
            }); 
            let result = student    
                .map(std => `ID: ${std.id} | Name: ${std.name} | Math: ${std.mathScores} | Literature: ${std.literatureScore} | English: ${std.englishScore} | Average: ${std.tb} | Classification: ${std.classification}`)
                .join("\n");
            alert(`Phân loại sinh viên:\n${result}`);
        }   


        



        const showMenu = () => {
         let choice = prompt(`
         Mời bạn nhập lựa chọn : 
                 1   Khởi tạo hiển thị dữ liệu
                 2   thêm sinh viên
                 3   xóa sinh viên
                 4   sửa sinh viên
                 5   tìm sinh viên
                 6   Phân loại sinh viên
                 7   tính điểm trung bình của cả lớp
                 8   sắp xếp sinh viên theo điểm trung bình
                 9   tìm kiếm sinh viên theo khoảng điểm
                 0   exit
            Enter your choice: 
            
         `)
         return choice;
        };

        function main() {
            while(true) {
                const choice = showMenu();
                switch(choice) {
                    case "1":
                        showStudent();
                        break;
                    case "2":
                        createStudent();
 
                        break;
                    case "3":
                        deleteStudent();
                        
                        break;
                    case "4":
                        editStudent();
                        
                        break;  
                    case "5":
                        searchStudent();
                        
                        break;
                    case "6":
                        classifyStudents();
                        
                        break;
                    case "7":
                        averageScore();

                    break;
                    case "8":
                        arrange();
                        break;
                    case "9":
                    searchByScoreRange();
                    break;
                    case "0":
                        alert("Cảm ơn bạn đã sử dụng chương trình!");
                        return;
                    default:
                        alert("Lựa chọn không hợp lệ, vui lòng chọn lại.");
                }
            }        }

        main();