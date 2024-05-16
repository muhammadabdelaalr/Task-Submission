import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [TasksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([ { path: "", component: TasksComponent } ]),
  ],
  exports: [ TasksComponent ],
})
export class TasksModule {}
