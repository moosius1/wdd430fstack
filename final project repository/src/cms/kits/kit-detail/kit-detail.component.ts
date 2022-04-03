import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WindRefService } from 'src/cms/wind-ref.service';
import { Kit } from '../kit.model';
import { KitService } from '../kit.service';

@Component({
  selector: 'app-kit-detail',
  templateUrl: './kit-detail.component.html',
  styleUrls: ['./kit-detail.component.css']
})
export class KitDetailComponent implements OnInit {

  Kit: Kit;
  nativeWindow:any;
  id:string;

  constructor(private KitService: KitService,
              private windowRefService: WindRefService,
              private router: Router,
              private route: ActivatedRoute,
              ) {this.nativeWindow = windowRefService.getNativeWindow() };

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params)=>{
        this.id = params ['id'];
        this.Kit = this.KitService.getKit(this.id);
      }
    );
    this.nativeWindow = this.windowRefService.getNativeWindow();
  }

  onEditKit(){
    this.router.navigate(['edit'], {relativeTo:this.route});
  }

  onCancel() {
    this.router.navigate(['/kits']);
  }

  onDelete(){
    this.KitService.deleteKit(this.Kit);
    this.router.navigate(['...']);
  }

}
