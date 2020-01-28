import { Component } from '@angular/core';

@Component({
  selector: 'mdv-eight-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  links = [
    { path: '/projects', title: 'Projects', icon: 'work' }
  ]
}
