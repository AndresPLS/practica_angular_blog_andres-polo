import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './pages/posts/posts.component';
import { NewComponent } from './pages/new/new.component';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NewComponent,
    ListaPostsComponent,
    FormularioComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
