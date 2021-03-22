import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective {

  constructor(private ngControl: NgControl) { }

  @Input('ischecked')
  public set contentEditable(condition: boolean) {
    const action = condition ? 'checked="true"' : '';
    this.ngControl.control[action]();
  }
}
