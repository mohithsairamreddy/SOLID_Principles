class Toy{
    type : string;
    state: string;
    constructor(type:any){
        this.type=type;
        this.state="ready"
    }
    play():void{
        if(this.type=="car"){
            this.state="racing";
            console.log("This is a racing car");
        }
        else if(this.type="doll"){
            this.state="dressing";
            console.log("Doll is getting dressed up");
        }
        else if(this.type=="blocks"){
            this.state="building";
            console.log("I would use this block to build my apartment");
        }
        else{
            console.log("Mummy I am unable to find my toys");
        }
    }
}

let call = new Toy("car");
call.play()