import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery02Component } from './gallery02.component';

describe('Gallery02Component', () => {
  let component: Gallery02Component;
  let fixture: ComponentFixture<Gallery02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gallery02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gallery02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
