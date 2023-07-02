import { Injectable } from '@nestjs/common';
import { ProductsInterface } from './products.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entity/products.entity';
import { Status } from './entity/status.entity';

@Injectable()
export class ProductsService {
  private readonly products: ProductsInterface[] = [];

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Status)
    private statusRepository: Repository<Status>,
  ) {}

  async updateProductStatus(
    productId: number,
    newStatus: string,
  ): Promise<Product> {
    const product = await this.productRepository.findOneOrFail({
      where: { id: productId },
    });
    product.status = newStatus;

    // Save the updated product status
    await this.productRepository.save(product);

    // Update the corresponding status count
    await this.updateStatusCount(newStatus);

    return product;
  }

  private async updateStatusCount(status: string): Promise<void> {
    const existingStatus = await this.statusRepository.findOne({
      where: { name: status },
    });

    if (existingStatus) {
      existingStatus.count++;
      await this.statusRepository.save(existingStatus);
    } else {
      const newStatus = this.statusRepository.create({
        name: status,
        count: 1,
      });
      await this.statusRepository.save(newStatus);
    }
  }

  public async findAllProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  public async findProductById(id: number): Promise<Product> {
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
