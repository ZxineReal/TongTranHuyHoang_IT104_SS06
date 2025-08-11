// Phân biệt abstract method và method:
// Abstract method: chỉ có thể khai báo trong abstract class, không có phần thân và bắt buộc lớp con phải triển khai
// Method: có thể triển khai trong bất cứ class nào, có phần thân và không bắt buộc lớp con phải triển khai
// Ví dụ Abstract:
class Geometry {
    constructor(type) {
        this.type = type;
    }
    // Method:
    printType() {
        console.log(`Type: ${this.type}`);
    }
}
class Rectangle extends Geometry {
    constructor(type, width, height) {
        super(type);
        this.width = width;
        this.height = height;
    }
    // Abstract bắt buộc class con phải triển khai hàm
    getArea() {
        console.log(this.width * this.height);
    }
}
const rectangle1 = new Rectangle("rectangle", 5, 10);
console.log(rectangle1.getArea());
export {};
//# sourceMappingURL=ex03.js.map