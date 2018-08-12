import {Component} from '@angular/core';
import {Post} from '../Post';

import {HttpClient} from '@angular/common/http';
import {faSpaceShuttle} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../auth.service';

// @ts-ignore
@Component({
  selector: 'app-postview',
  templateUrl: './postview.component.html',
  styleUrls: ['./postview.component.scss'],
})
export class PostviewComponent {
  user: any;
  icon = faSpaceShuttle;
  constructor(private httpClient: HttpClient , private Auth: AuthService ) { }
  post1 = new Post(
    'What is Lorem Ipsum? ',
    'Lorem ipsum dolor sit amet, is simply dummy text of' +
    ' the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard ' +
    'dummy text ever since the 1500s,',
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
  saveSheet() {
  console.log(this.Auth.successMessage);
    this.httpClient
      .post('https://naslaroui.firebaseio.com/Posts.json', this.list)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

}
