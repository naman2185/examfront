import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private userService:UserService, private snackBar: MatSnackBar){}
  public user={
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',   
  };
  formSubmit(valid: boolean | null){
    if(valid==true){
      this.snackBar.open("please fill the required field", "ok",{
        duration:3000,
      })
      return;
    }
    console.log(this.user);
    if(this.user.userName=='' || this.user.userName==null){
      // alert("username is required!!");
      this.snackBar.open("Username is required!!", "ok",{
        duration:3000,
      })
      return;
    }
    // addUser:userservice
    this.userService.addUser(this.user).subscribe(
      (data: any)=>{
        //success
        console.log(data);
        // alert("success");
        // this.snackBar.open("success", "ok",{
        //   duration:3000,
        // })
        Swal.fire("Successfully registered!!", "User id is " + data.id, "success");

      },
      (error)=>{
        //error
        console.log(error);
        // alert("something went wrong!")
        this.snackBar.open("something went wrong !!", "ok", {
          duration:3000,
        })
      }
    )
  }
  
}
