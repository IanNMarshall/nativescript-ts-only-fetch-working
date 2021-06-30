import { Observable } from '@nativescript/core'

export async function myhttp(
  request: RequestInfo
): Promise<any> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}
export class HelloWorldModel extends Observable {
  private _counter: number
  private _message: string

  constructor() {
    super()
    console.log("MyApp - onInit");
    const body = myhttp("https://jsonplaceholder.typicode.com/todos");
    body.then(body => console.log("MyApp - response", body));
    // Initialize default values.
    this._counter = 42
    this.updateMessage()
  }

  get message(): string {
    return this._message
  }

  set message(value: string) {
    if (this._message !== value) {
      this._message = value
      this.notifyPropertyChange('message', value)
    }
  }

  onTap() {
    this._counter--
    this.updateMessage()
  }

  private updateMessage() {
    if (this._counter <= 0) {
      this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!'
    } else {
      this.message = `${this._counter} taps left`
    }
  }
}
