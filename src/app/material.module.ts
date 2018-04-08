import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatTableModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule
  ],
  exports: [
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule
  ],
  declarations: []
})

export class MaterialModule {
}
