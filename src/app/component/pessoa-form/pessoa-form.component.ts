import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {

  titulo:string = "Cadastro de Pessoas"

  form = this.formBuilder.group({
    nome: "",
    cpf: ""
  })

  constructor(private formBuilder:FormBuilder,
    private _service:PessoaService) { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.form.value)
this._service.inserir(this.form.value).subscribe((response: any) => console.log(response))
  }

}
