import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DirectivesModule } from 'src/app/directives/directives.module';
import { ToggleSwitchComponent } from './toggle-switch.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule,
  ],
  declarations: [
    ToggleSwitchComponent,
  ],
  exports: [
    ToggleSwitchComponent,
  ]
})
export class ToggleSwitchModule { }
