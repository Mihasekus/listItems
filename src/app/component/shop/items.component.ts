
import {Component, OnInit} from '@angular/core';
import {MockItemsService} from '../../services/item/mock-items.service';

@Component({
  templateUrl: './items.component.html',
  styleUrls: ['/items.component.css']
})
export class ItemsComponent implements OnInit {

  amount = 1;
  totalAmount = 10;
  items = [];
  offset = 1;
  searchName = '';
  searchId = '';
  directons = [{
      key: 'name', value: null
    },
    {
      key: 'id', value: null
    }
  ];

  constructor( private itemsService: MockItemsService
  ) {
  }

  public ngOnInit(): void {
    this.loadData();
  }

  filter(param) {
    this.directons.find(x => x.key === param).value = !this.directons.find(x => x.key === param).value;
    const itemData = this.itemsService.filterItems(
      this.amount, this.offset, param, this.directons.find(x => x.key === param).value);
    this.items = itemData.items;
    this.totalAmount = itemData.totalAmount;
  }

  search(param, searchName) {

    const itemData = this.itemsService.searchItems(this.amount, this.offset, param, searchName);
    this.items = itemData.items;
    this.totalAmount = itemData.totalAmount;
  }

  loadData() {
    const itemData = this.itemsService.getItems(this.amount, this.offset);
    this.items = itemData.items;
    this.totalAmount = itemData.totalAmount;
  }
}
