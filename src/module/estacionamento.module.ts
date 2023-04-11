import { Module } from '@nestjs/common';
import { EstacionamentoController } from 'src/controller/estacionamento.controller';
import { EstacionamentoService } from 'src/service/estacionamento.service';

@Module({
  controllers: [EstacionamentoController],
  providers: [EstacionamentoService],
})
export class EstacionamentoModule {}
