import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KojoModule } from './kojo/kojo.module';
@Module({
  imports: [KojoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
