interface Workable {
    work(): void;
}

interface Eatable {
    eat(): void;
}

interface Sleepable {
    sleep(): void;
}

interface Codeable {
    code(): void;
}

class HumanWorker implements Workable, Eatable, Sleepable {
    work(): void {
        console.log("Human worker is working");
    }
    
    eat(): void {
        console.log("Human worker is eating");
    }
    
    sleep(): void {
        console.log("Human worker is sleeping");
    }
}

class RobotWorker implements Workable, Codeable {
    work(): void {
        console.log("Robot worker is working");
    }
    
    code(): void {
        console.log("Robot worker is coding");
    }
}