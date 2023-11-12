import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/interfaces/post-interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-detalle-post',
  templateUrl: './detalle-post.component.html',
  styleUrls: ['./detalle-post.component.css']
})
export class DetallePostComponent {

  post!: IPost;

  activatedRoute = inject(ActivatedRoute);
  postsServices = inject(PostsService);

  ngOnInit() {



  }

}
