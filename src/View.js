import React from 'react'

const View = ({ books, deleteBook }) => {
    return books.map((book,isbn) => (
      <tr key={isbn}>
        <td>{book.isbn}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td><button className="btn btn-danger" onClick={()=>{deleteBook(book.isbn)}}>Delete</button></td>
      </tr>
    ));
  };

export default View