import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../../bootstrap.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  errors: any;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  register(form: FormGroup): void {
    this.authService.register(form.getRawValue()).subscribe(() => {
      this.router.navigate(['main']);
    }, error => this.errors = error.error);
  }
}
