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

/* FEATURE 2 (section 2.2) - func should mutate the passed in div el adding specific tags
FUNCTION ARGS:
 div: an html ul el, this is what the func will modify
 author: an obj aka the obj that getAuthor() returns
EXPECTED FUNCTION OUTPUT:
<!-- where author could = {bio: 'Lewis Carroll is...', birthDate: 'Janua...', name: 'Lewis Car...', pictureUrl: 'https://...', wikipediaUrl: 'http://...'} -->
<div>
  <h2>Lewis Carroll</h2>
  <img src="https://covers.openlibrary.org/a/id/authors/OL22098A-M.jpg" alt="A picture of Lewis Carroll">
  <p>Born: January 27, 1832</p>
  <p>Lewis Carroll is well known throughout the world as the author of Alice's Adventures in Wonderland and  Through the Looking-Glass. Behind the famous pseudonym was Charles Lutwidge Dodgson, a mathematical lecturer at Oxford University with remarkably diverse talents. ([Source][1].)\r\n\r\n\r\n  [1]: http://lewiscarrollsociety.org.uk/pages/lewiscarroll/life.html</p>
  <a href="http://en.wikipedia.org/wiki/Lewis_Carroll">Wikipedia Link</a>
</div>
*/
export const renderAuthorInfo = (authorInfoEl, author) => {
  authorInfoEl.innerHTML = '';

  const authorName = document.createElement('h2');
  authorName.textContent = author.name;

  const authorImg = document.createElement('img');
  authorImg.src = author.pictureUrl;
  authorImg.alt = `A picture of ${author.name}`;

  const authorBirthDate = document.createElement('p');
  authorBirthDate.textContent = `Born: ${author.birthDate}`;

  const authorBio = document.createElement('p');
  authorBio.textContent = author.bio;

  const authorWikiLink = document.createElement('a');
  authorWikiLink.href = author.wikipediaUrl;
  authorWikiLink.textContent = 'Wikipedia Link';

  authorInfoEl.append(authorName, authorImg, authorBirthDate, authorBio, authorWikiLink);
};

export const renderNewUserForm = (newUserFormEl) => {
}

export const renderNewUser = (newUserEl, newUser) => {
}