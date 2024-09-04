//3.1.3 Lab: Mod 3 Assessment - Fetch and Render by Eileen

const baseUrl = 'https://openlibrary.org';

//FEATURE 1 (section 1.1) - func that takes in no args and returns 3 books of the fantasy genre
// //q1.1 working solution with comments- IGNORE
// export const getFirstThreeFantasyBooks = async () => { //using async/await syntax
//   try {
//     const response = await fetch(`${baseUrl}/subjects/fantasy.json`); //noting this API link is using an older convention, ending in `.json` rather than `/api`; fetching data from the Open Library API fantasy genre endpoint
//     if (!response.ok) throw new Error('Failed to get fantasy books'); //checking if response is successful (status code within 200-299 range) + throwing an err for the catch block to handle if not
//     const data = await response.json(); //parsing the resolved JSON response from the server + converting it back to a JS obj
//     // console.log('data:', data); //debugging- could also have used debugger instead to debug directly in dev tools console
//     const books = data.works.slice(0, 3).map((work) => { //extracting the first 3 books from the 'works' arr + transform each book obj by mapping
//       // console.log('work el:', work, 'work authors:', work.authors, work.authors[0].name); //debugging
//       const workObj = { //new obj to format the books data
//         title: work.title,
//         author: { //transforming the authors obj
//           name: work.authors[0].name,
//           urlKey: work.authors[0].key 
//         },
//         coverUrl: `https://covers.openlibrary.org/a/id/${work.cover_id}-M.jpg`
//       }
//       // console.log('obj created:', workObj); //debugging
//       return workObj; //returning the newly created book obj for the next el to map/transform
//     });
//     // console.log('books:', books, books.length); debugging
//     return books; //returning the arr of books objs instead of a data tuple [books, null] in order to pass required test specs
//   }
//   catch (err) { //catch any errors that occurred during the try block
//     console.warn(`getFirstThreeFantasyBooks() error! Message: ${err.message}`);
//     return null; //returning null instead of err tuple [null, err] to pass required test specs
//   }
// };

//q1.1 solution simplified without comments
export const getFirstThreeFantasyBooks = async () => {
  try {
    const response = await fetch(`${baseUrl}/subjects/fantasy.json`);
    if (!response.ok) throw new Error('Failed to get fantasy books');
    const books = await response.json();
    return books.works.slice(0, 3).map((work) => ({
      title: work.title,
      author: {
        name: work.authors[0].name,
        urlKey: work.authors[0].key,
      },
      coverUrl: `https://covers.openlibrary.org/a/id/${work.cover_id}-M.jpg`
    }));
  }
  catch (err) {
    console.warn(`getFirstThreeFantasyBooks() error! Message: ${err.message}`);
    return null;
  }
};

//FEATURE 2 (section 2.1) - func that takes in a urlKey (from getThreeFantasyBooks)
// //q2.1 working solution with comments- IGNORE
// export const getAuthor = async (urlKey) => {
//   try {
//     // console.log(urlKey); //debugging
//     const response = await fetch(`${baseUrl}${urlKey}.json`);  //urlKey contains the route handle /authors/ so need to incorporate that
//     // console.log(response.ok, response.status, response.statusText); //debugging
//     if (!response.ok) throw new Error('Failed to get author');
//     const data = await response.json();
//     // console.log('data:', data); //logs an obj with the full author info
//     const author = { //creating a new obj, accessing the response data through dot notation
//       birthDate: data.birth_date,
//       bio: data.bio,
//       wikipediaUrl: data.wikipedia,
//       name: data.name,
//       pictureUrl: `https://covers.openlibrary.org/a/id/${data.photos[0]}-M.jpg`, //just getting the first photo
//     }
//     // console.log(author, author.bio, author.wikipediaUrl); //debugging
//     return author; //returning the newly formatted author data obj
//   }
//   catch (err) {
//     console.warn(`getAuthor() error! Message: ${err.message}`);
//     return null;
//   }
// };

//q2.1 simplified without comments
export const getAuthor = async (urlKey) => {
  try {
    const response = await fetch(`${baseUrl}${urlKey}.json`);
    if (!response.ok) throw new Error('Failed to get author');
    const author = await response.json();
    return {
      birthDate: author.birth_date,
      bio: author.bio,
      wikipediaUrl: author.wikipedia,
      name: author.name,
      pictureUrl: `https://covers.openlibrary.org/a/id/${author.photos[0]}-M.jpg`,
    }
  }
  catch (err) {
    console.warn(`getAuthor() error! Message: ${err.message}`);
    return null;
  }
};

export const createNewUser = () => {
}