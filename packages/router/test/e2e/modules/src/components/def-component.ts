import { AppState } from './../app-state';
import { customElement } from '../../../../../../runtime';
import * as template from './def-component.html';
import { inject } from '../../../../../../kernel';

@inject(AppState)
@customElement({ name: 'def-component', template })
export class DefComponent {
  name = 'def-component';
  blockLeave = false;

  counter = 0;

  constructor(private appState: AppState) { }

  bound(...rest) {
    console.log(this.name, 'bound', this.appState, rest);
  }
  attached(...rest) {
    console.log(this.name, 'attached', rest);
  }
  canEnter(instruction, previousInstruction) {
    console.log(this.name, 'canEnter', ++this.counter, instruction, previousInstruction);
    return !this.appState.blockEnterAbc;
  }
  enter(instruction, previousInstruction) {
    console.log(this.name, 'enter', ++this.counter, instruction, previousInstruction);
    return true;
  }
  canLeave(previousInstruction, instruction) {
    console.log(this.name, 'canLeave', ++this.counter, previousInstruction, instruction);
    return !this.blockLeave;
  }
  leave(previousInstruction, instruction) {
    console.log(this.name, 'leave', ++this.counter, previousInstruction, instruction);
    return true;
  }
}
