import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {ItemsComponent} from './items.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ServicesModule} from '../../services/services.module';
import {By} from '@angular/platform-browser';

describe('ItemsComponent', () => {

  let fixture: ComponentFixture<ItemsComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItemsComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        ServicesModule
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(ItemsComponent);
      fixture.detectChanges();
      compiled = fixture.componentInstance;
    });
  }));

  it('should have a defined component', () => {
    expect(ItemsComponent).toBeDefined();
  });

  it('should have items', async() => {
    expect(compiled.items.length > 0).toBe(true);
  });

  it('should have table', async() => {
    const el = fixture.debugElement.query(By.css('table')).nativeElement;
    expect(el).toBeTruthy();
  });
});
