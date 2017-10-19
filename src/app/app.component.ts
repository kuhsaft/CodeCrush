import { AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    require([], () => {
      // Separate Font-Awesome into its own bundle
      require('style-loader!app/styles/font-awesome.sass');
    });
  }
}
