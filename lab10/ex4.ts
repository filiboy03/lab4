class person{
    firstname: string;

    constructor() {
        this.firstname = "";
    }

    set firstName(value:string) {
        this.firstname = value.toUpperCase();
    }

    get firstName() {
        return this.firstname;
    }


}

let me = new person();
me.firstName = 'fili';
console.log(me.firstName);