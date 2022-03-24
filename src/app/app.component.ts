import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MultiUserAuth';

  loginForm = new FormGroup({
    email: new FormControl('' , [Validators.required , Validators.email]),
    password: new FormControl('' )
  })
  
}
