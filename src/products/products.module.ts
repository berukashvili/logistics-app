import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/products.entity';
import { ProductsService } from './products.service';
import { Status } from './entity/status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Status])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
