import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import{FormGroup, FormControl, Validators}from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = false;
  cheminImage:any = "C:/Users/pc/Desktop/mouad-mustafa/assignment-app-angular-main/src/images/auth.jpg";
  constructor(private authService:AuthService) { }

  email!:string;
  password!:string;


  onSubmit(){
    this.authService.logIn(this.email, this.password);
  }

  ngOnInit(): void {
  }
 

}

