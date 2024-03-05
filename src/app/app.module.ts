import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeAlunosComponent } from './pages/home-alunos/home-alunos.component';
import { CadastroAlunosComponent } from './pages/cadastro-alunos/cadastro-alunos.component';
import { AlunoFormComponent } from './componentes/aluno-form/aluno-form.component';
import { EditarAlunosComponent } from './pages/editar-alunos/editar-alunos.component';
import { ExcluirComponent } from './componentes/excluir/excluir.component';
import { DetalhesAlunosComponent } from './pages/detalhes-alunos/detalhes-alunos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    HomeAlunosComponent,
    CadastroAlunosComponent,
    AlunoFormComponent,
    EditarAlunosComponent,
    DetalhesAlunosComponent,
    ExcluirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
