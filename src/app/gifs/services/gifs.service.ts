import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interface';

@Injectable({ providedIn: 'root' })
export class GifsService {
  http = inject(HttpClient);
  env = environment;

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${this.env.giphyUrl}/gifs/trending`, {
      params: {
        api_key: this.env.giphyApiKey,
        limit: '20',
      },
    });
  }
}
