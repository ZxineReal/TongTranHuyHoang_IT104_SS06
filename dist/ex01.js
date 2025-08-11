class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`Width: ${this.width}`);
        console.log(`Height: ${this.height}`);
    }
}
const rectangle1 = new Rectangle("Rectangle", 5, 7);
rectangle1.getName();
rectangle1.getSize();
export {};
//# sourceMappingURL=ex01.js.map