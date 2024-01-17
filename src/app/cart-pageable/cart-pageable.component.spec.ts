import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPageableComponent } from './cart-pageable.component';

describe('CartPageableComponent', () => {
  let component: CartPageableComponent;
  let fixture: ComponentFixture<CartPageableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPageableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartPageableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
