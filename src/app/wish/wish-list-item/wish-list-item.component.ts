import { Component,Input,Output,OnInit,EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { EventService } from 'src/shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent {

  constructor(private events: EventService) { }

  @Input() wish!: WishItem;
  @Output() wishChange = new EventEmitter<WishItem>();

  get cssClasses(){ 
    return {'strikeout color-shift'  : this.wish.isComplete};
  }

  toggleFulfilled(){
    this.wish.isComplete = !this.wish.isComplete;
    this.wishChange.emit(this.wish);
  }

  removeWish(){
    this.events.emit('removeWish', this.wish);
  }
}
