class Vehical {
    constructor(speed) {
        this.speed = speed;
    }
    getSpeed() {
        console.log(` Tốc độ hiện tại của phương tiện là: ${this.speed}`);
    }
    speedUp() {
        this.speed += 5;
        console.log("Đã tăng tốc độ lên +5");
    }
    slowDown() {
        if (this.speed >= 5) {
            this.speed -= 5;
            console.log("Đã giảm tốc độ đi -5");
        }
        else {
            console.log("Tốc độ quá thấp, không thể giảm tốc độ");
        }
    }
    stop() {
        this.speed = 0;
        console.log("Đã dừng phương tiện");
    }
}
const car = new Vehical(50);
car.speedUp();
car.getSpeed();
car.slowDown();
car.getSpeed();
car.stop();
car.getSpeed();
export {};
//# sourceMappingURL=ex05.js.map