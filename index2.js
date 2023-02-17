const form = document.getElementById('form');
const Articlename = document.getElementById('Articlename');
const ArticleDescription = document.getElementById('ArticleDescription');
const ArticlePicture = document.getElementById('ArticlePicture');

const message = document.getElementById('message');

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();

  // If all inputs are valid, save the data to local storage
  if (isFormValid()) {
    const reader = new FileReader();
    reader.readAsDataURL(ArticlePicture.files[0]);
    reader.onload = () => {
      const article = {
        Articlename: Articlename.value.trim(),
        ArticleDescription: ArticleDescription.value.trim(),
        ArticlePicture: reader.result,
        message: message.value.trim(),
      };
      saveArticleToLocalStorage(article);
    };
  }
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const validateInputs = () => {
  const ArticlenameValue = Articlename.value.trim();
  const ArticleDescriptionValue = ArticleDescription.value.trim();
  const ArticlePictureValue = ArticlePicture.value;
  const messageValue = message.value.trim();

  if (ArticlenameValue === '') {
    setError(Articlename, 'Article Name is required');
  } else {
    setSuccess(Articlename);
  }

  if (ArticleDescriptionValue === '') {
    setError(ArticleDescription, 'Article Description is required');
  } else {
    setSuccess(ArticleDescription);
  }

  if (ArticlePictureValue === '') {
    setError(ArticlePicture.parentElement, 'Article Picture is required');
  } else {
    setSuccess(ArticlePicture.parentElement);
  }

  if (messageValue === '') {
    setError(message, 'Article Content is required');
  } else {
    setSuccess(message);
  }
};

// Check if all inputs are valid
const isFormValid = () => {
  const ArticlenameValue = Articlename.value.trim();
  const ArticleDescriptionValue = ArticleDescription.value.trim();
  const ArticlePictureValue = ArticlePicture.value;
  const messageValue = message.value.trim();

  return ArticlenameValue !== '' && ArticleDescriptionValue !== '' && ArticlePictureValue !== '' && messageValue !== '';
}

const saveArticleToLocalStorage = article => {
  let articles = [];

  // Get existing articles from local storage
  const existingArticles = localStorage.getItem('articles');
  if (existingArticles) {
    articles = JSON.parse(existingArticles);
  }

  // Add the new article to the articles array
  articles.push(article);

  // Save the updated articles array to local storage
  localStorage.setItem('articles', JSON.stringify(articles));

  // Output the contents of the articles array to the console
  console.log(articles);
}

