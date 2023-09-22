class Drone {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static getCompany(){
        console.log('get company');
    }

    fly() {
        console.log('droen', this.id + ' is flying');
    }

}
Drone.maxHeight = 2000;

let drone = new Drone('a123', 'lalo');
let drone2 = new Drone('a333', 'test');


console.log('done' + drone.id + ' name:' + drone.name);

drone.fly();