import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../bootstrap.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errors: any;
  submitted: boolean;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.pattern('^[a-zA-Z0-9_.+-]+@+[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      password: new FormControl('', [Validators.minLength(3)])
    });
    this.submitted = true;
  }

  login(form: FormGroup): void {
    this.authService.login(form.getRawValue()).subscribe(() => {
      this.router.navigate(['main']);
    }, error => this.errors = error.error);
      }
}
