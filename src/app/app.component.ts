import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  locations: any;
  @Input('activeLocation') activeLocation: object;
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get('https://s3.amazonaws.com/br-codingexams/restaurants.json').subscribe(data => {
      this.locations = data['restaurants'];
      console.log(data);
    });
  }
  selectLocation(selection) {
    this.activeLocation = selection;
  }
}
