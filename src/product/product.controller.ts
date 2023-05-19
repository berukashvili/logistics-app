import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Get()
  getAllParoduct(): any {
    return this.service.AllProducts();
  }

  @Get(':id')
  getOneProduct(@Param('id') id: string): any {
    const result = this.service.getProduct(id);
    return result;
  }
}
