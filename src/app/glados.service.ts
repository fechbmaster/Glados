import {Injectable} from '@angular/core';
import {Code} from './models/Code';

@Injectable({
  providedIn: 'root'
})
export class GladosService {

  public default = true;
  public science = false;
  public shuttle = false;
  public complete = false;

  public codes = new Map<string, Code>([
    ['shuttle-map', new Code(1111, '/shuttle-map')],
    ['weapon-locker', new Code(4368, '/weapon-locker', 'Sie können sich über das PDA mit dem Waffenschrank verbinden.')],
    ['captains-log-book', new Code(9112, '/captains-log-book')],
    ['planet-information', new Code(2348, '/planet-information')],
    ['surrounding-information', new Code(6124, '/surrounding-information')],
    ['science-map', new Code(8935, '/science-map')],
    ['science-log', new Code(1356, '/science-log')],
    ['map-page', new Code(3215, '/map-page')]
  ]);

  constructor() {
  }

  public setDefaultMap() {
    this.resetMap();
    this.default = true;
  }

  public setScienceMap() {
    this.resetMap();
    this.science = true;
  }

  public setShuttleMap() {
    this.resetMap();
    this.shuttle = true;
  }

  public setCompleteMap() {
    this.resetMap();
    this.complete = true;
  }

  private resetMap() {
    this.default = false;
    this.science = false;
    this.shuttle = false;
    this.complete = false;
  }
}
