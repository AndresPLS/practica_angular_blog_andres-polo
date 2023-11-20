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
        titulo: 'Emptiness',
        subtitulo: 'Un viaje sin color',
        autor: 'Nollan',
        imagen: 'http://actouno.com/contenido/contenidoSlide/actouno-Web-Tamandua-r-2_2.jpg',
        texto: 'Mientras que para la cultura occidental el sentimiento de vacío está ligado a emociones, tales como la ansiedad o la depresión; en algunas filosofías orientales como el budismo y el taoísmo, el vacío verdadero que no está ligado a las emociones (conocido como Śūnyatā en el budismo), aparece como un estado superior de realización el cual es un medio o camino que nos permite llegar a alcanzar la iluminación espiritual. En las religiones y filosofías orientales, al ser un estado de vacío verdadero (al no estar ligado a las emociones), no tiene el mismo sentido que en la cultura occidental; ya que de esta forma se trata de un estado superior del ser humano, y no de un estado emocional que provoca malestar a través de los sentimientos negativos.',
        fecha: '6/15/15',
        categoria: 'Island',
        ubicacion: 'Internet',
      },
      {

        id: 2,
        titulo: 'Panama city',
        subtitulo: 'Un viaje sin color',
        autor: 'Nollan',
        imagen: 'http://actouno.com/contenido/contenidoSlide/actouno-Web-Tamandua-r-2.jpg',
        texto: 'Mientras que para la cultura occidental el sentimiento de vacío está ligado a emociones, tales como la ansiedad o la depresión; en algunas filosofías orientales como el budismo y el taoísmo, el vacío verdadero que no está ligado a las emociones (conocido como Śūnyatā en el budismo), aparece como un estado superior de realización el cual es un medio o camino que nos permite llegar a alcanzar la iluminación espiritual. En las religiones y filosofías orientales, al ser un estado de vacío verdadero (al no estar ligado a las emociones), no tiene el mismo sentido que en la cultura occidental; ya que de esta forma se trata de un estado superior del ser humano, y no de un estado emocional que provoca malestar a través de los sentimientos negativos.',
        fecha: '6/15/15',
        categoria: 'City',
        ubicacion: 'Panamá, PNM',
      },
      {
        id: 3,
        titulo: 'Bachimaña',
        subtitulo: 'Un viaje sin color',
        autor: 'Nollan',
        imagen: 'https://refugiodelosibones.files.wordpress.com/2022/05/bachimana-atardecer-1.jpg',
        texto: 'Mientras que para la cultura occidental el sentimiento de vacío está ligado a emociones, tales como la ansiedad o la depresión; en algunas filosofías orientales como el budismo y el taoísmo, el vacío verdadero que no está ligado a las emociones (conocido como Śūnyatā en el budismo), aparece como un estado superior de realización el cual es un medio o camino que nos permite llegar a alcanzar la iluminación espiritual. En las religiones y filosofías orientales, al ser un estado de vacío verdadero (al no estar ligado a las emociones), no tiene el mismo sentido que en la cultura occidental; ya que de esta forma se trata de un estado superior del ser humano, y no de un estado emocional que provoca malestar a través de los sentimientos negativos.',
        fecha: '6/15/15',
        categoria: 'Mountain',
        ubicacion: 'Huesca, ESP',
      },
      {
        id: 4,
        titulo: 'Bocas del Toro',
        subtitulo: 'Un viaje sin color',
        autor: 'Ignacio Yúfera',
        imagen: 'http://actouno.com/contenido/contenidoSlide/actouno-Web_Tamandua_G2-5_4.jpg',
        texto: 'Mientras que para la cultura occidental el sentimiento de vacío está ligado a emociones, tales como la ansiedad o la depresión; en algunas filosofías orientales como el budismo y el taoísmo, el vacío verdadero que no está ligado a las emociones (conocido como Śūnyatā en el budismo), aparece como un estado superior de realización el cual es un medio o camino que nos permite llegar a alcanzar la iluminación espiritual. En las religiones y filosofías orientales, al ser un estado de vacío verdadero (al no estar ligado a las emociones), no tiene el mismo sentido que en la cultura occidental; ya que de esta forma se trata de un estado superior del ser humano, y no de un estado emocional que provoca malestar a través de los sentimientos negativos.',
        fecha: '6/15/15',
        categoria: 'Nature',
        ubicacion: 'Panamá, PNM',
      },
      {
        id: 5,
        titulo: 'Tamandua',
        subtitulo: 'Un viaje sin color',
        autor: 'Ignacio Nuevo & Andrés Polo',
        imagen: 'http://actouno.com/contenido/contenidoSlide/actouno-Web_Tamandua_G2-5_2.jpg',
        texto: 'Mientras que para la cultura occidental el sentimiento de vacío está ligado a emociones, tales como la ansiedad o la depresión; en algunas filosofías orientales como el budismo y el taoísmo, el vacío verdadero que no está ligado a las emociones (conocido como Śūnyatā en el budismo), aparece como un estado superior de realización el cual es un medio o camino que nos permite llegar a alcanzar la iluminación espiritual. En las religiones y filosofías orientales, al ser un estado de vacío verdadero (al no estar ligado a las emociones), no tiene el mismo sentido que en la cultura occidental; ya que de esta forma se trata de un estado superior del ser humano, y no de un estado emocional que provoca malestar a través de los sentimientos negativos.',
        fecha: '6/15/15',
        categoria: 'Nature',
        ubicacion: 'Panamá, PNM',
      },
      {
        id: 6,
        titulo: 'Darien',
        subtitulo: 'Un viaje sin color',
        autor: 'Ito Santamaría',
        imagen: 'http://actouno.com/contenido/contenidoSlide/actouno-Web_Tamandua_G2-5.jpg',
        texto: 'Mientras que para la cultura occidental el sentimiento de vacío está ligado a emociones, tales como la ansiedad o la depresión; en algunas filosofías orientales como el budismo y el taoísmo, el vacío verdadero que no está ligado a las emociones (conocido como Śūnyatā en el budismo), aparece como un estado superior de realización el cual es un medio o camino que nos permite llegar a alcanzar la iluminación espiritual. En las religiones y filosofías orientales, al ser un estado de vacío verdadero (al no estar ligado a las emociones), no tiene el mismo sentido que en la cultura occidental; ya que de esta forma se trata de un estado superior del ser humano, y no de un estado emocional que provoca malestar a través de los sentimientos negativos.',
        fecha: '6/15/15',
        categoria: 'Nature',
        ubicacion: 'Panamá, PNM',
      },
      {
        id: 7,
        titulo: 'emptiness',
        subtitulo: 'Un viaje sin color',
        autor: 'Nollan',
        imagen: 'https://i.postimg.cc/rpwVL7Nb/Secuencia-seleccion-00-06-05-19-Imagen-fija009.jpg',
        texto: 'Mientras que para la cultura occidental el sentimiento de vacío está ligado a emociones, tales como la ansiedad o la depresión; en algunas filosofías orientales como el budismo y el taoísmo, el vacío verdadero que no está ligado a las emociones (conocido como Śūnyatā en el budismo), aparece como un estado superior de realización el cual es un medio o camino que nos permite llegar a alcanzar la iluminación espiritual. En las religiones y filosofías orientales, al ser un estado de vacío verdadero (al no estar ligado a las emociones), no tiene el mismo sentido que en la cultura occidental; ya que de esta forma se trata de un estado superior del ser humano, y no de un estado emocional que provoca malestar a través de los sentimientos negativos.',
        fecha: '6/15/15',
        categoria: 'Abstrac',
        ubicacion: '0,0',
      },
      {
        id: 8,
        titulo: 'emptiness',
        subtitulo: 'Un viaje sin color',
        autor: 'Nollan',
        imagen: 'https://i.postimg.cc/cLmx2dww/C0115-MP4-02-43-43-20-Imagen-fija001.jpg',
        texto: 'Mientras que para la cultura occidental el sentimiento de vacío está ligado a emociones, tales como la ansiedad o la depresión; en algunas filosofías orientales como el budismo y el taoísmo, el vacío verdadero que no está ligado a las emociones (conocido como Śūnyatā en el budismo), aparece como un estado superior de realización el cual es un medio o camino que nos permite llegar a alcanzar la iluminación espiritual. En las religiones y filosofías orientales, al ser un estado de vacío verdadero (al no estar ligado a las emociones), no tiene el mismo sentido que en la cultura occidental; ya que de esta forma se trata de un estado superior del ser humano, y no de un estado emocional que provoca malestar a través de los sentimientos negativos.',
        fecha: '6/15/15',
        categoria: 'Abstrac',
        ubicacion: 'Internet',
      },
      {
        id: 9,
        titulo: 'Emptiness',
        subtitulo: 'Un viaje sin color',
        autor: 'Nollan',
        imagen: 'https://i.postimg.cc/KjYCHy7c/C0119-MP4-04-39-55-10-Imagen-fija001.jpg',
        texto: 'Mientras que para la cultura occidental el sentimiento de vacío está ligado a emociones, tales como la ansiedad o la depresión; en algunas filosofías orientales como el budismo y el taoísmo, el vacío verdadero que no está ligado a las emociones (conocido como Śūnyatā en el budismo), aparece como un estado superior de realización el cual es un medio o camino que nos permite llegar a alcanzar la iluminación espiritual. En las religiones y filosofías orientales, al ser un estado de vacío verdadero (al no estar ligado a las emociones), no tiene el mismo sentido que en la cultura occidental; ya que de esta forma se trata de un estado superior del ser humano, y no de un estado emocional que provoca malestar a través de los sentimientos negativos.',
        fecha: '6/15/15',
        categoria: 'Abstrac',
        ubicacion: 'Internet',
      },

    ]

    this.arrFiltradoCategorias = [];


    if (localStorage.getItem('array_newPost')) {
      this.arrPosts = JSON.parse(localStorage.getItem('array_newPost')!)
    }

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

  getById(postId: number) {

    return this.arrPosts.find(post => post.id === postId);
  }

  metodoCreate(elementoPost: IPost) {
    this.arrPosts.push(elementoPost);
    localStorage.setItem('array_newPost', JSON.stringify(this.arrPosts));
  }

}
