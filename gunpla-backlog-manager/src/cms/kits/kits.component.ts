import { Component, OnInit } from '@angular/core';
import { Kit } from './kit.model';
import { KitService } from './kit.service';

@Component({
  selector: 'app-kits',
  templateUrl: './kits.component.html',
  styleUrls: ['./kits.component.css'],
  providers:[KitService]
})
export class KitsComponent implements OnInit {
  kits:Kit;
  selectedContent:Kit;

  constructor(private kitService: KitService) { }

  ngOnInit(): void {

    this.kitService.kitChangedEvent
      .subscribe(
        (kits:Kit[])=>{
          kits = kits;
        }
      )
  }

}
