import './App.css'
import Header from "./components/header/Header.tsx";
import BookList from "./components/bookList/BookList.tsx";

function App() {
    let cartItems : number = 0;

    const addToCart = () => {
        cartItems++;
        console.log(cartItems);
    }
  return (
    <div className="app">
        <Header cartItems={cartItems} />
        <BookList addToCart={addToCart} />
    </div>
  )
}

export default App
