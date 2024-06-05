import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name:string = 'ironman';
  public age: number = 45


  changeHeroe():void{
    this.name="capitan america"
  }

  changeAge():void{
    this.age=38
  }
  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroeDescription():string{

    return `${this.name}-${this.age}`
  }

  reset():void{

    this.name="ironman"
    this.age=45


    document.querySelector('h1')!.innerHTML='<h1>Desde Angular</h1>'
  }



}
