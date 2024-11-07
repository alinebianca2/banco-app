import { Component } from '@angular/core';
import { Cliente } from '../client.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {

  clienteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.clienteForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      idade: ['', [Validators.required, Validators.min(18)]],
      email: ['', [Validators.required, Validators.email]],
      numeroConta: ['', [Validators.required, Validators.pattern(/^\d+$/)]]
    });
  }

  isFormValid(): boolean {
    return this.clienteForm.valid;
  }

  onSubmit() {
    if (this.clienteForm.valid) {
      console.log('Cliente cadastrado:', this.clienteForm.value);
      this.clienteForm.reset(); 
    } else {
      console.log('Por favor, preencha todos os campos corretamente.');
    }
  }
}


