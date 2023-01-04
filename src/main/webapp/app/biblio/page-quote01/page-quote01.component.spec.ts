import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuote01Component } from './page-quote01.component';

describe('PageQuote01Component', () => {
  let component: PageQuote01Component;
  let fixture: ComponentFixture<PageQuote01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageQuote01Component],
    }).compileComponents();

    fixture = TestBed.createComponent(PageQuote01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
