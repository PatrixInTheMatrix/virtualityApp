import {Component, Input, OnInit} from '@angular/core';
import {WcmsService} from "../../services/wcms.service";

@Component({
  selector: 'jhi-shop01',
  templateUrl: './shop01.component.html',
  styleUrls: ['./shop01.component.scss']
})
export class Shop01Component implements OnInit {
  @Input() pageName = 'pageOne';

  constructor(public wcmsService: WcmsService) {}

  ngOnInit(): void {
    console.warn('Shop01Component');
  }
}
