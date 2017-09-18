class baseobject {
    width: number;
    length: number;

    constructor(width:number,length:number) {
        this.width = width;
        this.length = length;
    }

    calculatesize() {
        return this.width * this.length;
    }
}

class rectangle extends baseobject{
    constructor(width: number, length: number) {
        super(width,length);
    }


}

var rec = new rectangle(5, 2);
console.log(rec.calculatesize());