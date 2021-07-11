import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  //frm = new FormGroup({
  //  name: new FormControl('clientname'),
  //  address: new FormControl('clientaddress'),
  //  address2: new FormControl('clientaddress2'),
  //  city: new FormControl('clientcity'),
  //  state: new FormControl('clientstate'),
  //  pincode: new FormControl('clientpincode'),
  //  country: new FormControl('clientcountry')
  //});
  //constructor(private service: ClientsService) { }
  //ngOnInit() { }
  //submitPost(e) {
  //  e.preventDefault();
  //  let params = {
  //    name: this.frm.get('name').value,
  //    address: this.frm.get('address').value,
  //    address2: this.frm.get('address2').value,
  //    city: this.frm.get('city').value,
  //    state: this.frm.get('state').value,
  //    pincode: this.frm.get('pincode').value,
  //    country: this.frm.get('country').value,
  //  };
  //  this.service.postData(params).subscribe(response => {
  //    console.log(response);
  //  });
  //}

}



