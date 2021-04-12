import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeListings } from '../fake-listings';
import { Listing } from '../types';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {
    listing: Listing;

    name: string = '';
    description: string = '';
    price: string = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.listing = fakeListings.find(listing => listing.id === id);
        this.name = this.listing.name;
        this.description = this.listing.description;
        this.price = `${this.listing.price}`;
    }

    onSaveChangesClicked(): void {
        alert(`
            Name: ${this.name}
            Desc: ${this.description}
            Price: ${this.price}
        `);
        this.router.navigateByUrl('/my-listings');
    }

}
