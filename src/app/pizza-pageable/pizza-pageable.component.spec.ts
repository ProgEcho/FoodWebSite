import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaPageableComponent } from './pizza-pageable.component';

describe('PizzaPageableComponent', () => {
  let component: PizzaPageableComponent;
  let fixture: ComponentFixture<PizzaPageableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaPageableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaPageableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
