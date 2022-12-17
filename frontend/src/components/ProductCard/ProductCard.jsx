import { Link } from 'react-router-dom';
import './ProductCard.css';

export function ProductCard(props) {
  const { product } = props;
  return (
    <div className="productCard" key={product.id}>
      <Link to={`/product/${product.id} `} className="productCard_link">
        <div className="productCard_image-container">
          <img
            src={`/${product.image}`}
            alt={product.name}
            className="productCard_image"
          ></img>
        </div>
      </Link>
      <div className="productCard_block">
        <Link to={`/product/${product.id}`}>
          <p className="productCard_description">
            {`${product.name} (iMT9G2FS/A)`}
          </p>
        </Link>
        <div className="productCard_prices">
          <p className="productCard_newprice">${product.price}</p>
          <p className="productCard_oldprice">${product.fullPrice}</p>
        </div>

        <hr className="productCard_line" />
        <div className="productCard_characteristics">
          <div className="productCard_text">
            <p className="productCard_char">Screen</p>
            <p className="productCard_char">Capacity</p>
            <p className="productCard_char">RAM</p>
          </div>

          <div className="productCard_numbers">
            <p className="productCard_char">
              {`${product.screen.slice(0, 3)} ${product.screen.slice(3)}`}
            </p>
            <p className="productCard_char">
              {`${product.capacity.slice(0, -2)} ${product.capacity.slice(-2)}`}
            </p>
            <p className="productCard_char">
              {`${product.ram.slice(0, -2)} ${product.ram.slice(-2)}`}
            </p>
          </div>
        </div>
        <div className="productCard_buttons">
          <button className="productCard_addToCard">Add to cart</button>

          <button type="button" className="productCard_favourites"></button>
        </div>
      </div>
    </div>
  );
}
