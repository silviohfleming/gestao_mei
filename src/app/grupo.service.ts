import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  gruposUrl = 'http://gestaomei-env.cpyadknrvh.sa-east-1.elasticbeanstalk.com/api/getGroups';
  gruposUrlPost = 'http://gestaomei-env.cpyadknrvh.sa-east-1.elasticbeanstalk.com/api/createGroup';
  gruposUrlDelete = 'http://gestaomei-env.cpyadknrvh.sa-east-1.elasticbeanstalk.com/api/deleteGroups/';
  gruposUrlEdit = 'http://gestaomei-env.cpyadknrvh.sa-east-1.elasticbeanstalk.com/api/editGroups/';
  gruposUrlGet = 'http://gestaomei-env.cpyadknrvh.sa-east-1.elasticbeanstalk.com/api/getGroup/';

  ncmsUrlListar = 'http://gestaomei-env.cpyadknrvh.sa-east-1.elasticbeanstalk.com/api/getNcms';

  constructor(private http: HttpClient) { }

  listar() {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<any[]>(`${this.gruposUrl}`, { headers: headers });
  }

  criarGrupo(grupo: any) {
    return this.http.post(`${this.gruposUrlPost}`, grupo);
  }

  atualizarGrupo(id: number, descricao: string) {
    return this.http.post(`${this.gruposUrlEdit}${id}`, { descricao: descricao});
  }

  deletaGrupo(id: number) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.gruposUrlDelete}${id}`, { headers: headers });
  }

  buscarPorGrupo(id: number){
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<any[]>(`${this.gruposUrlGet}${id}`, { headers: headers });
  }


}
