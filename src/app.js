import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from './render-functions.js';
import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from './fetch-functions.js';

export default async function app(appDiv) {
  const bookListEl = document.createElement('ul');
  bookListEl.id = 'book-list';
  appDiv.append(bookListEl);

  const authorInfoEl = document.createElement('div');
  authorInfoEl.id = 'author-info';
  appDiv.append(authorInfoEl);

  const newUserEl = document.createElement('div');
  newUserEl.id = 'new-user';
  appDiv.append(newUserEl);

  const newUserFormEl = document.createElement('form');
  newUserFormEl.id = 'new-user-form';
  appDiv.append(newUserFormEl);
  // Render the form!
  // renderNewUserForm;

  //feature 1- q1.1: fetch the books
  const books = await getFirstThreeFantasyBooks();
  console.log(books);

  //feature 1- q1.2: render the books
  renderBookList(bookListEl, books);

  //testing feature 2- q2.1: fetch the author
  const authors = await getAuthor('/authors/OL22098A');
  console.log(authors);

  // bookListEl.addEventListener('???', () => {})

  // newUserFormEl.addEventListener('???', () => {})
}
