import {Injectable} from '@angular/core';
import {Code} from './models/Code';

@Injectable({
  providedIn: 'root'
})
export class GladosService {

  public codes = new Map<string, Code>([
    ['shuttle-map', new Code(1111, '/shuttle-map')],
    ['weapon-locker', new Code(4368, '/weapon-locker', 'Sie können sich über das PDA mit dem Waffenschrank verbinden.')],
    ['captains-log-book', new Code(9112, '/captains-log-book')],
    ['planet-information', new Code(9112, '/planet-information')]
  ]);

  constructor() {
  }
}
