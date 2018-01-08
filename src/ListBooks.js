import React from 'react';
import './App.css'

let ListBooks = ( props ) => (
  <div className = "bookshelf">
    <h2 className = "bookshelf-title">{props.shelfTitle}</h2>
    <div className = "bookshelf-books">
      <ol className = "books-grid">
        {
          props.books && props.books.length > 0 && props.books.map((book) => (
            <li key = {book.id}>
              <div className = "book">
                <div className = "book-top">
                  <div className = "book-cover" style = {{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail
})` }}></div>
                  <div className = "book-shelf-changer">
                    <select onChange = {(event) => props.onUpdateShelf(book, event.target.value)} value = {book.shelf}>
                      <option value = "" disabled>Move to...</option>
                      <option value = "currentlyReading">Currently Reading</option>
                      <option value = "wantToRead">Want to Read</option>
                      <option value = "read">Read</option>
                      <option value = "none">None</option>
                    </select>
                  </div>
                </div>
                <div className = "book-title">{book.title}</div>
                {book.authors && <div className = "book-authors">{book.authors.join(', ')}</div>}
              </div>
            </li>
          ))
        }
      </ol>
    </div>
  </div>
)
export default ListBooks;
