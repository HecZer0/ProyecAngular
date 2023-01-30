import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';


export interface City{
  _id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly API = 'https://crudcrud.com/api/b33ea3f4679c47b1bb6e50b768302fbd/cities';


  constructor(private readonly http: HttpClient) { }

  addNewCity(city: string):Observable<City>{
    const body = { name: city };
    return this.http.post<City>(this.API, body);
  }

  getCities():Observable<City>{
    return this.http.get<City>(this.API);
  }

  UpdateCity(city: City): Observable<void>{
    const body = {name: city.name};
    return this.http.put<void>(`${this.API}/${city._id}`, body);
  }

  deleteCity(id:string): Observable<void>{
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
