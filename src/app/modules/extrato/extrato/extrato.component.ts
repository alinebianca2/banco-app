import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Transacao {
  tipo: string;
  valor: number;
  descricao: string;
  clienteId?: number;
}

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  clienteId!: number; 
  transacoes: Transacao[] = [
    { tipo: 'Débito', valor: 100, descricao: 'Compra de mercado', clienteId: 1 },
    { tipo: 'Crédito', valor: 150, descricao: 'Depósito', clienteId: 1 },
    { tipo: 'Débito', valor: 50, descricao: 'Compra de roupa', clienteId: 2 },
  ];

  transacoesFiltradas: Transacao[] = [];
  saldo: number = 0;  // Adicionando a propriedade saldo
  displayedColumns: string[] = ['tipo', 'valor', 'descricao'];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Pegando o clienteId da URL
    const clienteIdFromRoute = this.route.snapshot.paramMap.get('clientId');
  
    if (clienteIdFromRoute) {
      this.clienteId = +clienteIdFromRoute;  // Convertendo para número
      this.filtrarTransacoesPorClienteId();  // Filtrando as transações
      this.calcularSaldo();  // Calculando o saldo
    } else {
      console.error('clienteId não encontrado na URL!');
    }
  }

  // Função para filtrar transações com base no clienteId
  filtrarTransacoesPorClienteId(): void {
    this.transacoesFiltradas = this.transacoes.filter(transacao => transacao.clienteId === this.clienteId);
  }

  // Função para calcular o saldo
  calcularSaldo(): void {
    this.saldo = this.transacoesFiltradas.reduce((total, transacao) => {
      return transacao.tipo === 'Débito' ? total - transacao.valor : total + transacao.valor;
    }, 0);
  }
}
