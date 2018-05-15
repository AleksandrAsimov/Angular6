import { Component } from '@angular/core';

function log(className) {
  console.log(className)
  return (...args) => {
    console.log("Aruments pass to this class's constructor", args)
    return new className(...args)
  }
}

@log
class myExampleClass {
  constructor(arg1, arg2) {
    console.log("Constructor fired!")
  }
}

const myClass = new myExampleClass(5, 10)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    console.log("This statement was generated by the constractor", this.aSimpleMethod(5, 2))
  }

  aSimpleMethod(a, b) {
    return a * b
  }

}
