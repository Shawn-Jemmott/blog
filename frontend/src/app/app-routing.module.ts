import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListviewComponent } from './post-listview/post-listview.component';

const routes: Routes = [
  {path: "postdetail/:id", component: PostDetailsComponent},
  {path: '', component: PostListviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
