// Phân biệt abstract method và method:
// Abstract method: chỉ có thể khai báo trong abstract class, không có phần thân và bắt buộc lớp con phải triển khai
// Method: có thể triển khai trong bất cứ class nào, có phần thân và không bắt buộc lớp con phải triển khai

// Ví dụ Abstract:
abstract class Geometry {
  type: string;

  constructor(type: string) {
    this.type = type;
  }

  // Method:
  printType(): void {
    console.log(`Type: ${this.type}`);
  }

  // Abstract method:
  abstract getArea(): void;
}

class Rectangle extends Geometry {
  width: number;
  height: number;

  constructor(type: string, width: number, height: number) {
    super(type);
    this.width = width;
    this.height = height;
  }

  // Abstract bắt buộc class con phải triển khai hàm
  getArea(): void {
    console.log(this.width * this.height);
  }
}

const rectangle1 = new Rectangle("rectangle", 5, 10);
console.log(rectangle1.getArea());
