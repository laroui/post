import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {PostListComponent} from './post-list/post-list.component';
import {PlItemComponent} from './pl-item/pl-item.component';
import {PostviewComponent} from './postview/postview.component';
import {RouterModule, Routes} from '@angular/router';
import {AddPostComponent} from './add-post/add-post.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';
import {AuthService} from './auth.service';
import {HttpClientModule} from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AuthComponent} from './auth/auth.component';
import {AngularFireDatabase} from 'angularfire2/database';
import {FormulairesModule} from './formulaires/formulaires.module';

const appRoutes: Routes = [
  { path: 'auth' , component: AuthComponent},
  {path: 'posts', component: PostviewComponent },
  { path: 'add', component: AddPostComponent },
  { path: '', component: PostviewComponent }
];

@NgModule({
  declarations: [
    AuthComponent,
    AppComponent,
    PostListComponent,
    PlItemComponent,
    PostviewComponent,
    AddPostComponent,
    AuthComponent
  ],
  imports: [
    FormulairesModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [

    AngularFireDatabase,
    AngularFireAuthModule,
    AngularFirestore,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
