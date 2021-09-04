import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-steps',
  templateUrl: './checkout-steps.component.html',
  styleUrls: ['./checkout-steps.component.scss'],
  host: {'class': 'Module CheckoutSteps'}
})
export class CheckoutStepsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
