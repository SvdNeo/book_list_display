
import './App.css';
import React from 'react';
import { useState } from'react';

function App() {
  const[books, setBooks] = useState([]);
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
  }
  console.log(books)
  return (
    <div className="App">
      <div className="container">
      <h1 className="mt-5">Book Form</h1>
      <form onSubmit={addBook}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input type="text" className="form-control" id="author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="isbn" className="form-label">ISBN</label>
          <input type="text" className="form-control" id="isbn" name="isbn" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
      <div className='display'></div>
    </div>
  );
}

export default App;
