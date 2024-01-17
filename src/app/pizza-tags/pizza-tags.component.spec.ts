import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaTagsComponent } from './pizza-tags.component';

describe('PizzaTagsComponent', () => {
  let component: PizzaTagsComponent;
  let fixture: ComponentFixture<PizzaTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
