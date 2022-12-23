import {Component, Input, OnInit} from '@angular/core';
import {WcmsService} from "../../services/wcms.service";
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'jhi-gallery02',
  templateUrl: './gallery02.component.html',
  styleUrls: ['./gallery02.component.scss']
})
export class Gallery02Component implements OnInit {
  @Input() pageName = 'pageOne';

  constructor(public wcmsService: WcmsService,
              public utilsService:UtilsService) {}

  ngOnInit(): void {
    console.warn('Gallery02Component');
  }

}
