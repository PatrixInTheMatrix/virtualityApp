import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {WcmsService} from "../../services/wcms.service";
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'jhi-gallery04',
  templateUrl: './gallery04.component.html',
  styleUrls: ['./gallery04.component.scss']
})
export class Gallery04Component implements OnInit {

  @Input() pageName = 'pageOne';

  constructor(public wcmsService: WcmsService,
              public utilsService:UtilsService) {}

  ngOnInit(): void {
    console.warn('Gallery04Component');
  }

}
