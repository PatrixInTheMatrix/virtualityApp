import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {WcmsService} from "../../services/wcms.service";

@Component({
  selector: 'jhi-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})

/*
Die Top 10 Social Media Plattformen für Unternehmen

    Facebook
    Instagram
    Twitter
    Tik Tok
    Snapchat
    LinkedIn
    Pinterest
    Youtube
    Vimeo
    Reddit

 */

export class SocialMediaComponent implements OnInit {

  constructor(public wcmsService: WcmsService, public sanitizer:DomSanitizer) {}

  ngOnInit(): void {
    console.warn('SocialMediaComponent');
  }

  getTrustResourceUrl(url: string) : SafeResourceUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
