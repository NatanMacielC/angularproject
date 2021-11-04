import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  nome = '';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    if (this.authService.currentUserValue.user)
      this.nome = this.authService.currentUserValue.user.fullName;
  }
}
