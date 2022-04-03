import { Component, OnInit } from '@angular/core';
import { Kit } from '../kit.model';
import { KitService } from '../kit.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-kit-edit',
  templateUrl: './kit-edit.component.html',
  styleUrls: ['./kit-edit.component.css']
})
export class KitEditComponent implements OnInit {

  originalKit: Kit;
  kit: Kit = null;
  groupKits: Kit[] = [];
  editMode: boolean = false;
  hasGroup: boolean = false;
  invalidGroupKit: boolean = false;

  constructor(
    private kitService: KitService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      this.editMode = false;
      let id = params['id'];
      if(id === null || id === undefined){
        return;
      }

      let kit = this.kitService.getKit(id);
      if(!kit) {
        return;
      }

      this.originalKit = kit;
      this.editMode = true;
      this.kit = JSON.parse(JSON.stringify(kit));

      
    });
  }

  onSubmit(form:NgForm) {
    let kit = new Kit(
      form.value.id,
      form.value.name,
      form.value.purchaseDate,
      form.value.score,
      form.value.imageUrl,
      form.value.buildStatus,
    );
    if (this.editMode === true) {
      this.kitService.updateKit(this.originalKit, kit);
    } else{
      this.kitService.addKit(kit);
    }

    this.router.navigate(['/kits']);
  }

  onCancel() {
    this.router.navigate(['/kits']);
  }

  isInvalidKit(newKit: Kit){
    if(!newKit) {
      return true;
    }

    if(newKit.id === this.kit.id) {
      return true;
    }

    for(let i = 0; i< this.groupKits.length; i++) {
      if(newKit.id === this.groupKits[i].id) {
        return true;
      }
    }

    return false;
  }

  addToGroup($event: any) {
    let selectedKit: Kit = $event.dragData;
    this.invalidGroupKit = this.isInvalidKit(selectedKit);
    if (this.invalidGroupKit) {
      return;
    }
    this.groupKits.push(selectedKit);
  }

  onRemoveItem(idx: number) {
    if (idx < 0 || idx > this.groupKits.length) {
      return;
    }

    this.groupKits.splice(idx, 1);
    this.invalidGroupKit = false;
  }

}
