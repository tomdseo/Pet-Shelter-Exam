import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newPet = {name: '', type: '', description: '', skill1: '', skill2: '', skill3: ''};
  errors = [];
  flag = false;

  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit() {}

  onCreatePet() {
    this._httpService.createPet(this.newPet).subscribe((data: any) => {
      if (data.hasOwnProperty('errors')) {
        this.errors = data.errors;
        console.log(this.errors);

        if (this.errors[0] == null) {
          this.flag = true;
          console.log(this.flag);
        }
      } else {
        this._router.navigate(['/pets']);
      }
    });
  }

  cancelHandler() {
    this._router.navigate(['/pets']);
  }
}

