interface Geometry {
  calculateArea(): void;
  calculatePerimeter(): void;
}

class Circle implements Geometry {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): void {
    console.log(
      `Diện tích hình tròn: ${Math.PI * (this.radius * this.radius)}`
    );
  }

  calculatePerimeter(): void {
    console.log(`Chu vi hình tròn: ${2 * Math.PI * this.radius}`);
  }
}

class Rectangle implements Geometry {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): void {
    console.log(`Diện tích hình chữ nhật: ${this.width * this.height}`);
  }

  calculatePerimeter(): void {
    console.log(`Chu vi hình chữ nhật: ${(this.width + this.height) * 2}`);
  }
}

const circle1 = new Circle(10);
circle1.calculateArea();
circle1.calculatePerimeter();

const rectangle1 = new Rectangle(10, 5);
rectangle1.calculateArea();
rectangle1.calculatePerimeter();
