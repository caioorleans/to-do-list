import { Component } from '@angular/core';
import { Item } from 'src/models/item';
import { StorageService } from './services/storage.service';

const todoListStorageKey = 'Todo_List';

const defaultToDoList = [
  {
    descricao:"Comer salada",
    feito:true
  },
  {
    descricao:"Ir para a academia",
    feito:false
  },
  {
    descricao:"Estudar angular",
    feito:true
  },
  {
    descricao:"Dormir cedo",
    feito:false
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';

  allItems: Item[];

  constructor(private storageService: StorageService){
    this.allItems = storageService.getData(todoListStorageKey) || defaultToDoList;
  }

  saveList(){
    this.storageService.setData(todoListStorageKey, this.allItems);
  }

  addItem(descricao:string){
    this.allItems.push({
      descricao,
      feito:false
    });
    this.saveList();
  }

  removeItem(item:Item){
    this.allItems.splice(this.allItems.indexOf(item),1);
    this.saveList();
  }
}
