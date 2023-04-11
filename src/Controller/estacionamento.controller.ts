/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { EstacionamentoService } from 'src/service/estacionamento.service';

@Controller('/estacionamento')
export class EstacionamentoController {
  constructor(private estacionamentoService: EstacionamentoService) {}

  @Get('/veiculos')
  findAll() {
    try {
      return this.estacionamentoService.findAll();
    } catch (error) {}
  }

  @Get('/veiculos/:id')
  findById(@Param() params) {
    try {
      return this.estacionamentoService.findById(+params.id);
    } catch (error) {}
  }

  @Post('/entrada')
  create(@Body() body: any) {
    try {
      return this.estacionamentoService.create(body);
    } catch (error) {
      
    }
  }
}
