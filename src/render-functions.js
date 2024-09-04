/* FEATURE 1 (section 1.2) - func should mutate the passed in bookListEl and add a bunch of li els to it, one for each book
FUNCTION ARGS:
 bookListEl: an html ul el, this is what the func will modify
 books: an arr of books aka the arr of objs that getFirstThreeFantasyBooks() returns
EXPECTED FUNCTION OUTPUT:
<!-- where books = [{title: "Alice's Adv..", author: { name: Lewis Car.., urlKey: '/authors/OL22098A' }, coverUrl: 'https://...'}, {title: 'Treasure I...', author: {…}, coverUrl: 'https://...'}, {...}] -->
<li>
  <img src="https://covers.openlibrary.org/a/id/13859660-M.jpg" alt="An old cover of Treasure Island">
  <p>Title: Treasure Island</p>
  <button data-author-url-key="/author/OL25963A">View Robert Louis Stevenson</button>
</li>
*/
export const renderBookList = (bookListEl, books) => {
  bookListEl.innerHTML = ''; //clearing el so that it's ready for the next rendering

  books.forEach((book) => {
    const li = document.createElement('li');

    const img = document.createElement('img');
    img.src = book.coverUrl;
    img.alt = `An old cover of ${book.title}`;

    const p = document.createElement('p');
    p.textContent = `Title: ${book.title}`;

    const button = document.createElement('button');
    button.textContent = `View ${book.author.name}`;
    button.dataset.authorUrlKey = book.author.urlKey;

    li.append(img, p, button);
    bookListEl.appendChild(li);
  });
};

export const renderAuthorInfo = (authorInfoEl, author) => {
}

export const renderNewUserForm = (newUserFormEl) => {
}

export const renderNewUser = (newUserEl, newUser) => {
}