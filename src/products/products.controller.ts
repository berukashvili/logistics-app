import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Conditions, ProductsEntity } from './entity/products.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly service: ProductsService) {}

  @Get(':condition')
  async getByCondition(
    @Param('condition') condition: Conditions,
  ): Promise<ProductsEntity[]> {
    return this.service.findByCondition(condition);
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
