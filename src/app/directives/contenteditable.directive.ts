import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appContentEditable]'
})
export class ContentEditableDirective {

  constructor(private ngControl: NgControl) { }

  @Input('contentEditable')
  public set contentEditable(condition: boolean) {
    const action = condition ? 'contenteditable="true"' : '';
    this.ngControl.control[action]();
  }
}
