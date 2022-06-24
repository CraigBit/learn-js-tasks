import { Clock } from './clock.js';

class ExtendedClock extends Clock {
  constructor({ template }, precision) {
    super({ template });
    this.precision = precision;
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision || 1000);
  }
}

let extendedClock = new ExtendedClock({ template: 'h:m:s' }, 2000);
extendedClock.start();
