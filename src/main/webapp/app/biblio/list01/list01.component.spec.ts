import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List01Component } from './list01.component';

describe('List01Component', () => {
  let component: List01Component;
  let fixture: ComponentFixture<List01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
