import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {

  @Input() src : string = ''
  @Input() name : string = ''

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  navigateToCarHome(){
    this.route.navigateByUrl('/carHome')
  }

}
