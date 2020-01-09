import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ConstantsAplicacion } from '../utils/constants';
import { TokenService } from './token.service';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient,
    private tokenService: TokenService) {
    console.log('Spotify services works!');
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getQuery(query: string) {

    if (ConstantsAplicacion.TOKEN === null || ConstantsAplicacion.TOKEN === undefined || ConstantsAplicacion.TOKEN.length === 0) {
      (async () => {
        this.updateToken();
        await this.delay(1000);
      })();
    }
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + ConstantsAplicacion.TOKEN
    });

    return this.http.get(url, { headers });
  }

  getNewRelease() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map((data: any) => data.albums.items));
  }

  getArtists(artist: string) {
    return this.getQuery(`search?q=${artist}&type=artist&limit=20`)
      .pipe(map((data: any) => data.artists.items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`)
      .pipe(map((data: any) => data));
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map((tracks: any) => tracks.tracks));
  }

  updateToken() {
    this.tokenService.getToken().subscribe((token: any) => {
      sessionStorage.setItem(ConstantsAplicacion.KEY, token.access_token);
    }, (error) => {
      console.log(error);
    });
  }
}
