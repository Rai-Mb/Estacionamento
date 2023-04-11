import { Injectable } from '@nestjs/common';

@Injectable()
export class EstacionamentoService {
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
}
