import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {WcmsService} from "../../services/wcms.service";

@Component({
  selector: 'jhi-gallery04',
  templateUrl: './gallery04.component.html',
  styleUrls: ['./gallery04.component.scss']
})
export class Gallery04Component implements OnInit {
  gPic: SafeResourceUrl | undefined;

  constructor(public wcmsService: WcmsService, public sanitizer:DomSanitizer) {}

  ngOnInit(): void {
    // this.gMap = this.sanitizer.bypassSecurityTrustResourceUrl(this.wcmsService.wcmsSelectedGMap.url);
    console.warn('Gallery04Component');
  }
}
