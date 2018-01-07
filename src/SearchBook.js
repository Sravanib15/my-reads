import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListBooks from './ListBooks';
import * as BooksAPI from './utils/BooksAPI';

class SearchBook extends Component {

  state = {
    books: []
  }

  searchQuery = (query) => {
    BooksAPI.search(query, 10).then((books) => {
      this.setState({ books });
    })
  }

  render() {
    return (
      <div className = "search-books">
        <div className = "search-books-bar">
          <Link to = "/" className="close-search" >Close</Link>
          <div className = "search-books-input-wrapper">
            <input
              type = "text"
              placeholder = "Search by title or author"
              value = {this.props.query}
              onChange = {(event) => this.searchQuery(event.target.value)}
            />

          </div>
        </div>
        <div className = "search-books-results">
          <ol className = "books-grid">
            <ListBooks
              shelfTitle = ""
              books = {this.state.books}
              onUpdateShelf = {this.props.updateShelf}
            />
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook;
