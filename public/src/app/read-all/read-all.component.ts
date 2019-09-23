import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {
pets: any[] = [];

  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.readAllPets();
  }

  readAllPets() {
    const observable = this._httpService.readAllPet();
    observable.subscribe((data: any) => {
      for (const pet of data) {
        this.pets.push(pet);
      }
    });
  }

}
