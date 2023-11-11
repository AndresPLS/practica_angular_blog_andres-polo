import { Component, Input, inject } from '@angular/core';
import { IPost } from 'src/app/interfaces/post-interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent {

  postsService = inject(PostsService);

  @Input() onePost: IPost;


  constructor() {
    this.onePost = {
      id: 0,
      titulo: '',
      autor: '',
      imagen: '',
      texto: '',
      fecha: '',
      categoria: '',
      ubicacion: '',
    }

  }

}
