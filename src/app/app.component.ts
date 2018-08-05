import { Component } from '@angular/core';
import {Post} from './Post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'open';
  post1 = new Post(
    'What is Lorem Ipsum? ',
    'Lorem ipsum dolor sit amet, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
    5, new Date());

  post2 = new Post(
    'Mon premier titre ',
    'Dans la jungle des animeaux ... lala llall lalalla lalla lal lal la ',
    3,
    new Date());
  post3 = new Post(
    'Mon premier titre ',
    'Lorem ipsum tetur ad, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
    -2,
    new Date());

  list: Array <Post> = [this.post1, this.post2, this.post3];

}
