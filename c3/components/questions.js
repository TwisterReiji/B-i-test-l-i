const styles = `
<style>
.container {
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 20px;
    width: 50%;
    margin: auto;
    
}
.question {
  padding: 10px;
  text-align: center;
  font-weight: 600;
}
</style>`

class Questions extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  async connectedCallback() {
    this.questionData = await JSON.parse(this.getAttribute("question"))
    this.index = parseInt(this.getAttribute("index"))
    this._shadowRoot.innerHTML = await this.generateQuestion(this.questionData)
  }

  async generateQuestion(questionData) {
    const { question, answers, correctAnswer } = questionData
    let html = ``

    answers.forEach((item) => {
      html += `<answer-s id=${this.index} answer="${item}" correct="${
        item === correctAnswer
      }" key="index"></answer-s>`
    })

    return `
    ${styles}
    <div class="container">
     <div class="question">
      ${question}
     </div> 
     ${html}
    </div>`
  }
}
window.customElements.define("question-s", Questions)