import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuote02Component } from './page-quote02.component';

describe('PageQuote02Component', () => {
  let component: PageQuote02Component;
  let fixture: ComponentFixture<PageQuote02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageQuote02Component],
    }).compileComponents();

    fixture = TestBed.createComponent(PageQuote02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
