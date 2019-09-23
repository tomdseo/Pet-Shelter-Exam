import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  pet = null;
  errors = [];
  flag = false;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this._httpService.readPet(params.id).subscribe((data: any) => {
        this.pet = data;
        this.flag = false;
      });
    });
  }

  onEditPet() {
    console.log(this.pet.name);

    this._httpService
      .updatePet(this.pet._id, this.pet)
      .subscribe((data: any) => {
        if (data.hasOwnProperty('errors')) {
          this.errors = data.errors;
          console.log(this.errors);
          if (this.errors[0] == null) {
            this.flag = true;
          }
        } else {
          this._router.navigate(['/pets/' + this.pet._id]);
        }
      });
  }

}
