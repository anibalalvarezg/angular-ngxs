import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Posts } from '../store/posts/posts.model';
import * as posts from '../store/posts/posts.actions';
@Component({
  selector: 'app-listar-posts',
  templateUrl: './listar-posts.component.html',
  styleUrls: ['./listar-posts.component.scss']
})
export class ListarPostsComponent implements OnInit {
  public postsList: Posts[] = [];
  public posts: Observable<Posts>;
  constructor(
    private store: Store
  ) {
    this.posts = this.store.select(state => {
      this.postsList = state.posts.posts;
      return state.posts.posts;
    }) || [];
  }
  ngOnInit() {
    this.posts.subscribe((posts: any) => {
      this.postsList = posts;
    });
  }
  public removePost(id: string) {
    this.store.dispatch(new posts.Post.Remove(id));
  }
}