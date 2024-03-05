import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/models/Alunos';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-editar-alunos',
  templateUrl: './editar-alunos.component.html',
  styleUrls: ['./editar-alunos.component.css']
})
export class EditarAlunosComponent implements OnInit{
  btnAcao: string='Editar!'
  btnTitulo: string='Editar Aluno'
  aluno!: Aluno;
  
  constructor(private alunoService : AlunoService, private route:ActivatedRoute, private router : Router){}

  ngOnInit(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.alunoService.GetAluno(id).subscribe((data)=>{
      this.aluno=data.dados;

    })
    
  }

  editarAluno(aluno:Aluno){
    this.alunoService.EditarAluno(aluno).subscribe((data)=>{
      this.router.navigate(['/'])
    })


  }

}
