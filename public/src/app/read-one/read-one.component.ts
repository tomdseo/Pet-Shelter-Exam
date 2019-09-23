import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-read-one',
  templateUrl: './read-one.component.html',
  styleUrls: ['./read-one.component.css']
})
export class ReadOneComponent implements OnInit {
  pet = null;
  liked = false;

  constructor(
    // tslint:disable-next-line:variable-name
    private _httpService: HttpService,
    // tslint:disable-next-line:variable-name
    private _router: Router,
    // tslint:disable-next-line:variable-name
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this._httpService.readPet(params.id).subscribe((data: any) => {
        console.log(data);
        this.pet = data;
      });
    });
  }

  onAdoptPet() {
    this._httpService
      .deletePet(this.pet._id)
      .subscribe((data: any) => console.log('Deleted This', data));
    this._router.navigate(['/pets']);
  }

  onLikePet() {
    this.liked = true;
    this.pet.likes += 1;
    this._httpService
      .updatePet(this.pet._id, this.pet)
      .subscribe((data: any) => {
      });
  }
}
