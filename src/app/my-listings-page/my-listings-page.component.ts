import { Component, OnInit } from '@angular/core';
import { fakeListings } from '../fake-listings';
import { Listing } from '../types';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {
    listings: Listing[] = [];

    constructor() { }

    ngOnInit(): void {
        this.listings = fakeListings;
    }

    onDeleteClicked(id: string): void {
        alert(`Deleting listing with id ${id}`);
    }
}
