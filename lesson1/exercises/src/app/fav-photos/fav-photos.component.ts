import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Some really cool pics, dogg:';
  image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQko5fC5CcoCp1WbzIkKOw_8iKCQSAbeajORA&usqp=CAU';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjcx8iSOYu67nmJZleXlUC-VDQqx8QLy-ZJg&usqp=CAU';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc58MZ2huBLSQI1g6OoeYeaqsh9hez4ZEbXg&usqp=CAU';

  constructor() { }

  ngOnInit() {
  }

}