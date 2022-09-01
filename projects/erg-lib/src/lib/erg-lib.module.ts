import { NgModule } from '@angular/core';
import { ErgLibComponent } from './erg-lib.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    ErgLibComponent
  ],
  imports: [
    NgbModule
  ],
  exports: [
    ErgLibComponent
  ]
})
export class ErgLibModule { }
