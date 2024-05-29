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


function BookList() {
    const bookList: Book[] = [...bookJson];

    return (
        <section className="page-bookList">
            <div className=" bookList content-wrapper">
                {
                    bookList.map((book, index) => {
                        //return <p>{book.author}</p>
                        return <BookItem key={ index } book={ book } />
                    })
                }
            </div>
        </section>
    );
}

export default BookList;