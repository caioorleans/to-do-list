import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() item!: Item;
  @Output() remove = new EventEmitter<Item>();

}
