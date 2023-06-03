import { Test, TestingModule } from '@nestjs/testing';
import { ProductsSaleController } from './products_sale.controller';

describe('ProductsSaleController', () => {
  let controller: ProductsSaleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsSaleController],
    }).compile();

    controller = module.get<ProductsSaleController>(ProductsSaleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
