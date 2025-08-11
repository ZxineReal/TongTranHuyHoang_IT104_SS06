interface changeSpeed {
  speedUp(): void;
  slowDown(): void;
  stop(): void;
}

class Vehical implements changeSpeed {
  private speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  getSpeed(): void {
    console.log(` Tốc độ hiện tại của phương tiện là: ${this.speed}`);
  }

  speedUp(): void {
    this.speed += 5;
    console.log("Đã tăng tốc độ lên +5");
  }

  slowDown(): void {
    if (this.speed >= 5) {
      this.speed -= 5;
      console.log("Đã giảm tốc độ đi -5");
    } else {
      console.log("Tốc độ quá thấp, không thể giảm tốc độ");
    }
  }

  stop(): void {
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
