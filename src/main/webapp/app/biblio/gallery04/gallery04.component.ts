import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {WcmsService} from "../../services/wcms.service";

@Component({
  selector: 'jhi-gallery04',
  templateUrl: './gallery04.component.html',
  styleUrls: ['./gallery04.component.scss']
})
export class Gallery04Component implements OnInit {
  @Input() pageName = 'pageOne';

  constructor(public wcmsService: WcmsService, public sanitizer:DomSanitizer) {}

  ngOnInit(): void {
    console.warn('Gallery04Component');
  }

  getTrustResourceUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getBgUrl(url: string): string {
    const prefix = "url(";
    const suffix = ")";
    return prefix + url + suffix;
  }
}
