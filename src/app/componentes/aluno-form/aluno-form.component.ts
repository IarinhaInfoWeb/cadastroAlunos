import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Aluno } from 'src/app/models/Alunos';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Aluno>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosAluno: Aluno | null = null;

  alunoForm!: FormGroup;

constructor(){}

  ngOnInit(): void{

    this.alunoForm = new FormGroup({
      id: new FormControl(this.dadosAluno ? this.dadosAluno.id:0),
      codigodaMatricula: new FormControl(this.dadosAluno ? this.dadosAluno.codigodaMatricula : '',[Validators.required]),
      nome: new FormControl(this.dadosAluno ? this.dadosAluno.nome : '',[Validators.required]),
      turma: new FormControl(this.dadosAluno ? this.dadosAluno.turma : '',[Validators.required]),
      ativo: new FormControl (this.dadosAluno ? this.dadosAluno.ativo:true),
      foto: new FormControl (this.dadosAluno ? this.dadosAluno.foto : '',[Validators.required]),
      dataDeCriacao: new FormControl (new Date()),
      dataDeAlteracao: new FormControl (new Date())

    })

  }
  submit(){
    console.log(this.alunoForm.value)
    this.onSubmit.emit(this.alunoForm.value);}
  }
  