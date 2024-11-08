import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransacoesComponent } from './transacoes/transacoes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    TransacoesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule

  ]
})
export class TransacoesModule { }
