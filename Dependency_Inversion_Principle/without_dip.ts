class Bulb {
  private isOn: boolean = false;

  turnOn(): void {
    this.isOn = true;
    console.log("Bulb is turned on");
  }

  turnOff(): void {
    this.isOn = false;
    console.log("Bulb is turned off");
  }
}

class Fan {
  private isOn: boolean = false;

  turnOn(): void {
    this.isOn = true;
    console.log("Fan is turned on");
  }

  turnOff(): void {
    this.isOn = false;
    console.log("Fan is turned off");
  }
}

class BulbSwitch {
  private bulb: Bulb;

  constructor() {
    this.bulb = new Bulb();
  }

  operate(): void {
    this.bulb.turnOn();
  }
}

class FanSwitch {
  private fan: Fan;

  constructor() {
    this.fan = new Fan();
  }

  operate(): void {
    this.fan.turnOn();
  }
}

// Usage
const bulbSwitch = new BulbSwitch();
bulbSwitch.operate();

const fanSwitch = new FanSwitch();
fanSwitch.operate();