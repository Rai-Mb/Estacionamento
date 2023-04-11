import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { EstacionamentoController } from './estacionamento/estacionamento.controller';
import { EstacionamentoService } from './estacionamento/estacionamento.service';

@Module({
  imports: [],
  controllers: [EstacionamentoController],
  providers: [AppService, EstacionamentoService],
})
export class AppModule {}
