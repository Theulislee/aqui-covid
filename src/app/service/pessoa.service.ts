import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../model/pessoa.model';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';
import { PessoaComponent } from '../component/pessoa/pessoa.component';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {


  baseURL:string = environment.baseURL;


  constructor(private _http:HttpClient) { }

  listar(): Observable<Pessoa[]> {
return this._http.get<Pessoa[]>(`${this.baseURL}Pessoa/listar`)
  }


  inserir(pessoa:Pessoa): Observable<any> {
    return this._http.post<any>("https://demo8244548.mockable.io/Pessoa/inserir", pessoa)
}
}

