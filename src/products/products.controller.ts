import { Controller, Get, Put, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entity/products.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly service: ProductsService) {}

  @Put(':id/status/:status')
  async updateProductStatus(
    @Param('id') id: number,
    @Param('status') status: string,
  ) {
    return this.service.updateProductStatus(id, status);
  }

  @Get()
  getAllParoduct(): any {
    return this.service.findAllProducts();
  }

  @Get(':id')
  getOneProduct(@Param('id') id: string): any {
    const result = this.service.findProductById(+id);
    return result;
  }
}
