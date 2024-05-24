class MenuItem{
    price : number;
    name : string;
    description : string;

    menuitem(price:number,name:string,description:string):void{
        this.price=price;
        this.name=name;
        this.description=description;
    }
    
    get_price():number{
        return this.price;
    }
}

class Bevarage extends MenuItem{
    price : number;
    name : string;
    description : string;

    menuitem(price:number,name:string,description:string):void{
        this.price=price;
        this.name=name;
        this.description=description;
    }
    
    get_price(discount:number):number{
        return this.price - (discount*0.01*this.price);
    }
}

let call_Item = new MenuItem();
let call_bevarage = new Bevarage();

call_Item.menuitem(100,"Bread","Wheat Flour Bread");

let price = call_Item.get_price();

console.log("Your Bill is :"+price);