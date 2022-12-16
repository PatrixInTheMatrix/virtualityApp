import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'jhi-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.scss']
})
export class SeparatorComponent implements OnInit {
  @Input() factor = 1;

  // constructor() { }

  ngOnInit(): void {
    console.warn('SeparatorComponent');
  }

}
