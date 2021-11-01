import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'src/app/service/pessoa.service';
import { Pessoa } from './../../model/pessoa.model';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

titulo:string = "Pessoas"
pessoaList:Pessoa[] = [];

  constructor(private _service:PessoaService) { }

  ngOnInit(): void {
this._service.listar().subscribe(pessoas => this.pessoaList = pessoas)
}
}



