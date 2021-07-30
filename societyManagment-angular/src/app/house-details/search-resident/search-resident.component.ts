import { HouseServiceService } from './../house-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-resident',
  templateUrl: './search-resident.component.html',
  styleUrls: ['./search-resident.component.css']
})
export class SearchResidentComponent implements OnInit {
  public key!: String;
  searchResult = []
  constructor(public service: HouseServiceService) { }

  ngOnInit(): void {
  }
  fetchData() {
    this.service.searchQueryResidents(this.key).subscribe((data) => {
      this.searchResult = data.data
      console.log(this.searchResult)
    })
  }
}
