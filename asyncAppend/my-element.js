import {LitElement, html} from 'lit';
import {asyncAppend} from 'lit/directives/async-append.js';

async function* tossCount(number) {
    for(let i = 0; i<number; i++){
       yield Math.random() > 0.5 ? 'heads' : 'tails'
       await new Promise((p) => setTimeout(p,500))
    }
}

class MyElement extends LitElement {
  static properties = {
     tosses : {}
  }
  constructor(){
     super();
     this.tosses = tossCount(10)
  }
  render(){
     return html`
          <ul>${asyncAppend(this.tosses, (v) => html`<li>${v}</li>`)}</ul>
         `
  }

}
customElements.define('my-element', MyElement);

