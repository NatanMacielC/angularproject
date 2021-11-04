import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  error = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      client: ['', Validators.required],
    });
  }

  signIn() {
    this.loading = true;
    this.authService
      .signIn(
        this.formGroup.value.login,
        this.formGroup.value.password,
        this.formGroup.value.client
      )
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate(['/home']);
        },
        (error) => {
          this.error = error;
          this.loading = false;
        }
      );
  }
}
