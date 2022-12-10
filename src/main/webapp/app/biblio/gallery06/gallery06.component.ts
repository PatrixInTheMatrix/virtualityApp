import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {WcmsService} from "../../services/wcms.service";

@Component({
  selector: 'jhi-gallery06',
  templateUrl: './gallery06.component.html',
  styleUrls: ['./gallery06.component.scss']
})
export class Gallery06Component implements OnInit {
  @Input() pageName = 'pageOne';

  constructor(public wcmsService: WcmsService, public sanitizer:DomSanitizer) {}

  ngOnInit(): void {
    console.warn('Gallery06Component');
  }

  getTrustResourceUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
