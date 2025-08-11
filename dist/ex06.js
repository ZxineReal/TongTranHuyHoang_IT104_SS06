class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getID() {
        return this.id;
    }
}
const allStudent = [];
class Classroom {
    constructor(students) {
        this.students = students;
    }
    showStudents() {
        this.students.forEach((student) => {
            console.log(`ID: ${student.getID()}, Name: ${student.name}`);
        });
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        return this.students.filter((student) => student.getID() === id);
    }
    addStudentInClass(id) {
        const index = allStudent.findIndex((student) => student.getID() === id);
        if (index !== -1) {
            this.students.push(allStudent[index]);
            allStudent.splice(index, 1);
        }
        else {
            console.log("Không tìm thấy sinh viên");
        }
    }
}
allStudent.push(new Student("S1", "Trần Văn A"));
allStudent.push(new Student("S2", "Lê Văn B"));
allStudent.push(new Student("S3", "Phạm Văn C"));
allStudent.push(new Student("S4", "Hoàng Văn D"));
allStudent.push(new Student("S5", "Nguyễn Thị E"));
allStudent.push(new Student("S6", "Nguyễn Văn F"));
const EngClass = new Classroom([]);
const ITClass = new Classroom([]);
EngClass.addStudentInClass("S1");
EngClass.addStudentInClass("S2");
EngClass.addStudentInClass("S3");
ITClass.addStudentInClass("S4");
ITClass.addStudentInClass("S5");
ITClass.addStudentInClass("S6");
console.log("Danh sách sinh viên trong EngClass:");
EngClass.showStudents();
console.log("Danh sách sinh viên trong ITClass:");
ITClass.showStudents();
export {};
//# sourceMappingURL=ex06.js.map