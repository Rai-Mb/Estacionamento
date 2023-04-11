import { Controller, Get, Put } from '@nestjs/common';
import { EstacionamentoService } from 'src/Service/estacionamento.service';

@Controller('/estacionamento')
export class EstacionamentoController {
  constructor(private estacionamentoService: EstacionamentoService) {}

  @Get('/veiculos')
  findAll() {
    return this.estacionamentoService.findAll();
  }
}
