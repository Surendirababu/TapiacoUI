import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  farmerForm: FormGroup;
  brokerForm: FormGroup;
  orderForm: FormGroup;
  farmerFormSubmitted = false;
  brokerFormSubmitted = false;
  orderFormSubmitted = false;
  cultivationTeams = 1;
  cultivationTeamDetailsData:Object;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.farmerForm = this.formBuilder.group({
      farmerName: ['', Validators.required],
      farmerAddress: ['', Validators.required],
      farmerPhoneNumber: ['', Validators.required]
    });
    this.brokerForm = this.formBuilder.group({
      brokerName: ['', Validators.required],
      brokerAddress: ['', Validators.required],
      brokerPhoneNumber: ['', Validators.required]
    });
    this.orderForm = this.formBuilder.group({
      brokerAmountPerTon: [],
      pointAtField: ['', Validators.required],
      pointRatePerTon: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.farmerForm.controls; }
  get b() { return this.brokerForm.controls; }
  get o() { return this.orderForm.controls; }

  onSubmitFarmerDetails() {
    this.farmerFormSubmitted = true;

    // stop here if form is invalid
    if (this.farmerForm.invalid) {
      return;
    }
    console.log('Farmer Name ', this.farmerForm.value.farmerName);
    console.log('Farmer Details ' + JSON.stringify(this.farmerForm.value))
  }

  onSubmitBrokerDetails() {
    this.brokerFormSubmitted = true;

    // stop here if form is invalid
    if (this.brokerForm.invalid) {
      return;
    }
    console.log('Broker Name ', this.brokerForm.value.brokerName);
    console.log('Broker Details ' + JSON.stringify(this.brokerForm.value))
  }

  onSubmitOrderDetails() {
    this.orderFormSubmitted = true;

    // stop here if form is invalid
    if (this.orderForm.invalid) {
      return;
    }
    console.log('Broker Amount Per Ton ', this.orderForm.value.brokerAmountPerTon);
    console.log('Order Details ' + JSON.stringify(this.orderForm.value))
    console.log('cultivationTeamDetailsData',this.cultivationTeamDetailsData);
  
  }


  orderWantsToKnowCultivationDataFn(eventData : Object)
  {
    this.cultivationTeamDetailsData = eventData
    console.log("cultivationTeamDetailsData",this.cultivationTeamDetailsData);
  }
  
}
