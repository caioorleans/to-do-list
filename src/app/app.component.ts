import { Component } from '@angular/core';
import { Item } from 'src/models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';

  allItems = [
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

  addItem(descricao:string){
    this.allItems.push({
      descricao,
      feito:false
    })
  }

  removeItem(item:Item){
    this.allItems.splice(this.allItems.indexOf(item),1);
  }
}
