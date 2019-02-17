import {Routes} from '@angular/router';
import {ItemsComponent} from './component/shop/items.component';

export const ROUTES: Routes = [
  {
    path: 'items', component: ItemsComponent
  },

  {path: '**', redirectTo: 'items'}
];
