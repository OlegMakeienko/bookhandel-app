import './header.css';
import Cart from "../cart/Cart.tsx";

type Props = {
    cartSize : number
}

function Header({cartSize} : Props) {
    return (
        <header className="page-header">
            <div className="header content-wrapper">
                <img className="book-icon" src="/src/assets/read-book-icon.svg" alt="icon"/>
                <Cart cartItems={cartSize} />
            </div>
        </header>
    );
}

export default Header;