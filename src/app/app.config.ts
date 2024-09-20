import { provideRouter } from '@angular/router';
import { routes } from './app.routes';  // Import the routes you've defined

// Provide the router configuration
export const appConfig = [
  provideRouter(routes),  // This is where the routes are configured
];
