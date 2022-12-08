import { Component, OnInit } from '@angular/core';
import {WcmsService} from "../../services/wcms.service";

@Component({
  selector: 'jhi-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {

  constructor(public wcmsService: WcmsService) {}

  ngOnInit(): void {
    console.warn('CommunicationComponent');
  }
}
