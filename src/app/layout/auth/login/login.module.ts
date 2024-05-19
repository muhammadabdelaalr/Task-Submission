import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";

// Material
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { AlertModule } from 'ngx-bootstrap/alert';

const material = [
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  AlertModule
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    material,
    TranslateModule,
    RouterModule.forChild([{ path: "", component: LoginComponent }]),

    ReactiveFormsModule,
  ],
  exports: [
    LoginComponent,
    ReactiveFormsModule,
  ],
})
export class LoginModule { }
