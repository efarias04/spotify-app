import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domsegurofollow'
})
export class DomsegurofollowPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer ){ }

  transform( value: string): any {
    const preUrl = 'https://open.spotify.com/follow/1/?uri=';
    const postUrl = '&size=detail&theme=dark';
    return this.domSanitizer.bypassSecurityTrustResourceUrl( preUrl + value + postUrl);
  }

}
