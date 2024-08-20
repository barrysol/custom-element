class ArticleList extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div style="font-family: Arial; font-size: 20px; color: red;">Hello, this is a test message!</div>`;
  }
}

customElements.define('article-list', ArticleList);
