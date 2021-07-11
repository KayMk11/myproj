import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ConfirmPasswordValidator } from 'src/app/confirm-password.validator';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {
  updatepassword: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.updatepassword = this.fb.group({
      password: new FormControl(null, [Validators.required]),
      confirmpassword: new FormControl(null, [Validators.required])
    },
      {
        validator: ConfirmPasswordValidator("password", "confirmpassword")
      }
    );
  }
  onSubmit() {
    this.submitted = true;
    if (this.updatepassword.invalid) {
      return;
    }
    this.userService.updatePassword(this.updatepassword.value.password)

    // alert('password updated successfully');

    this.updatepassword.reset();
  }
}
