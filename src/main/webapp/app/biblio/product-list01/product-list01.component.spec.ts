import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductList01Component } from './product-list01.component';

describe('ProductList01Component', () => {
  let component: ProductList01Component;
  let fixture: ComponentFixture<ProductList01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductList01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductList01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
