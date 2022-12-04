import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageImpressComponent } from './page-impress.component';

describe('PageImpressComponent', () => {
  let component: PageImpressComponent;
  let fixture: ComponentFixture<PageImpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageImpressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageImpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
