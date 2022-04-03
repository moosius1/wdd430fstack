import { Injectable } from '@angular/core';
import { Kit } from './kit.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KitService {
  kitSelectedEvent = new Subject<Kit[]>();
  kitChangedEvent = new Subject<Kit[]>();

  kits: Kit[]=[];
  maxKitID: number;

  constructor(private http:HttpClient) {
    
   }

   getKits(): Kit[] {
     this.http.get<Kit[]>('http://localhost:3000/kits')
     .subscribe(
       (kits: Kit[]) =>{
         this.kits = kits
         this.maxKitID = this.getMaxId();
         this.kits.sort();
         this.kitChangedEvent.next(this.kits.slice());
       },
       (error:any) =>{
         console.log(error.message);
       }
     )
     return this.kits.slice();
   }

   storeKits(){
     const json = JSON.stringify(this.kits);
     this.http.put<Kit[]>(
       'https://wdd430-d8661-default-rtdb.firebaseio.com/kits.json', json,
       {
         headers: new HttpHeaders({'Content-Type':'application/json'})
       }
     ).subscribe(() =>{
       this.kitChangedEvent.next(this.kits.slice());
     })
   }
   


   getMaxId(): number {
    let maxId =0;
    for(const kit of this.kits){
      const currentId = + kit.id;
  
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }


  getKit(id:string): Kit{
    for(let kit of this.kits){
      if (kit.id === id){
        return kit;
      }
    }
    return null;
  }


  addKit(newKit: Kit){
    if(!newKit){
      return;
    }

    newKit.id = '';

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    
    this.http.post<{message: string, kit: Kit}>('http://localhost:3000/kits',
    newKit,
    {headers: headers})
    .subscribe(
      (responseData) =>{
        console.log(responseData.message);

        this.kits.push(responseData.kit);
        this.kits.sort();
        this.kitChangedEvent.next(this.kits.slice());
      }
    );


  }

  updateKit(originalKit: Kit, newKit: Kit){
    if (originalKit === null || originalKit === undefined || newKit === null || newKit === undefined){
      return;
    }
    const pos = this.kits.indexOf(originalKit);
    if(pos<0) {
      return;
    }
    
    newKit.id = originalKit.id;
    originalKit.name = newKit.name;
    originalKit.buildStatus = newKit.buildStatus;
    originalKit.imageUrl = newKit.imageUrl;
    originalKit.purchaseDate = newKit.purchaseDate;
    originalKit.score = newKit.score;
    const kitListClone = this.kits.slice();
    this.storeKits()


  }

  deleteKit(kit: Kit){
    if(!kit) {
      return;

    }
    const pos = this.kits.indexOf(kit);
    if(pos<0) {
      return;
    }

    this.http.delete('http://localhost:3000/kits/' + kit.id)
    .subscribe(
      (response: Response) => {
        this.kits.splice(pos,1);
        this.kits.sort();
        this.kitChangedEvent.next(this.kits.slice());
      }
    );
  }



}
