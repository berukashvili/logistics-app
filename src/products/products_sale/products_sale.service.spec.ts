import { Test, TestingModule } from '@nestjs/testing';
import { ProductsSaleService } from './products_sale.service';

describe('ProductsSaleService', () => {
  let service: ProductsSaleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsSaleService],
    }).compile();

    service = module.get<ProductsSaleService>(ProductsSaleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
