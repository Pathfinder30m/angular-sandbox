import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() someValue: any;
  pressed(e: any) {
    alert("Button is pressed")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
