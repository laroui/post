import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  static onSubmit(form: NgForm) {
    console.log(form.value);
  }
  constructor() { }

  ngOnInit() {
  }



}
