import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicacaoComponent } from './component/aplicacao/aplicacao.component';
import { FornecedorComponent } from './component/fornecedor/fornecedor.component';
import { HomeComponent } from './component/home/home.component';
import { PessoaFormComponent } from './component/pessoa-form/pessoa-form.component';
import { PessoaComponent } from './component/pessoa/pessoa.component';

const routes: Routes = [
{ path: "", component: HomeComponent},
{ path: "pessoa", component: PessoaComponent },
{ path: "pessoa/form", component: PessoaFormComponent},
{ path: "fornecedor", component: FornecedorComponent},
{ path: "aplicacao", component: AplicacaoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
