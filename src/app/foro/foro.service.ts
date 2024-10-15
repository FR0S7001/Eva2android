import { Injectable } from '@angular/core';
import { CLForo } from '../model/CLForo';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const apiUrl = "http://localhost:3000/productos";
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class ForoService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("handleError Harrys", error); // log to console instead
      return of(result as T);
    };
  }

  addForo(producto: CLForo): Observable<CLForo> {
    console.log("Res-api Enviando AddProducto : ", producto);
    // Ojo No lo ejecuta lo declara
    // El Pipe lo intercepta
    return this.http.post<CLForo>(apiUrl, httpOptions)
      .pipe(  // Tubería
        // tap intersecta la respuesta si no hay error
        tap((producto: CLForo) => console.log('added product w/:', producto)),
        // En caso de que ocurra Error
        catchError(this.handleError<CLForo>('addProduct'))
      );
  }

   getForos(): Observable<CLForo[]> {
    console.log("getForos ()");
    return this.http.get<CLForo[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('fetched products')),
        catchError(this.handleError('getForos', []))
      );
  }
  getForo(id: String): Observable<CLForo> {
    //const url = '${apiUrl}/${id}';
    //return this.http.get<Producto>(url).pipe(
    console.log("getForo ID:" + id);
    return this.http.get<CLForo>(apiUrl + "/" + id)
      .pipe(
        tap(_ => console.log('fetched foro id=${id}')),
        catchError(this.handleError<CLForo>('getForo id=${id}'))
      );
  }

  deleteForot(id: number): Observable<CLForo> {
    //const url = '${apiUrl}/${id}';
    //return this.http.delete<Producto>(url, httpOptions).pipe(
    return this.http.delete<CLForo>(apiUrl + "/" + id, httpOptions)
      .pipe(
        tap(_ => console.log('deleted Foro id=${id}')),
        catchError(this.handleError<CLForo>('deleteForo'))
      );
  }

  updateProduct(id: number, producto: CLForo): Observable<CLForo> {
    return this.http.put<CLForo>(apiUrl + "/" + id, httpOptions)
      .pipe(
        tap(_ => console.log('updated foro id=${id}')),
        catchError(this.handleError<any>('updateForo'))
      );
  }

}
