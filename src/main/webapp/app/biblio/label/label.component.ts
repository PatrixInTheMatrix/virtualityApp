import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'jhi-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  @Input() text = '';
  @Input() design = '';

  // constructor() { }

  ngOnInit(): void {
    console.warn('LabelComponent');
  }

}
