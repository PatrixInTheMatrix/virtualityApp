import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery06Component } from './gallery06.component';

describe('Gallery06Component', () => {
  let component: Gallery06Component;
  let fixture: ComponentFixture<Gallery06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gallery06Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gallery06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
