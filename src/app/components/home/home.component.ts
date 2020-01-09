import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  newReleases: any[] = [];
  source: string;
  loading: boolean;
  isAnError: boolean;
  errorMessage: string;

  constructor(private spotifyService: SpotifyService) {
    this.isAnError = false;
    this.loading = true;
    this.spotifyService.getNewRelease().subscribe( (response: any) => {
      // console.log(response);
      this.newReleases = response;
      this.source = '/home';
      this.loading = false;
    }, (error) => {
      console.log(error);
      this.spotifyService.updateToken();
      this.loading = false;
      this.isAnError = true;
      this.errorMessage = error.error.error.message + '!';
    });
  }

  ngOnInit() {
  }

}
