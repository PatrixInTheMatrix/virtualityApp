import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shop02Component } from './shop02.component';

describe('Shop02Component', () => {
  let component: Shop02Component;
  let fixture: ComponentFixture<Shop02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shop02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shop02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
