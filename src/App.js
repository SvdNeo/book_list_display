import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import View from './View';

function App() {
  const getDatafromLS = () => {
    const data = localStorage.getItem('books');
    console.log(data);
    if (data) {
      return JSON.parse(data);
    }
    else {
      return [];
    }
  }

  // Initialize state with data from localStorage
  const [books, setBooks] = useState(getDatafromLS());
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');

  const addBook = (e) => {
    e.preventDefault();
    let book = { title: title, author: author, isbn: isbn };
    setBooks([...books, book]);
    setTitle('');
    setAuthor('');
    setIsbn('');
  };

  // Update localStorage whenever books state changes
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <div className="App">
      
      <div className="container">
        
        <div className="row">
          <div className="col-lg-6 bg-white p-4 ">
          <h1 className="mt-5">Book Form</h1>
            <form onSubmit={addBook}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="author" className="form-label">
                  Author
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  name="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="isbn" className="form-label">
                  ISBN
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="isbn"
                  name="isbn"
                  value={isbn}
                  onChange={(e) => setIsbn(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-lg-6 bg-light text-white p-4">
            <div className="display">
              {books.length > 0 && (
                <>
                  <h1 className="mt-5">Book List</h1>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">ISBN</th>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <View books={books} deleteBook={(isbn) => setBooks(books.filter((book) => book.isbn!== isbn))} />
                    </tbody>
                  </table>
                </>
              )}
              {books.length < 1 && <>No books added yet</>}
            </div>
            <div className="text-center mt-3">
              <button className="btn btn-primary btn-md" onClick={() => { setBooks([]) }}>Remove All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
