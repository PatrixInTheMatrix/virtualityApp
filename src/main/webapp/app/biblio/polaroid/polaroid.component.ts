import {Component, Input, OnInit} from '@angular/core';
import {WcmsService} from "../../services/wcms.service";
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'jhi-polaroid',
  templateUrl: './polaroid.component.html',
  styleUrls: ['./polaroid.component.scss']
})
export class PolaroidComponent implements OnInit {
  @Input() pageName = 'pageOne';

  constructor(public wcmsService: WcmsService,
              public utilsService:UtilsService) {}

  ngOnInit(): void {
    console.warn('PolaroidComponent');
  }

}
