import { Component } from '@angular/core';
import {of} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  info = {
    message: 'Welcome to angular debug app'
  };

  changeMessage(newMessage): void {
    this.info.message = newMessage;

    // console.log(this.info.message);
    // console.error(this.info.message);

    // debugger;
    // const a = 10;
    // debugger;
    // const b = 11;
    // debugger;
    // const c = 12;
    // debugger;

    // $0
    // ng.probe($0)
    // ng.probe($0).componentInstance

    // modyfikowanie wartosci zmiennej
    // ng.probe($0).componentInstance.info.message = 'Hello world'
    // ng.probe($0).injector.get(ng.coreTokens.ApplicationRef).tick()

    const numbers = of(1, 2, 3, 4, 5);
    numbers.pipe(
      tap(x => console.log(`BEFORE MAP: ${x}`)),
      map(x => x * 10),
      tap(x => console.log(`AFTER MAP: ${x}`))
    ).subscribe(data => console.log(data));

  }

}
