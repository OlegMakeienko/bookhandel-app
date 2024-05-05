import './bookList.css';
import bookJson from '../../assets/books.json';
import BookItem from "../bookItem/BookItem.tsx";

type Book = {
    title: string,
    "author": string,
    "pages": number,
    "genre": string,
    "desc": string
}

type BookListProps = {
    addToCart : () => void,
    removeFromCart : () => void
}

function BookList({addToCart, removeFromCart}: BookListProps) {
    const bookList: Book[] = [...bookJson];

    return (
        <section className="page-bookList">
            <div className=" bookList content-wrapper">
                {
                    bookList.map((book, index) => {
                        //return <p>{book.author}</p>
                        return <BookItem key={index} book={book} addToCart={addToCart} removeFromCart={removeFromCart}/>
                    })
                }
            </div>
        </section>
    );
}

export default BookList;