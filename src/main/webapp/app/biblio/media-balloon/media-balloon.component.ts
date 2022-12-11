import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-media-balloon',
  templateUrl: './media-balloon.component.html',
  styleUrls: ['./media-balloon.component.scss']
})
export class MediaBalloonComponent implements OnInit {
  showPackage = false;

  // constructor() { }

  ngOnInit(): void {
    console.warn('MediaBalloonComponent');
  }

  packageMe(): void {
    this.showPackage = !this.showPackage;
    document.getElementById('infoCircle')!.className = this.showPackage ? 'info-circle-hover' : 'info-circle';
  }

}
