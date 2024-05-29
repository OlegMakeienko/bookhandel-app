import './bookItem.css';
import {useState} from "react";
import useCartStore from "../../stores/cart-store.ts";

type Book = {
    title: string,
    "author": string,
    "pages": number,
    "genre": string,
    "desc": string
}

type Props = {
    book: Book
}

function BookItem({ book }: Props) {
    const [bookBalance, setBookBalance] = useState<number>(0);
    const { increment, decrement } = useCartStore(state => ({
        increment : state.increment,
        decrement : state.decrement
    }));

    const decreaseBookBalance = () => {
        if (bookBalance > 0) {
            setBookBalance(b => b - 1);
            decrement();
        }
    }

    const increaseBookBalance = () => {
        setBookBalance(b => b + 1);
        increment();
    }

    return (
        <div>
            <article className="book">
                <h2 className="book-title">{book.title}</h2>
                <h1 className="book-author">{book.author}</h1>
                <p className="book-desc">{book.desc}</p>
                <h1 className="book-genre">{book.genre}</h1>
                <div className="book-counter">
                    <button onClick={decreaseBookBalance} className="add-book-btn">remove book</button>
                    <p>{bookBalance}</p>
                    <button onClick={increaseBookBalance} className="add-book-btn">add book</button>
                </div>
            </article>
        </div>
    );
}

export default BookItem;