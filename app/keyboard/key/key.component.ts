import { Component,Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'key',
  templateUrl: './key.component.html'
})

export class KeyComponent {

  activated : boolean = false;
  @Input() value;

  constructor(){

  }

  activate(){
    this.activated = true;
  }

  deactivate(){
    this.activated = false;
  }

}
