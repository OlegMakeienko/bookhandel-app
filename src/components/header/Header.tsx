import './header.css';
import Cart from "../cart/Cart.tsx";

type Props = {
    cartItems : number
}

function Header({cartItems} : Props) {
    return (
        <header className="page-header">
            <div className="header content-wrapper">
                <img className="book-icon" src="/src/assets/read-book-icon.svg" alt="icon"/>
                <Cart cartItems={cartItems} />
            </div>
        </header>
    );
}

export default Header;