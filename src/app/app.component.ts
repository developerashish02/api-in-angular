import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user: any;
  constructor(
    private userService: UserService // private toster: ToastrService
  ) {}

  ngOnInit() {
    this.userService.getUser().subscribe((data: any) => {
      this.user = data.results[0];
    });
  }
  title = 'api-in-angular';
}
