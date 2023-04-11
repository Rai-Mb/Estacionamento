import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { EstacionamentoController } from './controller/estacionamento.controller';
import { EstacionamentoService } from './service/estacionamento.service';
import { EstacionamentoModule } from './module/estacionamento.module';

@Module({
  imports: [EstacionamentoModule],
  controllers: [EstacionamentoController],
  providers: [AppService, EstacionamentoService],
})
export class AppModule {}
