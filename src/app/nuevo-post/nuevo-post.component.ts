import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import * as posts from '../store/posts/posts.actions';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.scss']
})
export class NuevoPostComponent implements OnInit {
  public text!: string;
  constructor(
    private store: Store
  ) { }
  ngOnInit() {
  }
  public addPost() {
    this.store.dispatch(new posts.Post.Add({ id: uuid(), text: this.text }));
    this.text = '';
  }
}