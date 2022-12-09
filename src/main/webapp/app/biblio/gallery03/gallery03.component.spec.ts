import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery03Component } from './gallery03.component';

describe('Gallery03Component', () => {
  let component: Gallery03Component;
  let fixture: ComponentFixture<Gallery03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gallery03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gallery03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
