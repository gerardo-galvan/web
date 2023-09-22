class Car {
    engine: string;

    constructor(engine: string) {
        this.engine = engine;

    }


    start() {
        alert('engine started ' + this.engine)
    }

    stop() {
        alert('engine stopped ' + this.engine)
    }

}



window.onload = function () {
    var car = new Car('v8');
    car.start();
    car.stop();

};



