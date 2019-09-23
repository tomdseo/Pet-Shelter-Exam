import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  createPet(newPet) {
    return this._http.post('/api/pet/create', newPet);
  }

  readAllPet() {
    return this._http.get('/api/pet/read');
  }

  readPet(petID) {
    return this._http.get('/api/pet/read/' + petID);
  }

  updatePet(petID, pet) {
    return this._http.put('/api/pet/update/' + petID, pet);
  }

  deletePet(petID) {
    return this._http.delete('/api/pet/delete/' + petID);
  }

}
