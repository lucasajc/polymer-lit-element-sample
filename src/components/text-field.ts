import {
  LitElement, html, css, customElement, property,
} from 'lit-element';
import './word-counter.ts';

@customElement('text-field')
class TextField extends LitElement {
  @property({ type: String })
  value = '';

  handleInputTextUpdate = (newValue: string): void => {
    this.value = newValue;
  }

  static get styles() {
    return css`
      .text-field-container {
        width: 400px;
        height: 200px;
      }
      .text-field {
        padding: 4px 12px;
        font-size: 14px;
        line-height: 1.5;
        background-color: #fff;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        transition: all 0.3s ease;
        font-family: sans-serif;
        resize: none;
        width: 100%;
        height: 100%;
      }
      .text-field:focus {
        outline: 0;
        border-color: #40a9ff;
        box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
      }
    `;
  }

  render() {
    return html`
      <div class="text-field-container">
        <textarea class="text-field" @keyup=${(e) => this.handleInputTextUpdate(e.target.value)}>${this.value}</textarea>
        <word-counter value=${this.value} />
      </div>
    `;
  }
}

export default TextField;
