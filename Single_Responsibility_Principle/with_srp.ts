class Car{
    speed : number;
    color : string;

    race(speed:number,color:string){
        this.speed=speed;
        this.color=color;
        console.log(`Zoom! The ${this.color} car is racing at ${this.speed} mph.`);
    }
}

class Doll{
    name : string;
    dressup(name:string){
        this.name=name;
        console.log(`${this.name} is having fun dressing up.`);
    }
}

class Blocks{
    shape:string;
    build(shape:string){
        this.shape=shape;
        console.log(`Let's use these ${this.shape} blocks to build a tower!`);
    }
}