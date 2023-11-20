import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  PostService = inject(PostsService);

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({

      titulo: new FormControl(),
      subtitulo: new FormControl(),


    })


  }

}
