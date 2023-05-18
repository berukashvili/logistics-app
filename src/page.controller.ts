import { Controller, Get, Param } from '@nestjs/common';
import { PageService } from './page.service';

//home/page

@Controller('page')
export class PageController {
  constructor(private readonly service: PageService) {}

  @Get()
  getAllPages(): any {
    return this.service.AllPages();
  }

  @Get(':id')
  getOnePage(@Param('id') id: string): any {
    const result = this.service.getPage((id));
    return result;
  }
}
