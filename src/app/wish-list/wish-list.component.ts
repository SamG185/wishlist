import { Component, Input } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {

  @Input() wishes : WishItem[] = []

  onSubmit(){
    console.log("form submitted");
    this.wishes.push()
  }
  
}

