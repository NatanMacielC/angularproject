import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/_services';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  title = 'cadastro';
  formUser!: FormGroup;
  isSubmitted!: boolean;
  user: any;

  constructor(
    private userService: UserService,
    private http: HttpClient,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
  }

  get fc() {
    return this.formUser.controls;
  }

  initForm() {
    this.formUser = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      cpf: ['', Validators.required],
      telephone: ['', Validators.required],
      profile_id: ['', Validators.required],
    });
  }

  save() {
    this.isSubmitted = true;
    if (this.formUser.invalid) {
      return;
    } else {
      this.userService.postUser(this.formUser.value).subscribe();
      console.log(this.formUser.value);
      alert('Criado com sucesso');
      this.reset();
    }
  }

  reset() {
    this.formUser.reset();
    this.isSubmitted = false;
  }
}
