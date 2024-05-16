import { NgModule } from "@angular/core";
import { CalenderComponent } from "./calender.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [CalenderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([ { path: "", component: CalenderComponent } ]),
  ],
  exports: [ CalenderComponent ],
})
export class CalenderModule {}
