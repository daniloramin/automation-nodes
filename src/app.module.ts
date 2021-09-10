import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { ViaCepService } from './viacep/viacep.service';
import { ViaCepController } from './viacep/viacep.controller';
import { HttpModule } from '@nestjs/axios';
import { CorreiosModule } from './correios/correios.module';

@Module({
  imports: [HttpModule, CorreiosModule],
  controllers: [UsersController, ViaCepController],
  providers: [UsersService, ViaCepService],
})
export class AppModule {}
