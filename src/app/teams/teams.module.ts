import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Male1Component } from './male1/male1.component';
import { Male2Component } from './male2/male2.component';
import { Male3Component } from './male3/male3.component';
import { Female1Component } from './female1/female1.component';
import { Female2Component } from './female2/female2.component';
import { JuniorComponent } from './junior/junior.component';
import { TeenAComponent } from './teen-a/teen-a.component';
import { TeenEComponent } from './teen-e/teen-e.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Male1Component,
    Male2Component,
    Male3Component,
    Female1Component,
    Female2Component,
    JuniorComponent,
    TeenAComponent,
    TeenEComponent
  ]
})
export class TeamsModule { }
