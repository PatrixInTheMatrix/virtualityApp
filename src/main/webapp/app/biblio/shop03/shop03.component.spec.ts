import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shop03Component } from './shop03.component';

describe('Shop03Component', () => {
  let component: Shop03Component;
  let fixture: ComponentFixture<Shop03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shop03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shop03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
