import { Injectable } from '@nestjs/common';

@Injectable()
export class PageService {
  private readonly pages = [
    {
      id: '1',
      title: 'Home',
      content: 'Page 1 content',
    },
    {
      id: '2',
      title: 'Buy Products',
      content: 'გასაყიდი პროდუქტები',
    },
    {
      id: '3',
      title: 'Sales Products',
      content: 'გასაყიდი პროდუქტები აქციით',
    },
  ];

  public AllPages(): any {
    return this.pages;
  }

  public getPage(id: string): any {
    return this.pages.find((page) => {
      if (page.id === id) return page;
    });
  }


}
