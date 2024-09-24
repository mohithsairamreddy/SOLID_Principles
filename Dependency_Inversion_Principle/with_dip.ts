interface Switchable {
  turnOn(): void;
  turnOff(): void;
}

class Bulb implements Switchable {
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

class Switch {
  private device: Switchable;

  constructor(device: Switchable) {
    this.device = device;
  }

  operate(): void {
    this.device.turnOn();
  }
}

const bulb = new Bulb();
const switchObject = new Switch(bulb);
switchObject.operate();

// We can now easily add other devices without changing the Switch class
class Fan implements Switchable {
  turnOn(): void {
    console.log("Fan is turned on");
  }

  turnOff(): void {
    console.log("Fan is turned off");
  }
}

const fan = new Fan();
const fanSwitch = new Switch(fan);
fanSwitch.operate();