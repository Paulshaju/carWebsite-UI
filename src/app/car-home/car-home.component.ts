import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { carYearDetails } from '../data-model.model';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.scss']
})
export class CarHomeComponent implements OnInit {

  backgroundIMages = ['../../assets/benz.jpg', '../../assets/ferrari.jpg', '../../assets/audi.jpg', '../../assets/mustang.jpg']
  activeImage = ''
  indexImage = -1

  carlist: carYearDetails[] = [
    { id: 1, name: "Ferrari 488", imageSrc: "../../assets/ferrari.jpg", year: "1971" },
    { id: 2, name: "Ferrari 488", imageSrc: "../../assets/ferrari.jpg", year: "1971" },
    { id: 3, name: "Ferrari 488", imageSrc: "../../assets/ferrari.jpg", year: "1971" },
    { id: 4, name: "Ferrari 488", imageSrc: "../../assets/ferrari.jpg", year: "1971" },
    { id: 5, name: "Ferrari 488", imageSrc: "../../assets/ferrari.jpg", year: "1971" },
    { id: 6, name: "Ferrari 488", imageSrc: "../../assets/ferrari.jpg", year: "1971" },
    { id: 7, name: "Ferrari 488", imageSrc: "../../assets/ferrari.jpg", year: "1971" },
    { id: 8, name: "Ferrari 488", imageSrc: "../../assets/ferrari.jpg", year: "1971" },
    { id: 9, name: "Ferrari 488", imageSrc: "../../assets/ferrari.jpg", year: "1971" },
    { id: 10, name: "Ferrari 488", imageSrc: "../../assets/ferrari.jpg", year: "1971" },
    { id: 11, name: "Ferrari 488", imageSrc: "../../assets/ferrari.jpg", year: "1971" },
  ]

  constructor() { }

  ngOnInit(): void {
    this.setImageBackground()
  }
  setImageBackground() {
    this.activeImage = this.backgroundIMages[0]
    var i = 0
    setInterval(() => {
      i = i + 1
      this.indexImage = i
      if(i === this.backgroundIMages.length){
        i = 0
      }
      this.activeImage = this.backgroundIMages[i]
      

    }, 9750
    )
  }
  dropToView(event: CdkDragDrop<string[]>) {
    console.log(event)
  }
  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    // if (event.previousContainer === event.container) {
    //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    // }
  }

}
