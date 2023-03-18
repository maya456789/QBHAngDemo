import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

   getClientInfo():Observable<any>{
        return this.http.get(`${environment.API_GET_CLIENT}`).pipe(
          map((user) => {
            return user;
          })
        );
   }

   addClientInfo(clientData:any):Observable<any>{
    return this.http.post<any>(`${environment.API_ADD_CLIENT}`,clientData).pipe(
      map((user) => {
        return user;
      })
    );
}

deleteClientInfo(ciD:any):Observable<any>{
  return this.http.delete<any>(`${environment.API_DELETE_CLIENT}/${ciD}`).pipe(
    map((user) => {
      return user;
    })
  );
}


}
