import {NgModule} from '@angular/core';
import {ItemsComponent} from './items.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
      ItemsComponent
  ],
  entryComponents: [],
  exports: [
  ],
  providers: [
  ]
})
export class ItemsModule {

}
