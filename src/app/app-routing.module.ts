import { AboutComponent } from './Components/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './Components/categories/categories.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainUserComponent } from './Components/main-user/main-user.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainUserComponent,
    children: [
      { path: '', redirectTo: '/Home', pathMatch: 'full' }, //default path
      { path: 'Home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/:id', component: ProductDetailsComponent },
      { path: 'Categories', component: CategoriesComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent },
    ],
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundComponent }, //wild card path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
