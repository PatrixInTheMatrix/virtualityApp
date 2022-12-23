import { Component, OnInit } from '@angular/core';
import {WcmsService} from "../../services/wcms.service";
import {UtilsService} from "../../services/utils.service";

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

  constructor(public wcmsService: WcmsService,
              public utilsService:UtilsService) {}

  ngOnInit(): void {
    console.warn('SocialMediaComponent');
  }

}
