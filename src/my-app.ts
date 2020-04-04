import {LitElement, html, customElement, property} from 'lit-element';

@customElement('my-app')
export class MyApp extends LitElement {
  @property()
  name = 'World';

  render() {
    return html` <h1>Hello, ${this.name}</h1> `;
  }
}
