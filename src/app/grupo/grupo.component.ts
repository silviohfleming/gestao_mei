import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../grupo.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.scss']
})
export class GrupoComponent implements OnInit {

  grupos: Array<any>;
  grupo: any;

  constructor(private grupoService: GrupoService) { }

  ngOnInit() {
    this.grupo = {};
    this.listar();

  }

  listar() {
    console.log('Listar grupos');
    this.grupoService.listar().subscribe(dados => this.grupos = dados);
  }

  criarGrupo(frm: FormGroup) {
    this.grupoService.criarGrupo(this.grupo).subscribe(resposta => {
      this.grupos.push(resposta);
      console.log('Criar grupo: ' + JSON.stringify(resposta));
      frm.reset();
    });
  }

  deletaGrupo(id: number) {
    this.grupoService.deletaGrupo(id).subscribe( resposta => {
      console.log('Deleta grupo: ID = ' + id + ', Resposta = ' + resposta);
      function findIndexByKeyValue(obj, key, value) {
        for (let i = 0; i < obj.length; i++) {
          if (obj[i][key] === value) {
            return i;
          }
        }
        return null;
      }
      const index = findIndexByKeyValue(this.grupos, 'id', id);
      if (index > -1) {
        this.grupos.splice(index, 1);
      }
    });
  }

  atualizarGrupo(id: number, descricao: string) {
   this.grupoService.atualizarGrupo(id, descricao).subscribe(resposta => {
      console.log('Atualizar grupo: ' + JSON.stringify(resposta));
    });
  }

  buscarPorGrupo(id: number) {
    this.grupoService.buscarPorGrupo(id).subscribe( dados => {
      alert(JSON.stringify(dados));
      console.log('Ver grupo: ' + JSON.stringify(dados));
    });
  }


}
