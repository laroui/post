import {Component} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {faAtlas} from '@fortawesome/free-solid-svg-icons';
import {AuthService, User} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  user: User;
  title = 'open';
  connecection_icon = faAtlas;
  constructor(As: AuthService , Af: AngularFireAuth ) {
    this.user = Af.auth.currentUser;

  }
}
