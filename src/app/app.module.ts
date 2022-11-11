import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './home/article/article.component';
import { AsideComponent } from './aside/aside.component';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aside', component: AsideComponent }
]
@NgModule(

  {

    declarations: [
      AppComponent,
      HomeComponent,
      ArticleComponent,
      AsideComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      RouterModule.forRoot(APP_ROUTES, { enableTracing: true })
    ],
    providers: [],
    bootstrap: [AppComponent]

  })

export class AppModule {

}
