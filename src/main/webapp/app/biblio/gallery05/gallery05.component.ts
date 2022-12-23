import {Component, Input, OnInit} from '@angular/core';
import {WcmsService} from "../../services/wcms.service";
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'jhi-gallery05',
  templateUrl: './gallery05.component.html',
  styleUrls: ['./gallery05.component.scss']
})
export class Gallery05Component implements OnInit {
  @Input() pageName = 'pageOne';

  constructor(public wcmsService: WcmsService,
              public utilsService:UtilsService) {}

  ngOnInit(): void {
    console.warn('Gallery03Component');
  }

}

/*
$(document).ready(function(){

  $('.angle').click(function(e){
    $('.angle').toggleClass('arrow');
  });

  $('.angle').first().addClass('first');
  $('.angle').last().addClass('last');

});
 */

