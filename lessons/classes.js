// class Car {
//     constructor(options){
//         this.name = options.name
//         this.isAirBag = options.isAirBag
//         this.extraBalon = options.extraBalon
//     }

//     speed(){
//         console.log("100 km/s");
//     }
// }

// const BMW = new Car({
//     name: "BMW",
//     isAirBag: true,
//     extraBalon: 2
// }); 

/* class Car {

    static type = "CAR";

    constructor(options) {
        this.name = options.name;
        this.isAirBag = options.isAirBag;
        this.extraBalon = options.extraBalon;
    }

    speed() {
        return "100 km/h"
    }
}

const BMW = new Car({
    name: "BMW",
    isAirBag: true,
    extraBalon: 2
});

// Extending

class Bus extends Car{
    constructor(options){
        super(options);
        this.weight = options.weight
    }

    speed(){
        super.speed();
        return "50 km/h"
    }

    get extraBaillonInfo(){
        return this.extraBalon * 3;
    }

    set extraBaillonInfo(newValue){
        this.extraBalon = newValue;
    }
}

const MAN = new Bus({
    name: "MAN",
    isAirBag: false,
    extraBalon: 3,
    weight: "40 000 kg"
}); */

// Shapebuilder
/* class Component {
    constructor(selector){
        this.$el = document.querySelector(selector);
    }

    showElement(){
        this.$el.style.display = "block";
        return "Element showed"
    }

    hideElement(){
        this.$el.style.display = "none";
        return "Element hided"
    }
}

// Square

class Square extends Component {
    constructor(options){
        super(options.selector);
        this.$el.style.width = this.$el.style.height = options.size + "px",
        this.$el.style.background = options.color
    }
}

const square1 = new Square({
    selector: "#square",
    size: 100,
    color: "crimson"
})

const square2 = new Square({
    selector: "#square2",
    size: 100,
    color: "coral"
})

// Circle

class Circle extends Square{
    constructor(options){
        super(options);
        this.$el.style.borderRadius = "50%"
    }
}

const circle1 = new Circle({
    selector: "#circle",
    size: 100,
    color: "green"
})

const circle2 = new Circle({
    selector: "#circle2",
    size: 100,
    color: "yellow"
}) */

// Prototype
/* const car = {
    name: "BMW",
    color: "black",
    extraBaillon: 5,
    speed: function () {
        return "100 km/h"
    }
}

Object.prototype.sayHello = function(){
    return "Hello World !";
}

const bus = Object.create(car);
bus.name = "MAN";
bus.extraBaillon = 10;
bus.color = "white";

const str = new String("Hello string data type"); */