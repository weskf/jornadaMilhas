import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultadoBuscaPassagens } from 'src/app/core/types/type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PassagensService {
  apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getPassagens(search: any) : Observable<ResultadoBuscaPassagens>{
    const params = search;

    return this.httpClient.get<ResultadoBuscaPassagens>(this.apiUrl + '/passagem/search', {params})
  }
}
