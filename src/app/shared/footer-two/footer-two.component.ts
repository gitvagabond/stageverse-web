import { Component, OnInit } from '@angular/core';

import { EmailService } from '../../services/email/email.service';
@Component({
  selector: 'app-footer-two',
  templateUrl: './footer-two.component.html',
  styleUrls: ['./footer-two.component.scss']
})
export class FooterTwoComponent implements OnInit {

  message:string=localStorage.getItem('message');
  emailAddress:string='';
  menu:boolean=false;
  loader:boolean=false;
  constructor(public _mail:EmailService) { }

  ngOnInit(): void {
  }

  sendMail(){
    if(this.validateEmail(this.emailAddress)){
    this.loader=true
    this._mail.PutEmailList(this.emailAddress).subscribe(res=>{
      console.log(res);
      this.loader=false
      this.emailAddress='';
      localStorage.setItem('message',"Thanks for signing up! We’ll keep you up-to-date with the latest news.")
      this.message="Thanks for signing up! We’ll keep you up-to-date with the latest news.";
    })
  }
  }
  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
}
