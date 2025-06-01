import { Component, OnInit, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgIfContext } from '@angular/common';
import { WishItem } from 'src/shared/models/wishItem';
import { EventService } from './../shared/services/EventService';
import { WishService } from './wish/wish.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent implements OnInit {
  filter: any;
  items : WishItem[] = [];
  constructor(events: EventService, private wishService: WishService){ 
    events.listen('removeWish', (wish: any) => {
      this.items.splice(this.items.indexOf(wish),1)
    })
  }
  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data: any) => {
      this.items=data;
    },
    (error: any) => {
      alert(error.message);
    }
  
  );
  }

  
}


 