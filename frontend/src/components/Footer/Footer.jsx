import { Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <Link to="/">
        <div className="footer_logo_container">
          <img src="/img/Logo.png" alt="" />
        </div>
      </Link>
      <div className="footer_nav">
        <ul className="footer_list">
          <Link to="/github" className="footer_link">
            <li className="footer_item">
              <p className="footer_text">Github</p>
            </li>
          </Link>
          <Link to="/contacts" className="footer_link">
            <li className="footer_item">
              <p className="footer_text">Contacts</p>
            </li>
          </Link>
          <Link to="/rights" className="footer_link">
            <li className="footer_item">
              <p className="footer_text">Rights</p>
            </li>
          </Link>
        </ul>
      </div>

      <div className="footer_to-top">
        <p className="footer_to-top-text">Back to top</p>
        <button className="footer_to-top-button" onClick={scrollToTop}>
          <img
            src="img/arrow_up_icon.svg"
            alt="arrow up icon"
            className="footer_to-top-arrow-icon"
          />
        </button>
      </div>
    </footer>
  );
}
