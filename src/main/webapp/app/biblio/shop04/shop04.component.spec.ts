import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shop04Component } from './shop04.component';

describe('Shop04Component', () => {
  let component: Shop04Component;
  let fixture: ComponentFixture<Shop04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shop04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shop04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
