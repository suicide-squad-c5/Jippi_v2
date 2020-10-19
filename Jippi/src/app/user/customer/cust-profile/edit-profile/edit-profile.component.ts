import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  firstName: String = '';
  lastName: String = '';
  phoneNumber: Number = null;
  email: any= '';
  password: String = '';
  confirmPassword: String = '';
  url: any;
  alertt: string= '';
  constructor() { }

  ngOnInit(): void {
    // alert('test')
  }
  ngDoCheck(){
console.log('===>',this.firstName);

  }
//function to read avatar url
 onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => { 
        this.url = event.target.result;
      }
    }
  }
  check(){
    let succ = "Success update";
    let err = "Some think rong";
    var em = this.email
    if (em.length !==0 && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(em)){
      this.alertt = err
    }
    else if(em.length ===0 || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(em)) {
      this.alertt = succ
    }
  }

}
