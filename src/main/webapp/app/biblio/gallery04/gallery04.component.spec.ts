import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery04Component } from './gallery04.component';

describe('Gallery04Component', () => {
  let component: Gallery04Component;
  let fixture: ComponentFixture<Gallery04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gallery04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gallery04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
