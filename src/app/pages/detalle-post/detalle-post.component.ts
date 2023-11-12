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

  post: IPost | undefined

  activatedRoute = inject(ActivatedRoute);
  postsServices = inject(PostsService);

  constructor() {
    this.post = {
      id: 0,
      titulo: '',
      subtitulo: '',
      autor: '',
      imagen: '',
      texto: '',
      fecha: '',
      categoria: '',
      ubicacion: '',
    }

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.post = this.postsServices.getById(parseInt(params['postId']));
    })

  }

}
