import './bookItem.css';

type Book = {
    title : string,
    "author": string,
    "pages": number,
    "genre": string,
    "desc": string
}

type Props = {
    book : Book,
    addToCart : () => void
}

function BookItem({book, addToCart } : Props) {
    return (
        <div>
            <article className="book">
                <h2 className="book-title">{book.title}</h2>
                <h1 className="book-author">{book.author}</h1>
                <p className="book-desc">{book.desc}</p>
                <h1 className="book-genre">{book.genre}</h1>
                <button onClick={addToCart} className="add-book-btn">Add card</button>
            </article>
        </div>
    );
}

export default BookItem;