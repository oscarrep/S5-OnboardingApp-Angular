import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  constructor() { }

  showPhrase(text:string){
    alert(text)
  }
}
