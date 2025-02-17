import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [NavbarComponent, RouterModule, FooterComponent],
  styles: [],
})
export class AppComponent {}
