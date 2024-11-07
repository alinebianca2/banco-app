import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms'; 




@NgModule({
  declarations: [
    ClienteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule

  ]
})
export class ClienteModule { }
