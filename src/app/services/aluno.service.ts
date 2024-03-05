import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import{Response} from '../models/Response'
import { Observable } from 'rxjs';
import { Aluno } from '../models/Alunos';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

private apiUrl = `${environment.apiUrl}/Aluno`
  constructor(private http: HttpClient) { }
  GetAlunos(): Observable<Response<Aluno[]>> {
    type NewType = Aluno;

    return this.http.get<Response<NewType[]>>(this.apiUrl);
    
  }

  GetAluno(id:number): Observable<Response<Aluno>>{
    return this.http.get<Response<Aluno>>(`${this.apiUrl}/${id}`);
  }

  CreatAlunos(aluno: Aluno): Observable<Response<Aluno[]>>{
    return this.http.post<Response<Aluno[]>>(`${this.apiUrl}`, aluno);
  }

  EditarAluno(aluno:Aluno): Observable<Response<Aluno[]>>{
    return this.http.put<Response<Aluno[]>>(`${this.apiUrl}`, aluno);
  }

  InativaAluno(id:number):Observable<Response<Aluno[]>>{
  return this.http.put<Response<Aluno[]>>(`${this.apiUrl}/InativaAluno/${id}`,id);
  }

  ExcluirAluno(id:number):Observable<Response<Aluno[]>>{
    return this.http.delete<Response<Aluno[]>>(`${this.apiUrl}?id=${id}`);
    }
}
