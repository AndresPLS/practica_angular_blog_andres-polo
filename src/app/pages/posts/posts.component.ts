import { Component, inject } from '@angular/core';
import { IPost } from 'src/app/interfaces/post-interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  arrPosts: IPost[] = [];

  postsService = inject(PostsService);

  ngOnInit() {
    this.arrPosts = this.postsService.getAll();
  }

  onClickCategory(pCategory: string) {
    this.arrPosts = this.postsService.getByCategoria(pCategory);
  }

  ngAfterViewChecked() {
    this.arrPosts = this.postsService.getAll();
  }

}
