import './bookItem.css';
import Book from "../../models/Book.ts";
import useCartStore from "../../stores/cart-store.ts";

type Props = {
    book: Book
}

function BookItem({ book }: Props) {

    const { decreaseQty, increaseQty } = useCartStore(state =>({
        decreaseQty : state.decreaseQty,
        increaseQty : state.increaseQty
    }))

    return (
        <div>
            <article className="book">
                <h2 className="book-title">{book.title}</h2>
                <h1 className="book-author">{book.author}</h1>
                <p className="book-desc">{book.desc}</p>
                <h1 className="book-genre">{book.genre}</h1>
                <div className="book-counter">
                    <button onClick={ () => decreaseQty(book.title) } className="add-book-btn">remove book</button>
                    <p>{ book.qty }</p>
                    <button onClick={ () => increaseQty(book.title) } className="add-book-btn">add book</button>
                </div>
            </article>
        </div>
    );
}

export default BookItem;