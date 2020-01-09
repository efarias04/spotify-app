import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompilerConfig } from '@angular/compiler';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;
  source: string;

  constructor(private activatedRoute: ActivatedRoute,
              private spotifyService: SpotifyService) {
              this.activatedRoute.params.subscribe((params: any) => {
                this.getArtista(params.id);
                this.getTopTracks(params.id);
                this.source = params.source;
              });
  }

  getArtista(id: string) {
    this.loading = true;
    this.spotifyService.getArtist(id).subscribe((artist: any) => {
      // console.log(artist);
      this.artist = artist;
      this.loading = false;
    }, (error) => {
      this.spotifyService.updateToken();
    });
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id).subscribe((tracks: any) => {
      this.topTracks = tracks;
      // console.log(tracks);
    }, (error) => {
      this.spotifyService.updateToken();
    });
  }

}
