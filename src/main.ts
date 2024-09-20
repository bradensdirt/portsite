import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';  // Import appConfig for routing

bootstrapApplication(AppComponent, {
  providers: [...appConfig],  // Ensure routing is set up via appConfig
}).catch(err => console.error(err));
