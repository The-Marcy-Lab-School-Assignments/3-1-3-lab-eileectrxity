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

// //refactored app integration at line 68- IGNORE
// export default async function app(appDiv) {
//   const bookListEl = document.createElement('ul');
//   bookListEl.id = 'book-list';
//   appDiv.append(bookListEl);

//   const authorInfoEl = document.createElement('div');
//   authorInfoEl.id = 'author-info';
//   appDiv.append(authorInfoEl);

//   const newUserEl = document.createElement('div');
//   newUserEl.id = 'new-user';
//   appDiv.append(newUserEl);

//   const newUserFormEl = document.createElement('form');
//   newUserFormEl.id = 'new-user-form';
//   appDiv.append(newUserFormEl);
  
//   //feature 3- q3.2: render the user form
//   renderNewUserForm(newUserFormEl);

//   //feature 1- q1.1: fetch the books
//   const books = await getFirstThreeFantasyBooks();
//   console.log(books);

//   //feature 1- q1.2: render the books
//   renderBookList(bookListEl, books);

//   //testing feature 2- q2.1: fetch the author
//   const authors = await getAuthor('/authors/OL22098A');
//   console.log(authors);

//   //feature 2- q2.2: render the author
//   bookListEl.addEventListener('click', async (e) => { //using event delegation to handle events
//     // console.log(e, e.target);
//     if (e.target.tagName === 'BUTTON') { //technically don't need to check for this, see below (if el clicked is a button within the parent el)
//       // console.log(e.target.dataset.authorUrlKey); //debugging
//       let urlKey = e.target.dataset.authorUrlKey; //making the urlKey the key of whichever author was clicked, will only have a value if a button was clicked
//       await getAuthor(urlKey) //feature 2- q2.1: fetch the author
//         .then((author) => renderAuthorInfo(authorInfoEl, author));
//     }
//   });

//   //feature 3- q3.1: create the new user
//   newUserFormEl.addEventListener('submit', async (e) => { //handling form submit event
//     e.preventDefault(); //preventing page from refreshing
//     const formObj = Object.fromEntries(new FormData(newUserFormEl));
//     // console.log(e, e.target, formObj);
//     formObj.isCool = Boolean(formObj.isCool);
//     await createNewUser(formObj)
//       .then((newUser) => renderNewUser(newUserEl, newUser)); //feature 3- q3.4: render the new user
//     newUserFormEl.reset(); //clearing form after submission
//   });
// };

//app integration refactored + code simplified with better error handling
export default async function app(appDiv) {
  function createEl(tag, id) { //personal challenge- helper func to simplify + abstract away the creation of elements
    const el = document.createElement(tag);
    el.id = id;
    return el;
  }

  const appEls = {
    bookListEl: createEl('ul', 'book-list'),
    authorInfoEl: createEl('div', 'author-info'),
    newUserEl: createEl('div', 'new-user'),
    newUserFormEl: createEl('form', 'new-user-form')
  };
  Object.values(appEls).forEach((el) => appDiv.append(el)); //getting the values of each appEl + appending them to the appDiv

  //feature 1- q1.1: fetch the books
  try {
    const books = await getFirstThreeFantasyBooks();
    renderBookList(appEls.bookListEl, books); //feature 1- q1.2: render the books
  }
  catch (err) {
    console.error('Failed to fetch and render books:', err);
  };

  //feature 3- q3.2: render the form
  try {
    renderNewUserForm(appEls.newUserFormEl);
  }
  catch (err) {
    console.error('Failed to render new user form:', err);
  };

  //feature 2- q2.1: fetch the author
  appEls.bookListEl.addEventListener('click', async (e) => {
    if (e.target.tagName === 'BUTTON') {
      const urlKey = e.target.dataset.authorUrlKey;
      
      try {
        const author = await getAuthor(urlKey);
        renderAuthorInfo(appEls.authorInfoEl, author); //feature 2- q2.2: render the author
      }
      catch (err) {
        console.error('Failed to fetch and render author:', err);
      }
    }
  });

  //feature 3- q3.1: create the new user
  appEls.newUserFormEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(appEls.newUserFormEl);
    const formObj = Object.fromEntries(formData);
    formObj.isCool = Boolean(formObj.isCool);

    try {
      const newUser = await createNewUser(formObj);
      renderNewUser(appEls.newUserEl, newUser); //feature 3- q3.4: render the new user
      appEls.newUserFormEl.reset();
    } catch (err) {
      console.error('Failed to create and render new user:', err);
    }
  });
};
