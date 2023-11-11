import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/post-interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPosts: IPost[];
  private arrFiltradoCategorias: IPost[];

  constructor() {

    this.arrPosts = [
      {
        id: 1,
        titulo: 'emptiness',
        autor: 'Nollan',
        imagen: 'https://cloudfront.slrlounge.com/wp-content/uploads/2019/10/Thomas-Joshua-Cooper-Emptiness-Landscapes-SLR-Lounge_0001.jpg',
        texto: 'Mientras que para la cultura occidental el sentimiento de vacío está ligado a emociones, tales como la ansiedad o la depresión; en algunas filosofías orientales como el budismo y el taoísmo, el vacío verdadero que no está ligado a las emociones (conocido como Śūnyatā en el budismo), aparece como un estado superior de realización el cual es un medio o camino que nos permite llegar a alcanzar la iluminación espiritual. En las religiones y filosofías orientales, al ser un estado de vacío verdadero (al no estar ligado a las emociones), no tiene el mismo sentido que en la cultura occidental; ya que de esta forma se trata de un estado superior del ser humano, y no de un estado emocional que provoca malestar a través de los sentimientos negativos.',
        fecha: '6/15/15',
        categoria: 'Abstrac',
        ubicacion: '0,0',
      },
      {
        id: 2,
        titulo: 'emptiness',
        autor: 'Nollan',
        imagen: 'http://actouno.com/contenido/contenidoSlide/actouno-Web_Tamandua_G2-5_2.jpg',
        texto: 'Mientras que para la cultura occidental el sentimiento de vacío está ligado a emociones, tales como la ansiedad o la depresión; en algunas filosofías orientales como el budismo y el taoísmo, el vacío verdadero que no está ligado a las emociones (conocido como Śūnyatā en el budismo), aparece como un estado superior de realización el cual es un medio o camino que nos permite llegar a alcanzar la iluminación espiritual. En las religiones y filosofías orientales, al ser un estado de vacío verdadero (al no estar ligado a las emociones), no tiene el mismo sentido que en la cultura occidental; ya que de esta forma se trata de un estado superior del ser humano, y no de un estado emocional que provoca malestar a través de los sentimientos negativos.',
        fecha: '6/15/15',
        categoria: 'Abstrac',
        ubicacion: 'Lanzarote, ESP',
      },
      {
        id: 2,
        titulo: 'emptiness',
        autor: 'Nollan',
        imagen: 'http://actouno.com/contenido/contenidoSlide/actouno-Web-Tamandua-r-2.jpg',
        texto: 'Mientras que para la cultura occidental el sentimiento de vacío está ligado a emociones, tales como la ansiedad o la depresión; en algunas filosofías orientales como el budismo y el taoísmo, el vacío verdadero que no está ligado a las emociones (conocido como Śūnyatā en el budismo), aparece como un estado superior de realización el cual es un medio o camino que nos permite llegar a alcanzar la iluminación espiritual. En las religiones y filosofías orientales, al ser un estado de vacío verdadero (al no estar ligado a las emociones), no tiene el mismo sentido que en la cultura occidental; ya que de esta forma se trata de un estado superior del ser humano, y no de un estado emocional que provoca malestar a través de los sentimientos negativos.',
        fecha: '6/15/15',
        categoria: 'Mountain',
        ubicacion: 'Huesca, ESP',
      },

    ]

    this.arrFiltradoCategorias = [];

    /*     
    if (localStorage.getItem('arr_posts')) {
      this.arrPosts = JSON.parse(localStorage.getItem('arr_post')!)
    }
     */
  }


  getAll(): IPost[] {
    return this.arrPosts;
  }

  createPost(pPost: IPost) {
    this.arrPosts.push(pPost);
  }

  getByCategoria(pCategoria: string) {
    this.arrFiltradoCategorias = [];

    for (let post of this.arrPosts) {
      if (post.categoria === pCategoria) {
        this.arrFiltradoCategorias.push(post)
      }
    }
    return this.arrFiltradoCategorias;

  }

}
