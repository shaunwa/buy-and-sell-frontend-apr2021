import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from '../fake-listings';
import { Listing } from '../types';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
    listing: Listing;
    email: string = '';
    message: string = '';

    constructor(
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.listing = fakeListings.find(listing => listing.id === id);
    }

    sendMessage(): void {
        alert(`
        Your email: ${this.email}
        Your message: ${this.message}
        `)
    }

}
