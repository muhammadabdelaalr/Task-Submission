import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MatIconModule } from "@angular/material/icon";
import { TranslateModule } from "@ngx-translate/core";

import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { TaskComponent } from './../../shared/components/task/task.component';
import { AddEditTaskComponent } from "src/app/shared/components/add-edit-task/add-edit-task.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from "@angular/material/dialog";


@NgModule({
  declarations: [TasksComponent, TaskComponent, AddEditTaskComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forChild([ { path: "", component: TasksComponent } ]),
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    TooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,

  ],
  exports: [ TasksComponent ],
})
export class TasksModule {}
