abstract class Shape {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName(): void {
    console.log(this.name);
  }

  abstract getSize(): void;
}

class Rectangle extends Shape {
  width: number;
  height: number;
  constructor(name: string, width: number, height: number) {
    super(name);
    this.width = width;
    this.height = height;
  }

  getSize(): void {
    console.log(`Width: ${this.width}`);
    console.log(`Height: ${this.height}`);
  }
}

const rectangle1 = new Rectangle("Rectangle", 5, 7);
rectangle1.getName();
rectangle1.getSize();
