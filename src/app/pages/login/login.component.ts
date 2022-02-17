import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
  }
  onSubmit() {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/generalprocessing';
    this.router.navigateByUrl(returnUrl);
  }
}
