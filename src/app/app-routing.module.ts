import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NestedComponent } from './nested/nested.component';
import { NestedaboutComponent } from './nestedabout/nestedabout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'home',children:[
    {path:'',component:HomeComponent},
    {path:'nested', children:[
      {path:'',component:NestedComponent},
      {path:'nestedabout',component:NestedaboutComponent}

    ]}
  ]},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'product',component:ProductComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component:NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
