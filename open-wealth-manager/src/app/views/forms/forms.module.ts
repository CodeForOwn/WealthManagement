import { NgModule } from '@angular/core';
import { FormsRoutingModule } from  './forms-routing.module';

import { FormsComponent } from './forms.component';

@NgModule({
  imports: [
    FormsRoutingModule
  ],
  declarations: [
    FormsComponent
  ],
  providers: []
})
export class FormsModule { }
