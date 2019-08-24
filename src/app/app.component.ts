import { Component, OnInit } from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      device: new FormGroup({
        deviceType: new FormControl('Core Switch'),
        deviceOEM: new FormControl('Cisco', [Validators.required, Validators.minLength(5)]),
        deviceIP: new FormControl('10.0.0.1')
      }),
      user: new FormGroup({
        name: new FormControl('jeer'),
        age: new FormControl(27)
      })
      
    });

    console.log(this.form);
  }
}
