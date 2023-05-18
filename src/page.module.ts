import { Module } from '@nestjs/common';
import { PageController } from './page.controller';

@Module({
  imports: [],
  controllers: [PageController],
  providers: [PageController],
})
export class PageModule {}
