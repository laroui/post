import {Component, Input} from '@angular/core';
import {Post} from '../Post';
@Component({
  selector: 'app-pl-item',
  templateUrl: './pl-item.component.html',
  styleUrls: ['./pl-item.component.scss']
})
export class PlItemComponent  {

  constructor() { }

  @Input() item: Post;

  love(mode: number , obj: Post) {
    switch (mode) {
      case 1: {
        obj.loveIts += 1;
        break;
      }
      case 2: {
        obj.loveIts -= 1;
        break;
      }
      default: {
        obj.loveIts += 0;
        break;
      }
    }
  }
  getColor() {
    if (this.item.loveIts >= 5) {
      return 'lightgreen';
    } else if (this.item.loveIts <= 0) {
      return '#ff8585';
    }
  }
}
