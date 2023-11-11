import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';
import { NewComponent } from './pages/new/new.component';
import { DetallePostComponent } from './pages/detalle-post/detalle-post.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/posts' },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:postId', component: DetallePostComponent },
  { path: 'new-post', component: NewComponent },
  { path: '**', redirectTo: '/posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
