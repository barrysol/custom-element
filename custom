class ArticleList extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="articleList"></div>
    `;
    this.renderArticles();
  }

  // Sample article data
  articles = [
    { title: "Article Title 1", details: "Author, Journal, Year", year: 2023 },
    { title: "Article Title 2", details: "Author, Journal, Year", year: 2022 },
    // Add more articles here
  ];

  renderArticles() {
    const articleList = this.querySelector('#articleList');
    articleList.innerHTML = ''; // Clear existing content

    // Sort articles by year (latest first)
    this.articles.sort((a, b) => b.year - a.year);

    this.articles.forEach(article => {
      const articleItem = document.createElement('div');
      articleItem.className = 'article-item';

      const title = document.createElement('div');
      title.className = 'article-title';
      title.innerText = article.title;

      const details = document.createElement('div');
      details.className = 'article-details';
      details.innerText = article.details;

      articleItem.appendChild(title);
      articleItem.appendChild(details);
      articleList.appendChild(articleItem);
    });
  }
}

customElements.define('article-list', ArticleList);
