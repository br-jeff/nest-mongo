import { Module } from '@nestjs/common';

import { PersonController } from 'src/controllers/person.controller';
import { DatabaseModule } from './database.module';
import { PersonService } from 'src/services/person.service';
import { personModelProvider } from 'src/providers/person-model.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [PersonController],
  providers: [PersonService, ...personModelProvider],
})
export class PersonModule {}
