import {Component, Input, OnInit} from '@angular/core';
import {WcmsService} from "../../services/wcms.service";
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'jhi-gallery06',
  templateUrl: './gallery06.component.html',
  styleUrls: ['./gallery06.component.scss']
})
export class Gallery06Component implements OnInit {
  @Input() pageName = 'pageOne';

  constructor(public wcmsService: WcmsService,
              public utilsService:UtilsService) {}

  ngOnInit(): void {
    console.warn('Gallery06Component');
  }

}
