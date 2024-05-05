import './App.css'
import Header from "./components/header/Header.tsx";
import BookList from "./components/bookList/BookList.tsx";
import {useState} from "react";

function App() {
    const [cart, setCart] = useState<number>(0);

    const addToCart = () => {
        setCart(prevCart => prevCart + 1);
    }

    const removeFromCart = () => {
        setCart(prevCart => prevCart - 1);
    }

  return (
    <div className="app">
        <Header cartSize={cart} />
        <BookList addToCart={addToCart} removeFromCart={removeFromCart} />
    </div>
  )
}

export default App
