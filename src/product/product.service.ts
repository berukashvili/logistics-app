import { Injectable } from '@nestjs/common';
import { ProductInterface } from './product.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './entity/product.entity';

@Injectable()
export class ProductService {
  private readonly products: ProductInterface[] = [
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
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  public async findAllProducts(): Promise<ProductEntity[]> {
    return await this.productRepository.find();
  }

  public async findProductById(id: number): Promise<ProductEntity> {
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
