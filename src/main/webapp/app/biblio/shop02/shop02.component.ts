import {Component, Input, OnInit} from '@angular/core';
import {WcmsService} from "../../services/wcms.service";

@Component({
  selector: 'jhi-shop02',
  templateUrl: './shop02.component.html',
  styleUrls: ['./shop02.component.scss']
})
export class Shop02Component implements OnInit {
  @Input() pageName = 'pageOne';

  constructor(public wcmsService: WcmsService) {}

  ngOnInit(): void {
    console.warn('Shop02Component');
  }
}
