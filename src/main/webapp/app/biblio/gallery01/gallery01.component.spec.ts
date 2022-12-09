import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery01Component } from './gallery01.component';

describe('Gallery01Component', () => {
  let component: Gallery01Component;
  let fixture: ComponentFixture<Gallery01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gallery01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gallery01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
