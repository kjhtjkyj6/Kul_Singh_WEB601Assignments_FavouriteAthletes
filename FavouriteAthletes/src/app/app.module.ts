import { leadingComment } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { PipePipe } from './pipe.pipe';
<<<<<<< HEAD
import { CreateContentComponent } from './create-content/create-content.component';
=======
import { HoverAffectDirective } from './hover-affect.directive';
>>>>>>> e3fc8b2bf32bb9ddbd01769c7651a536fbcc18bd

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,

    PipePipe,
<<<<<<< HEAD
     CreateContentComponent
=======
     HoverAffectDirective
>>>>>>> e3fc8b2bf32bb9ddbd01769c7651a536fbcc18bd
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
  export class AppModule { }