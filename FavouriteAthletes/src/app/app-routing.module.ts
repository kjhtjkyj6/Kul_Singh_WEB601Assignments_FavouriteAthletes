import { ModifyContentComponent } from './modify-content/modify-content.component';
import { ContentListComponent } from './content-list/content-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'',redirectTo:'contentList', pathMatch: 'full' },
  {path:'contentList', component:ContentListComponent },
  {path:'addContent', component: ModifyContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
