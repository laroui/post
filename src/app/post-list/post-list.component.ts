import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})


export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Input() tableau: Array <Post>;
}
