import './App.css'
import Header from "./components/header/Header.tsx";
import BookList from "./components/bookList/BookList.tsx";

function App() {

  return (
    <div className="app">
        <Header />
        <BookList />
    </div>
  )
}

export default App
