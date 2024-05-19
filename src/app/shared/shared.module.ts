import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Angular Material
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';

// bootstrap
import { AlertModule } from 'ngx-bootstrap/alert';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TranslateModule } from '@ngx-translate/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { TaskComponent } from './components/task/task.component';

const componentsShared = [
  HeaderComponent,
  SidebarComponent,
  // TaskComponent
]

const bootstrapComponents = [
  AlertModule,
  TooltipModule
]

const material = [
  MatIconModule,
  // MatAutocompleteModule,
  // MatFormFieldModule,
  // MatInputModule,
  // MatButtonModule,
  // MatSelectModule,
  // MatCardModule,
  // MatButtonToggleModule,
  // MatBottomSheetModule,
  // MatDialogModule,
];

const forms = [
  ReactiveFormsModule,
  FormsModule,
  RouterModule
];

@NgModule({
  declarations: [componentsShared],
  imports: [
    CommonModule,
    material,
    forms,
    bootstrapComponents,
    TranslateModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    material,
    forms,
    bootstrapComponents,
    componentsShared,
    TranslateModule,
    RouterModule,
  ]
})
export class SharedModule { }
