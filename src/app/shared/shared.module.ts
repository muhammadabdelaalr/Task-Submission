import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Material
import { MatIconModule } from '@angular/material/icon';

// bootstrap
import { AlertModule } from 'ngx-bootstrap/alert';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TranslateModule } from '@ngx-translate/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const componentsShared = [
  HeaderComponent,
  SidebarComponent,
]

const bootstrapComponents = [
  AlertModule,
  TooltipModule
]

const material = [
  MatIconModule,
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
