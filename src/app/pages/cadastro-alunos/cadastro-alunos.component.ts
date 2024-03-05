import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/models/Alunos';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-cadastro-alunos',
  templateUrl: './cadastro-alunos.component.html',
  styleUrls: ['./cadastro-alunos.component.css']
})
export class CadastroAlunosComponent {

  btnAcao="Cadastrar!"
  btnTitulo="Cadastrar Aluno!"
  constructor(private alunoService:AlunoService, private router: Router){

  }
createAluno(aluno: Aluno){
this.alunoService.CreatAlunos(aluno).subscribe((data)=>{
  this.router.navigate(['/'])
});
}
}
