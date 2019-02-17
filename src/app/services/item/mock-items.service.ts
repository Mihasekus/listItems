import {Injectable} from '@angular/core';
import {Item} from '../../models/item';

@Injectable()
export class MockItemsService {

  private items: Item[];
  constructor() {
    this.initItems();
  }

  getItems(amount, offset) {
    const start = (+offset - 1) * +amount;
    const end = +start + +amount;
    const result = { items: [], totalAmount: null};
    result['items'] = this.items.slice( start , end);
    result['totalAmount'] = this.items.length;
    return result;
  }

  filterItems(amount, offset, field, direction) {
    const start = (+offset - 1) * +amount;
    const end = +start + +amount;
    const result = { items: [], totalAmount: null};
    result['items'] = this.items.sort(function(a, b) {
      if (a[field] < b[field]) { return direction ? -1 : 1; }
      if (a[field] > b[field]) { return direction ? 1 : -1; }
      return 0; }).slice( start , end);
    result['totalAmount'] = this.items.length;
    return result;

  }

  searchItems(amount, offset, field, value) {
    const start = (+offset - 1) * +amount;
    const end = +start + +amount;
    const result = { items: [], totalAmount: null};
    result['items'] = this.items.filter(x => x[field].includes(value)).slice( start , end);
    result['totalAmount'] = this.items.filter(x => x[field].includes(value)).length;
    return result;

  }

  saveItems(items) {
    this.items = items;
  }

  initItems() {
    this.items = [
      {
        id: '1',
        name: 'TTN1',
      },
      {
        id: '2',
        name: 'Gippo1',
      },
      {
        id: '3',
        name: 'Zorka1',
      },
      {
        id: '4',
        name: 'TTN2',
      },
      {
        id: '5',
        name: 'Gippo2',
      },
      {
        id: '6',
        name: 'Zorka2',
      },
      {
        id: '7',
        name: 'TTN3',
      },
      {
        id: '8',
        name: 'Gippo3',
      },
      {
        id: '9',
        name: 'Zorka3',
      },


    ];
  }

}
