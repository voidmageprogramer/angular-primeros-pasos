import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';






import { Character } from '../interfaces/character.interface';


@Injectable({providedIn: 'root'})
export class DbzService {
public characters : Character[]=[
    {
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },
    {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
    {
    id: uuid(),
    name: 'Vegueta',
    power: 15000
  },

    {
    id: uuid(),
    name: 'chaos',
    power: 150
  },

    {
    id: uuid(),
    name: 'tamborin',
    power: 150
  }
  ];

  addCharacter(character:Character):void{

    const newCharacter:Character={
      id:uuid(),
      ...character

    }
    this.characters.push( newCharacter)

  }

  // onDeleteCharacter(index:number){
    // this.characters.splice(index,1)
  deletCharterById(id:string){
    this.characters = this.characters.filter(character => character.id !==id)

  }


}
