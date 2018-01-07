import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css'
import ListBooks from './ListBooks';
import * as BooksAPI from './utils/BooksAPI';
import SearchBook from './SearchBook';


class BooksApp extends React.Component {
  state = {
    books: []
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat(book)
    }))
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <SearchBook
            searchQuery={this.searchQuery}
            updateShelf={this.updateShelf}
          />
        )}/>
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <div>
                <ListBooks
                  shelfTitle= "Currently Reading"
                  books={this.state.books.filter((book) => book.shelf === 'currentlyReading')}
                  onUpdateShelf = {this.updateShelf}
                />
                <ListBooks
                  shelfTitle= "Want to Read"
                  books={this.state.books.filter((book) => book.shelf === 'wantToRead')}
                  onUpdateShelf = {this.updateShelf}
                />
                <ListBooks
                  shelfTitle= "Read"
                  books={this.state.books.filter((book) => book.shelf === 'read')}
                  onUpdateShelf = {this.updateShelf}
                />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
