import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {WcmsService} from "../../services/wcms.service";

@Component({
  selector: 'jhi-gallery01',
  templateUrl: './gallery01.component.html',
  styleUrls: ['./gallery01.component.scss']
})
export class Gallery01Component implements OnInit {
  gPic: SafeResourceUrl | undefined;

  constructor(public wcmsService: WcmsService, public sanitizer:DomSanitizer) {}

  ngOnInit(): void {
    // this.gMap = this.sanitizer.bypassSecurityTrustResourceUrl(this.wcmsService.wcmsSelectedGMap.url);
    console.warn('Gallery01Component');
  }
}
