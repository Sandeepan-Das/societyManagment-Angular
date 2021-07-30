import { HouseServiceService } from './../house-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-resident',
  templateUrl: './search-resident.component.html',
  styleUrls: ['./search-resident.component.css']
})
export class SearchResidentComponent implements OnInit {
  public key!: String;
  searchResult = [{
    hd: {
      name: "",
      registeredNumber: "",
      roomNo: "",
      type: ""
    }
  }]
  constructor(public service: HouseServiceService, private ActivatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.ActivatedRoute.queryParams.subscribe((data) => {

      this.key = data["searchQuery"];
      console.log(this.key)
      this.fetchData(this.key)
    })
  }
  fetchDetails(roomNo: String) {
    this.route.navigate(["/houseDetails/fetchResidents"], {
      queryParams: { roomNo: roomNo }
    })
  }
  fetchData(key: String) {
    this.service.searchQueryResidents(key).subscribe((data) => {
      this.searchResult = data.data
      console.log(this.searchResult)
    })
  }
}
