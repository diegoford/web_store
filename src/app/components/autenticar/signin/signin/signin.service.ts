import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Signin {
  id: number;
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  private apiUrl = 'http://localhost/signin'; // URL de la API

  constructor(private http: HttpClient) { }

  // Obtener todos los signins
  getSignins(): Observable<Signin[]> {
    return this.http.get<Signin[]>(this.apiUrl);
  }

  // Obtener un signin por id
  getSignin(id: number): Observable<Signin> {
    return this.http.get<Signin>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo signin
  createSignin(signin: Signin): Observable<Signin> {
    return this.http.post<Signin>(this.apiUrl, signin);
  }

  // Actualizar un signin
  updateSignin(signin: Signin): Observable<Signin> {
    return this.http.put<Signin>(`${this.apiUrl}/${signin.id}`, signin);
  }

  // Eliminar un signin
  deleteSignin(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
