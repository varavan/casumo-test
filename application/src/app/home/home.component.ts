import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(apiService: ApiService) {
    console.log(apiService.getBooks());
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
