import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';  // Import RouterModule and RouterOutlet

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],  // Ensure RouterModule is included
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portsite';
}
