import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/models/Alunos';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {

  inputdata: any;
  aluno!: Aluno

  constructor(
  private AlunoService: AlunoService, 
  private router: Router,
  @Inject(MAT_DIALOG_DATA) public data: any,
  private ref:MatDialogRef<ExcluirComponent>

){}

  ngOnInit(): void {
    this.inputdata = this.data;
     this.AlunoService.GetAluno(this.inputdata.id).subscribe((aluno)=>{
      this.aluno.dados;

     });
    
  }

  Excluir(){
    this.AlunoService.ExcluirAluno(this.inputdata.id).subscribe((data)=>{
      this.ref.close();
      window.location.reload();

    })
  }

  Cancelar(){
    this.ref.close();
  }
  }

