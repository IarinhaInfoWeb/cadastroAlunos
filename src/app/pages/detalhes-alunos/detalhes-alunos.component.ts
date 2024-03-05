import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/models/Alunos';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-detalhes-alunos',
  templateUrl: './detalhes-alunos.component.html',
  styleUrls: ['./detalhes-alunos.component.css']
})
export class DetalhesAlunosComponent implements OnInit{

  aluno? : Aluno;

  id!:number;

constructor(private alunoService: AlunoService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {

    this.id = Number ( this.route.snapshot.paramMap.get('id'));

    this.alunoService.GetAluno(this.id).subscribe((data)=>{

      const dados = data.dados;

      dados.dataDeCriacao = new Date(dados.dataDeCriacao!).toLocaleDateString('pt-BR');
      dados.dataDeAlteracao = new Date(dados.dataDeAlteracao!).toLocaleDateString('pt-BR');

      console.log(data.dados)

      this.aluno = data.dados;


    })

  }

  InativaAluno(){

    console.log(this.id) 

this.alunoService.InativaAluno(this.id).subscribe((data)=>{
this.router.navigate(['']);
})

  }

}
