import './bookList.css';
import BookItem from "../bookItem/BookItem.tsx";
import axios from "axios";
import { useEffect, Key} from "react";
import useCartStore from "../../stores/cart-store.ts";
import Book from '../../models/Book.ts';


function BookList() {
    const { cart, addBooks } = useCartStore(state => ({
        cart : state.cart,
        addBooks : state.addBooks
    }));

    useEffect(() => {
        axios.get('https://santosnr6.github.io/Data/books.json')
            .then(response => {
                addBooks(response.data);
            })
    }, []);

    return (
        <section className="page-bookList">
            <div className=" bookList content-wrapper">
                {
                    cart.map((book: Book, index: Key | null | undefined) => {
                        //return <p>{book.author}</p>
                        return <BookItem key={ index } book={ book } />
                    })
                }
            </div>
        </section>
    );
}

export default BookList;