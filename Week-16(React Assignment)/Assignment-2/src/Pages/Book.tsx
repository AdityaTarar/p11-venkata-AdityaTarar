import React, { PureComponent } from "react";

interface BookProps {
  title: string;
  author: string;
  year: number;
}

class Book extends PureComponent<BookProps> {
  render() {
    const { title, author, year } = this.props;

    return (
      <div className="book">
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <p>Year: {year}</p>
      </div>
    );
  }
}

export default Book;
