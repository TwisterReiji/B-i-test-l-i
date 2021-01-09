const styles = `
<style>
.container {
  text-align: center;
}
.container p{
  font-size:30px
}
#diem{
  font-size:30px
}
</style>`

class Score extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this.diemht = this.getAttribute("diem")
    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
    <h2>F5 lần nữa đến khi hiển thị 5 câu hỏi</h2>
      <p>Your Score</p>
      <h2 id="diem">${this.diemht}</h2>
    </div>`
  }

  static get observedAttributes() {
    return ["diem"]
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this._shadowRoot.getElementById("diem").innerHTML = newVal
  }
}
window.customElements.define("score-s", Score)