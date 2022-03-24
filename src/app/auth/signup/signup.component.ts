import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   registerForm:any ;
   submitted = false;
  name: string = '';
  username: string='';
  password: string= '';
  // email= new FormControl('',[Validators.required , Validators.email]);
  constructor(private formBuilder: FormBuilder) { }
  
  

  ngOnInit(): void {
    // this.loginForm = new FormGroup({
    //   email:['',[Validators.required , Validators.email]],
    //   password: new FormControl('')
    // })
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  },
//   {
//     validator: MustMatch('password', 'confirmPassword')
// }
);
}
get f() { return this.registerForm.controls; }
  signup(){
    console.log(this.name+" " + this.username+" "+this.password );
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
  }
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
  
  // userEmails = new FormGroup({
  //   email: new FormControl('',[
  //     Validators.required,
  //     Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  //   });
}
