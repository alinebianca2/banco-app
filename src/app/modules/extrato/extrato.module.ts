import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtratoComponent } from './extrato/extrato.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ExtratoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ExtratoModule { }
