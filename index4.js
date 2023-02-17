/*// Select the container element where the articles will be displayed
const container = document.getElementById('articles');

// Retrieve the articles from local storage or initialize an empty array
const articles = JSON.parse(localStorage.getItem('articles')) || [];

// Generate the HTML content for each article and append it to the container
articles.forEach(article => {
    const articleHtml = `
        <div class="article">
            <h2>${article.name}</h2>
            <img src="${article.image}">
            <p>${article.description}</p>
            <p>${article.content}</p>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', articleHtml);
});

const blogData = JSON.parse(localStorage.getItem('blogData'));

const blogDataDisplay = document.getElementById('blogData');

if (blogData) {
  blogDataDisplay.innerHTML = `
    <h2>${blogData.Articlename}</h2>
    <p>${blogData.ArticleDescription}</p>
    <img src="${blogData.ArticlePicture}" alt="${blogData.Articlename}" />
    <p>${blogData.message}</p>
  `;
} else {
  blogDataDisplay.innerText = 'No blog data found';
}
*/

// Get the container element to hold the articles
const articlesContainer = document.getElementById('articles-container');

// Get the articles from local storage
const existingArticles = localStorage.getItem('articles');
let articles = [];

// If there are articles in local storage, parse them into an array
if (existingArticles) {
  articles = JSON.parse(existingArticles);
}

// Loop through the articles array and create HTML elements for each article
articles.forEach(article => {
  // Create a container element for the article
  const articleContainer = document.createElement('div');
  articleContainer.classList.add('article');

  // Create the HTML elements for the article data
  const articleName = document.createElement('h2');
  articleName.textContent = article.Articlename;
  
  const articleDescription = document.createElement('p');
  articleDescription.textContent = article.ArticleDescription;
  const articleContent = document.createElement('div');
  articleContent.innerHTML = article.message;

  // Append the article data elements to the article container
  articleContainer.appendChild(articleName);

  articleContainer.appendChild(articleDescription);
  articleContainer.appendChild(articleContent);

  // Append the article container to the articles container
  articlesContainer.appendChild(articleContainer);
});
