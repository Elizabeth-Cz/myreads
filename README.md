# My Reads Project!

This repository is my answer to the Udacity My Reads project in the React Fundamental course as part of the Masterschool's front-end development program.

The app is using a Book API provided by Udacity, the user can add books using a search bar and track which book whey are reading. The user can see three shelves: "Currenyly Reading", "Want to Read" and "Read". In each books dropdown menu the user can change the shelf, or remove it from tracking completely.

## Getting Started

The project can be built with npm or yarn, so choose one of the approach bellow in case you don't have any installed on your system.

- npm is distributed with Node.js which means that when you download Node.js,
  you automatically get npm installed on your computer. [Download Node.js](https://github.com/facebookincubator/create-react-app)

or

- Yarn is a package manager built by Facebook Team and seems to be faster than npm in general. [Download Yarn](https://yarnpkg.com/en/docs/install)

## Installing

to download this project follow the instructions below:

```
git clone https://github.com/computationalcore/myreads
cd myreads
```

If you are using npm:

npm

```
npm install
npm start
```

or if you are using yarn:

yarn

```
yarn install
yarn start
```

## Backend Server

To simplify development process, Udacity provides a backend server for you to develop against.
The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations
on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults);
```

- query: `<String>`
- maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Thank you!
