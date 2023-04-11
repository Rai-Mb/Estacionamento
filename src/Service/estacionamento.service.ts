import { Injectable } from '@nestjs/common';

@Injectable()
export class EstacionamentoService {
  [x: string]: any;
  private estacionamento = [
    {
      id: 1,
      veiculo: 'Carro',
    },
    {
      id: 2,
      veiculo: 'Moto',
    },
    {
      id: 3,
      veiculo: 'Patinete Eletrico',
    },
  ];
  findAll() {
    return this.estacionamento;
  }

  findById(id: number) {
    return this.estacionamento.find((estacionameto) => estacionameto.id === id);
  }

  create(estacionamento: { id: number; veiculo: string }) {
    return this.estacionamento.push(estacionamento);
  }
}
