import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery05Component } from './gallery05.component';

describe('Gallery05Component', () => {
  let component: Gallery05Component;
  let fixture: ComponentFixture<Gallery05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gallery05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gallery05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
