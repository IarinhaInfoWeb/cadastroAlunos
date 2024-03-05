import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from 'src/app/componentes/excluir/excluir.component';
import { Aluno } from 'src/app/models/Alunos';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-home-alunos',
  templateUrl: './home-alunos.component.html',
  styleUrls: ['./home-alunos.component.css']
})
export class HomeAlunosComponent implements OnInit {
  alunos: Aluno[] = [];
  alunosGeral: Aluno[] = [];

  colunas = ['Situação', 'Código da Matrícula', 'Nome do Aluno', 'Local da Foto', 'Ações', 'Excluir']
element: any;

  constructor(private alunoService: AlunoService, public dialog: MatDialog){}
  ngOnInit(): void{
    this.alunoService.GetAlunos().subscribe(data => {
      const dados = data.dados;
      console.log(dados)

      dados.map((item) =>{
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR')
        item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString('pt-BR')
      })
      this.alunos = data.dados;
      this.alunosGeral = data.dados;
    });
  }
  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();
    
    this.alunos = this.alunosGeral.filter(aluno =>{
      return aluno.nome.toLowerCase().includes(value);
    })
  }
  OpenDialog(id = Number){
    this.dialog.open(ExcluirComponent, {
      width : '450px',
      height: '450px',
      data:{
        id: id
      }
   });
  }

  onDownload (){

  }

}

