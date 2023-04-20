import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
 
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';

const routes: Routes = [
   {path:'', 
   redirectTo:'list' ,
    pathMatch :'full'},

  {path:'list' ,
   component :ContentListComponent},
   { path: 'content-detail', loadChildren: () => import('./content-detail/content-detail.module').then(m => m.ContentDetailModule) },
  { path: '**', component: PagenotFoundComponent},
   {
		path: 'list',
		component: ContentListComponent,
	},
	{ path: 'list/:id', component: ContentListComponent },
	{ path: '**', component: PagenotFoundComponent },

  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
