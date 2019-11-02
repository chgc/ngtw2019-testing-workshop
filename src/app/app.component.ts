import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngtw2019-testing';
  count = 0;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.dataService.add(1, 2);
  }
  add() {
    this.count += 1;
  }
}
