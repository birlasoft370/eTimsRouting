import { Component, Inject, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gp-search',
  templateUrl: './gp-search.component.html',
  styleUrls: ['./gp-search.component.scss']
})
export class GpSearchComponent implements OnInit {

  searchFrom = new FormGroup({
    ticketNo: new FormControl(' '),
    eventId: new FormControl(' ')
    // advanceseacrh: new FormGroup({
    //   stack: new FormControl(''),
    //   experience: new FormControl('')
    // })   
  })

  constructor(private router: Router) { }



  ngOnInit(): void {
  }

  name = "Angular " + VERSION.major;
  isShow = false;

  toggleStatus() {
    this.isShow = !this.isShow;
  }

  onSubmit(): void {
    //console.warn(this.searchFrom.value);
    this.router.navigate(['event/' + this.searchFrom.value.ticketNo + '/' + this.searchFrom.value.eventId]);
  }

}
