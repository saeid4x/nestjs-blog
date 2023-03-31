import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm'

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type:'postgres',
      url:process.env.DATABASE_URL,
      username:process.env.USERNAME,
      password:process.env.PASSWORD,
      port:5432,
      database:process.env.USERNAME,
      host: process.env.HOST,
       
      
      autoLoadEntities:true,
      synchronize:true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
