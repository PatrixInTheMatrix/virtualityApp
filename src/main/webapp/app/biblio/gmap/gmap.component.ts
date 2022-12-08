import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {WcmsService} from "../../services/wcms.service";

@Component({
  selector: 'jhi-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.scss']
})
export class GmapComponent implements OnInit {
  gMap: SafeResourceUrl | undefined;

  constructor(public wcmsService: WcmsService, public sanitizer:DomSanitizer) {}

  ngOnInit(): void {
    this.gMap = this.sanitizer.bypassSecurityTrustResourceUrl(this.wcmsService.wcmsSelectedGMap.url);
  }
}
