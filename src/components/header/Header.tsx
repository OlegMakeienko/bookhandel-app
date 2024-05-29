import './header.css';
import Cart from "../cart/Cart.tsx";

function Header() {
    return (
        <header className="page-header">
            <div className="header content-wrapper">
                <img className="book-icon" src="/src/assets/read-book-icon.svg" alt="icon"/>
                <Cart />
            </div>
        </header>
    );
}

export default Header;