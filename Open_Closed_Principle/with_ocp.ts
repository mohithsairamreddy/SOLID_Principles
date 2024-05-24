interface Blade{
    chop(): void;
}

class Normal_Blade implements Blade{
    chop(): void {
        console.log("Chopping with a normal blade");
    }
}


class Dough_Blade implements Blade{
    chop(): void {
        console.log("Chopping with a Dough blade");
      }
}

class Wisk implements Blade{
    chop(): void {
        console.log("Chopping with a wisk blade");
      }
}


class Mixer{
    private blade : Blade;

    constructor(blade:Blade){
        this.blade=blade;
    }

    mix(){
        console.log("Mixing...");
        this.blade.chop();
    }
}


let normalBlade = new Normal_Blade();


let normal = new Mixer(normalBlade);

normal.mix();