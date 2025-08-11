class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(this.type);
    }
}
class PartimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return this.workingHour * 30000;
    }
}
class FulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        return 10000000;
    }
}
const intern = new PartimeJob("Partime", 180);
const employee = new FulltimeJob("FullTime");
console.log(`Intern Salary: ${intern.calculateSalary()}`);
console.log(`Employee Salary: ${employee.calculateSalary()}`);
export {};
//# sourceMappingURL=ex02.js.map