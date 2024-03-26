import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DocumentType } from '../interfaces/form-options.interface';

@Injectable({
  providedIn: 'root'
})
export class FormOptionsService {
  URL = 'https://api.bancoink.biz/qa/signup';
  constructor(private http: HttpClient) { }

  documentTypes (): Observable<DocumentType[]> {
    return this.http.get<DocumentType[]>(`${environment.baseUrl}/documentTypes?apiKey=030106`);
  }

  genders (): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/genders?apiKey=030106`);
  }
}
