interface Geometry {
  calculateArea(): number;
  calculatePerimeter(): number;
}

class Circle implements Geometry {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * (this.radius * this.radius);
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Geometry {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return (this.width + this.height) * 2;
  }
}

const circle1 = new Circle(10);
console.log(` Diện tích hình tròn là: ${circle1.calculateArea()}`);
console.log(` Chu vi hình tròn là: ${circle1.calculatePerimeter()}`);

const rectangle1 = new Rectangle(10, 5);
console.log(` Diện tích hình chữ nhật là: ${rectangle1.calculateArea()}`);
console.log(` Chu vi hình chữ nhật là: ${rectangle1.calculatePerimeter()}`);
