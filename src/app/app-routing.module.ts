import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroAlunosComponent } from './pages/cadastro-alunos/cadastro-alunos.component';
import { HomeAlunosComponent } from './pages/home-alunos/home-alunos.component';
import { EditarAlunosComponent } from './pages/editar-alunos/editar-alunos.component';
import { DetalhesAlunosComponent } from './pages/detalhes-alunos/detalhes-alunos.component';

const routes: Routes = [
{path:'/cadastro-alunos', component: CadastroAlunosComponent},
{path: '/', component: HomeAlunosComponent},
{path: '/editar-alunos/:id', component:EditarAlunosComponent},
{path: '/detalhes-alunos/:id', component:DetalhesAlunosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
