import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';

// Routes
import { ROUTES } from './app.routes';

// Services
import { SpotifyService } from './services/spotify.service';

// pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { DomsegurofollowPipe } from './pipes/domsegurofollow.pipe';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    DomsegurofollowPipe,
    CardsComponent,
    SpinnerComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
