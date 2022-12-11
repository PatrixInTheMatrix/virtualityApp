import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaBalloonComponent } from './media-balloon.component';

describe('MediaBalloonComponent', () => {
  let component: MediaBalloonComponent;
  let fixture: ComponentFixture<MediaBalloonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaBalloonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaBalloonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
