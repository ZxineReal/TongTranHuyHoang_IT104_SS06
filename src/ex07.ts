class Student {
  private id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  getID(): string {
    return this.id;
  }

  setName(name: string): void {
    this.name = name;
  }
}

const allStudent: Student[] = [];

class Classroom {
  students: Student[];

  constructor(students: Student[]) {
    this.students = students;
  }

  showStudents(): void {
    this.students.forEach((student) => {
      console.log(`ID: ${student.getID()}, Name: ${student.name}`);
    });
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  filterStudent(id: string): Student[] {
    return this.students.filter((student) => student.getID() === id);
  }

  addStudentInClass(id: string): void {
    const index = allStudent.findIndex((student) => student.getID() === id);
    if (index !== -1) {
      this.students.push(allStudent[index]);
      allStudent.splice(index, 1);
    } else {
      console.log("Không tìm thấy sinh viên");
    }
  }

  removeStudent(id: string): void {
    const index = this.students.findIndex((student) => student.getID() === id);
    if (index !== -1) {
      allStudent.push(this.students[index]);
      this.students.splice(index, 1);
    } else {
      console.log("Không tìm thấy sinh viên");
    }
  }

  editStudent(id: string, newName: string): void {
    const std = this.students.find((student) => student.getID() === id);
    if (std !== -1) {
      std?.setName(newName);
    } else {
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

EngClass.removeStudent("S1");
ITClass.editStudent("S4", "Đinh Văn P");

console.log("Danh sách sinh viên trong EngClass:");
EngClass.showStudents();

console.log("Danh sách sinh viên trong ITClass:");
ITClass.showStudents();
