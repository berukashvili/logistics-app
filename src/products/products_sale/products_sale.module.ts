import { Module } from '@nestjs/common';
import { ProductsSaleService } from './products_sale.service';
import { ProductsSaleController } from './products_sale.controller';

@Module({
  providers: [ProductsSaleService],
  controllers: [ProductsSaleController],
})
export class ProductsSaleModule {}
