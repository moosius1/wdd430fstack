import { Component, Input, OnInit,EventEmitter } from '@angular/core';
import { Kit } from '../kit.model';

@Component({
  selector: 'app-kit-item',
  templateUrl: './kit-item.component.html',
  styleUrls: ['./kit-item.component.css']
})
export class KitItemComponent implements OnInit {
  collapsed = false;
  @Input() kits:Kit;

  constructor() { }

  ngOnInit(): void {
  }

}
