import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  authStatus: string = "";
  model = new User();

  constructor(private userService: UserService, private router: Router) {

   }

  ngOnInit(): void {

  }

  registerUser(registerationForm: NgForm) {
    console.log("Iam on regerteration");
    this.model.role = "USER";
    this.userService.registerUser(this.model).subscribe(
      responseData => {
        this.model = <any> responseData.body;
        this.model.authStatus = 'AUTH';
        window.sessionStorage.setItem("userdetails",JSON.stringify(this.model));
        this.router.navigate(['home']);
      });

  }
}
