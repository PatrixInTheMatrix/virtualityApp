import {Component, Input, OnInit} from '@angular/core';
import {WcmsService} from "../../services/wcms.service";

@Component({
  selector: 'jhi-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() pageName = 'pageOne';

  constructor(public wcmsService: WcmsService) {}

  ngOnInit(): void {
    console.warn('PageHeaderComponent');
  }
}
