import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Kit } from '../kit.model';
import { KitService } from '../kit.service';

@Component({
  selector: 'app-kit-list',
  templateUrl: './kit-list.component.html',
  styleUrls: ['./kit-list.component.css']
})
export class KitListComponent implements OnInit {

  private subscription: Subscription;
  term: string;

  collapsed=false;

  kits: Kit[] = [];

    
  constructor(private KitService: KitService) { }


  search(value: string) {
    this.term = value;
  }

  ngOnInit() {

    this.kits = this.KitService.getKits();
    this.subscription = this.KitService.kitChangedEvent
    .subscribe(
      (kits: Kit[]) =>{
        this.kits = kits;
      }
    )

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleclass() {
    var element = document.getElementById("itemToggle");
    element.classList.toggle("active");
  }

  toggleclass2() {
    var element = document.getElementById("itemToggle");
    element.classList.toggle("inactive");
  }

}
