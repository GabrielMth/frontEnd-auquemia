import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';
import { PaginacaoDTO } from '../dtos/paginacao.dto';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly apiUrl = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) { }

  criar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }

  consultarPaginado(pagina: number, tamanho: number, campoOrdenacao: string, direcao: string): Observable<PaginacaoDTO<Cliente>> {
    const params = {
      page: pagina,
      size: tamanho,
      sort: `${campoOrdenacao},${direcao}`
    };
    return this.http.get<PaginacaoDTO<Cliente>>(this.apiUrl, { params });
  }

}
