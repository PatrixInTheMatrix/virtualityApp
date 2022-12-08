import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shop01Component } from './shop01.component';

describe('Shop01Component', () => {
  let component: Shop01Component;
  let fixture: ComponentFixture<Shop01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shop01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shop01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
