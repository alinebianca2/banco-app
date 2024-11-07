import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransacoesComponent } from './transacoes/transacoes.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TransacoesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TransacoesModule { }
