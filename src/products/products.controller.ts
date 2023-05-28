import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('product')
export class ProductsController {
  constructor(private readonly service: ProductsService) {}

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
