import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {WcmsService} from "../../services/wcms.service";

@Component({
  selector: 'jhi-gallery05',
  templateUrl: './gallery05.component.html',
  styleUrls: ['./gallery05.component.scss']
})
export class Gallery05Component implements OnInit {
  gPic: SafeResourceUrl | undefined;

  constructor(public wcmsService: WcmsService, public sanitizer:DomSanitizer) {}

  ngOnInit(): void {

    console.warn('Gallery05Component');

    /*
    $(document).ready(function(){

      $('.angle').click(function(e){
        $('.angle').toggleClass('arrow');
      });

      $('.angle').first().addClass('first');
      $('.angle').last().addClass('last');

    });
     */

  }

}
