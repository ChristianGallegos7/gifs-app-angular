import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class GifsService {
  http = inject(HttpClient);
  env = environment;
  uri = `https://api.giphy.com/v1/gifs/trending?api_key=${this.env.giphyApiKey}&limit=10&rating=g`;

  
  loadTrendingGifs() {
    this.http.get(this.uri);
  }
}
