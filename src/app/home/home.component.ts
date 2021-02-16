import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private fetchSvc: FetchService) { }

  ngOnInit(): void {
    this.fetchSvc.getAllDetails().subscribe((data) =>{
      if(data){
        console.log(data[0].name)
      }
    })

  }
  prev(){
    const element = document.getElementById('slider')
    element.scrollLeft -= 100
  }
  next(){
    const element = document.getElementById('slider')
    element.scrollLeft += 100
  }

}
