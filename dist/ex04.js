class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        console.log(`Diện tích hình tròn: ${Math.PI * (this.radius * this.radius)}`);
    }
    calculatePerimeter() {
        console.log(`Chu vi hình tròn: ${2 * Math.PI * this.radius}`);
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        console.log(`Diện tích hình chữ nhật: ${this.width * this.height}`);
    }
    calculatePerimeter() {
        console.log(`Chu vi hình chữ nhật: ${(this.width + this.height) * 2}`);
    }
}
const circle1 = new Circle(10);
circle1.calculateArea();
circle1.calculatePerimeter();
const rectangle1 = new Rectangle(10, 5);
rectangle1.calculateArea();
rectangle1.calculatePerimeter();
export {};
//# sourceMappingURL=ex04.js.map