interface Worker {
    work(): void;
    eat(): void;
    sleep(): void;
    code(): void;
}

class HumanWorker implements Worker {
    work(): void {
        console.log("Human worker is working");
    }
    
    eat(): void {
        console.log("Human worker is eating");
    }
    
    sleep(): void {
        console.log("Human worker is sleeping");
    }
    
    code(): void {
        throw new Error("Human worker cannot code");
    }
}

class RobotWorker implements Worker {
    work(): void {
        console.log("Robot worker is working");
    }
    
    eat(): void {
        throw new Error("Robot worker does not eat");
    }
    
    sleep(): void {
        throw new Error("Robot worker does not sleep");
    }
    
    code(): void {
        console.log("Robot worker is coding");
    }
}