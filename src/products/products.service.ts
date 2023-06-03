import { Injectable } from '@nestjs/common';
import { ProductsInterface } from './products.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Conditions, ProductsEntity } from './entity/products.entity';

@Injectable()
export class ProductsService {
  private readonly products: ProductsInterface[] = [];

  constructor(
    @InjectRepository(ProductsEntity)
    private readonly productRepository: Repository<ProductsEntity>,
  ) {}

  async findByCondition(condition: Conditions): Promise<ProductsEntity[]> {
    return this.productRepository.findBy({ condition });
  }

  public async findAllProducts(): Promise<ProductsEntity[]> {
    return await this.productRepository.find();
  }

  public async findProductById(id: number): Promise<ProductsEntity> {
    return await this.productRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  public AllProducts(): any {
    return this.products;
  }

  public getProduct(id: number): any {
    return this.products.find((product) => {
      if (product.id === id) return product;
    });
  }
}
