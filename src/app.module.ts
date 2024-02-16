import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:mongodb123@localhost:27017'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
