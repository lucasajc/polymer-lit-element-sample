import {
  LitElement, html, css, customElement, property,
} from 'lit-element';

@customElement('word-counter')
class WordCounter extends LitElement {

  @property({type : String})
  value = '';

  wordcount = 0;

  countWords = (text: string): number => {
    return text.split(/[\s\n]+/)
      .filter((word: string) => word.length > 0)
      .length;
  }

  shouldUpdate(changedProperties: any) {
    this.wordcount = this.countWords(this.value);
    return changedProperties.has('value');
  }

  static get styles() {
    return css`
      .word-counter-container {
        display: flex;
        justify-content: flex-end;
      }
      .word-counter-text {
        font-size: 14px;
        line-height: 1.5;
        color: #656565;
        font-family: sans-serif;
      }
    `;
  }

  render() {
    return html`
      <div class="word-counter-container">
        <span class="word-counter-text">${this.wordcount} words.</span>
      </div>
    `;
  }
}

export default WordCounter;
