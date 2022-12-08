import {Component, Input, OnInit} from '@angular/core';
import {WcmsService} from "../../services/wcms.service";

@Component({
  selector: 'jhi-shop04',
  templateUrl: './shop04.component.html',
  styleUrls: ['./shop04.component.scss']
})
export class Shop04Component implements OnInit {
  @Input() pageName = 'pageOne';

  constructor(public wcmsService: WcmsService) {}

  ngOnInit(): void {
    console.warn('Shop04Component');
  }
}
