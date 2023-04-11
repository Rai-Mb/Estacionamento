import { Controller, Get } from '@nestjs/common';

@Controller('/estacionamento')
export class EstacionamentoController {
  @Get('/veiculos')
  findAll() {
    return [
      {
        id: 1,
        veiculo: 'Carro',
      },
      {
        id: 2,
        veiculo: 'Moto',
      },
    ];
  }
}
