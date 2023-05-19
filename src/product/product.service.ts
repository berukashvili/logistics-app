import { Injectable } from '@nestjs/common';
import { ProductInterface } from './product.interface';

@Injectable()
export class ProductService {
  private readonly products: ProductInterface[] = [
    {
      id: 1,
      name: 'Home',
      type: 'Page 1 content',
    },
    {
      id: 2,
      name: 'Buy Products',
      type: 'გასაყიდი პროდუქტები',
    },
    {
      id: 3,
      name: 'Sales Products',
      type: 'გასაყიდი პროდუქტები აქციით',
    },
  ];

  public AllProducts(): any {
    return this.products;
  }

  public getProduct(id: string): any {
    return this.products.find((product) => {
      if (product.id === +id) return product;
    });
  }
}
