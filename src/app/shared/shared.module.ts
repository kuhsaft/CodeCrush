import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    Title
  ],
  exports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {}
