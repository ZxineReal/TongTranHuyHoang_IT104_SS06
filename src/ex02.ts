abstract class Job {
  type: string;

  constructor(type: string) {
    this.type = type;
  }

  printType(): void {
    console.log(this.type);
  }

  abstract calculateSalary(): number;
}

class PartimeJob extends Job {
  workingHour: number;

  constructor(type: string, workingHour: number) {
    super(type);
    this.workingHour = workingHour;
  }

  calculateSalary(): number {
    return this.workingHour * 30000;
  }
}

class FulltimeJob extends Job {
  constructor(type: string) {
    super(type);
  }

  calculateSalary(): number {
    return 10000000;
  }
}

const intern = new PartimeJob("Partime", 180);
const employee = new FulltimeJob("FullTime");

console.log(`Intern Salary: ${intern.calculateSalary()}`);
console.log(`Employee Salary: ${employee.calculateSalary()}`);
