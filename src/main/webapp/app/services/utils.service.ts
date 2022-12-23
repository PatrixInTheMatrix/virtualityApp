import { Injectable } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {WcmsService} from "./wcms.service";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(public wcmsService: WcmsService, public sanitizer:DomSanitizer) {}

  getTrustResourceUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getBgUrl(url: string): string {
    const prefix = "url(";
    const suffix = ")";
    return prefix + url + suffix;
  }
}
