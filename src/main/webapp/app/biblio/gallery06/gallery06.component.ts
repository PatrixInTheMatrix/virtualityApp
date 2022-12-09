import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {WcmsService} from "../../services/wcms.service";

@Component({
  selector: 'jhi-gallery06',
  templateUrl: './gallery06.component.html',
  styleUrls: ['./gallery06.component.scss']
})
export class Gallery06Component implements OnInit {
  gPic: SafeResourceUrl | undefined;

  constructor(public wcmsService: WcmsService, public sanitizer:DomSanitizer) {}

  ngOnInit(): void {
    // this.gMap = this.sanitizer.bypassSecurityTrustResourceUrl(this.wcmsService.wcmsSelectedGMap.url);
    console.warn('Gallery06Component');
  }
}
