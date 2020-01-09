import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean;
  source: string;
  isAnError: boolean;
  errorMessage: string;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  searchArtits(artist: string) {
    // console.log(artist);
    if (artist === '') {
      this.loading = false;
      this.artists = [];
    } else {
      this.loading = true;
      this.spotifyService.getArtists(artist).subscribe((response: any) => {
        // console.log(response);
        this.isAnError = false;
        this.artists = response;
        this.source = '/search';
        this.loading = false;
      }, (error) => {
        this.loading = false;
        this.errorMessage = error.error.error.message +'!';
        this.isAnError = true;
        this.spotifyService.updateToken();
      });
    }
  }
}
