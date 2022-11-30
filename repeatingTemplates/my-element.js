import {LitElement, html,css} from 'lit';

export class MyElement extends LitElement {
   static properties = {
      list :{}
   }
   static styles = css`
       
       li{
         list-style: none;
       } 

       `
   constructor(){
      super();
      this.list = [ 'Onur', 'Songul', 'Gulnihal']
   }

   render(){
      return html`

          <ul> 
          ${this.list.map((item,index) => 
             html`<li>${index+1}  : ${item}</li>`
          )}
          </ul>
          `
   }
  
}
customElements.define('my-element', MyElement);

