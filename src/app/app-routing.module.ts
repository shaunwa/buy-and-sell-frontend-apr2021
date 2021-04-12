import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';

const routes: Routes = [{
    path: 'contact/:id',
    component: ContactPageComponent,
}, {
    path: 'edit/:id',
    component: EditListingPageComponent,
}, {
    path: '',
    component: ListingsPageComponent,
}, {
    path: 'listings/:id',
    component: ListingDetailPageComponent,
}, {
    path: 'my-listings',
    component: MyListingsPageComponent,
}, {
    path: 'new-listing',
    component: NewListingPageComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
