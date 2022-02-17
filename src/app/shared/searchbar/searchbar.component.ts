import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  name = "Angular " + VERSION.major;
  isShow = false;

  toggleStatus() {
    this.isShow = !this.isShow;
  }

}
