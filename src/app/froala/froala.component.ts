import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  template: `
  <p>
    Froala works!
  </p>

  <div [froalaEditor]>Hello, Froala!</div>

  `
})
export class FroalaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
