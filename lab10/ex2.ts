class Car {
    name: string;
    acceleration: number;
    constructor(name: string) {
        this.name = name;
        this.acceleration = 0;
    }

    howk() {
        console.log( this.name + 'is saying: Tooooooot!');
    }

    accelerate(speed: number) {
        this.acceleration += speed;
    }

}

let c = new Car('Fili');
c.howk();
console.log(c.acceleration);
c.accelerate(100);
console.log(c.acceleration);