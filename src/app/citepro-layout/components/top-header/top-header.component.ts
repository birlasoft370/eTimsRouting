import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  
  logout(): void {
    this.auth.logout();
  }
}
