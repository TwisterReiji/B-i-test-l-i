const styles = `
<style>
.container {
  text-align: center;
  font-size:30px
}
@media only screen and (max-width: 768px){

}
</style>`

class Question extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this.cauhoiht = this.getAttribute("question")
    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
     <p>Question <span id="question">${this.cauhoiht}</span></p>
    </div>`
  }

  static get observedAttributes() {
    return ["question"]
  }
}
window.customElements.define("question-c", Question)