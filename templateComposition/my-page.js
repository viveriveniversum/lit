import {LitElement, html,css} from 'lit';

class MyPage extends LitElement {
  static styles = css`
     :host {
      display: block;
      background-color: lightgray;
      padding: 8px;
      font-size: 35px;
     }
      header{
      color:turquoise
      }
      `
  
  static properties ={
     article:{},
  }
  constructor(){
     super();
     this.article = {
        title : 'Bir Tasavvur',
        text: 'Defining partial templates as instance methods breaks the template into manageable piecesand allows a subclass to override individual parts of the template.' 
     }
  }
  getHeader(){
     return html`<header><h1>${this.article.title}</h1></header>`
  }
  getArticle(){
    return html`
        <div><p>${this.article.text}</p></div>
        `
  }
  render(){
     return html`
         ${this.getHeader()}
         ${this.getArticle()}
         `
  }
}
customElements.define('my-page', MyPage);

