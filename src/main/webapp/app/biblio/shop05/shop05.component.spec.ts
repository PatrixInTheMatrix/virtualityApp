import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shop05Component } from './shop05.component';

describe('Shop05Component', () => {
  let component: Shop05Component;
  let fixture: ComponentFixture<Shop05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shop05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shop05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
