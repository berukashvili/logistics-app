import { Injectable } from '@nestjs/common';
import { ProductsInterface } from './products.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsEntity } from './entity/products.entity';

@Injectable()
export class ProductsService {
  private readonly products: ProductsInterface[] = [
    {
      id: 1,
      name: 'Buy Products',
      type: 'გასაყიდი პროდუქტები',
    },
    {
      id: 2,
      name: 'Sales Products',
      type: 'გასაყიდი პროდუქტები აქციით',
    },
  ];

  constructor(
    @InjectRepository(ProductsEntity)
    private readonly productRepository: Repository<ProductsEntity>,
  ) {}

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
