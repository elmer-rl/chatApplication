import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export default class LoginComponent implements OnInit {

  register = false;

  constructor(private authService: AuthService, private fb:FormBuilder, private router:Router) {}

  loginForm!: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.loginForm = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required],
      userName:['user', Validators.required]
    })
  }

  login(){

    this.authService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value).then((res) => {
      console.log(res);

      this.router.navigateByUrl('messages')
    }).catch((error:any) => {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: error,
        icon: "error"
      });
    });
  }

  registerAccount() {
    this.authService.register
    (this.loginForm.get('email')?.value,
    this.loginForm.get('password')?.value,
    this.loginForm.get('userName')?.value)
    .then((res) => {
      console.log(res);

        this.login();
    }).catch((error:any) => {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: error,
        icon: "error"
      });
    });
  }
}
