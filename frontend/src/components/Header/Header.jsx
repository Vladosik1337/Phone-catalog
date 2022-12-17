import { Link } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <header className="header">
      <section className="header_left-side">
        <Link to="/">
          <div className="logo_container">
            <img src="/img/Logo.png" alt="" />
          </div>
        </Link>
        <nav className="header_nav">
          <ul className="header_list">
            <li className="header_item">
              <Link to="/" className="header_link">
                <p className="header_text">Home</p>
              </Link>
            </li>
            <li className="header_item">
              <Link to="/products" className="header_link">
                <p className="header_text">Phones</p>
              </Link>
            </li>
            <li className="header_item">
              <Link to="/tablets" className="header_link">
                <p className="header_text">Tablets</p>
              </Link>
            </li>
            <li className="header_item">
              <Link to="/accessories" className="header_link">
                <p className="header_text">Accessories</p>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="header_right-side">
        <Link to="/favourites">
          <div className="header_favourites">
            <img
              src="/img/favourite_icon.svg"
              alt="favourite_icon"
              className="header_favourite_icon"
            />
          </div>
        </Link>
        <Link to="/store">
          <div className="header_store">
            <img
              src="/img/shoping_bag.svg"
              alt="shoping_bag"
              className="header_store_icon"
            />
          </div>
        </Link>
      </section>
    </header>
  );
}
