const articlesContainer = document.getElementById('articles-container');

// Get the articles array from local storage
const articles = JSON.parse(localStorage.getItem('articles'));

// Loop through the articles array and create a HTML element for each article
articles.forEach(article => {
  const articleElement = document.createElement('div');
  articleElement.classList.add('article');

  const imageElement = document.createElement('img');
  imageElement.src = article.ArticlePicture;
  articleElement.appendChild(imageElement);

  const nameElement = document.createElement('h2');
  nameElement.innerText = article.Articlename;
  articleElement.appendChild(nameElement);

  // Add the article element to the articles container
  articlesContainer.appendChild(articleElement);
});
