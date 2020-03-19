import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MovieComponent } from "./movie/movie.component";
import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [
  { path: "", redirectTo: "/Home", pathMatch: "full" },
  { path: "Home", component: MovieComponent }
];

@NgModule({
  declarations: [AppComponent, MovieComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [MovieComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
