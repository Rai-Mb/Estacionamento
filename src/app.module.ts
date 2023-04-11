import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { EstacionamentoController } from './Controller/estacionamento.controller';
import { EstacionamentoService } from './Service/estacionamento.service';

@Module({
  imports: [],
  controllers: [EstacionamentoController],
  providers: [AppService, EstacionamentoService],
})
export class AppModule {}
