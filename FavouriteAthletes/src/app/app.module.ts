import { leadingComment } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
 
import { CreateContentComponent } from './create-content/create-content.component';
import { PipePipe } from './pipe.pipe';
 
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { RouterModule } from '@angular/router';
import { ContentDetailModule } from './content-detail/content-detail.module';
import { SportService } from './services/sport.service';
import { HttpClientModule } from '@angular/common/http';
 

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    CreateContentComponent,
  PipePipe,
     CreateContentComponent,
      
     PagenotFoundComponent,
      // HoverAffectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    RouterModule,
    ReactiveFormsModule ,
    ContentDetailModule,
    HttpClientModule
    
  ],
  providers: [SportService],
  bootstrap: [AppComponent]
})
  export class AppModule { }