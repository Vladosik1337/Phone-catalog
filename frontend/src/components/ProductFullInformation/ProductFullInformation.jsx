import './ProductFullInformation.css';

export function ProductFullInformation({ product }) {
  return (
    <div className="product">
      <h1 className="product_title">{`${product.name}(iMT9G2FS/A) `}</h1>
      <div className="product_main-info">
        <div className="product_images">
          <div className="product_additional-images">
            {product.images.map((image) => (
              <div className="product_additional-images-container">
                <img
                  src={`/${image}`}
                  className="product_additional-image"
                  alt="iphone"
                ></img>
              </div>
            ))}
          </div>
          <div className="product_main-image-container">
            <img
              src={`/${product.images[0]}`}
              alt={product.name}
              className="product_main-image"
            />
          </div>
        </div>
        <div className="product_charasteristics">
          <div className="product_colors-container">
            <p className="product_colors-title">Available colors</p>
            <div className="product_colors">
              {product.colorsAvailable.map((color) => (
                <div className="product_color-border">
                  <button
                    style={{ backgroundColor: color }}
                    className="product_color"
                  ></button>
                </div>
              ))}
            </div>
          </div>

          <hr className="product_charasteristics-line" />

          <div className="product_capacity-container">
            <p className="product_capacity-title">Select capacity</p>
            <div className="product_capacity-buttons">
              {product.capacityAvailable.map((capacity) => (
                <button className="product_capacity-button">{`${capacity}`}</button>
              ))}
            </div>
          </div>

          <hr className="product_charasteristics-line" />

          <div className="product_price-container">
            <p className="product_price-newPrice">{`$${product.priceDiscount}`}</p>
            <p className="product_price-oldPrice">{`$${product.priceRegular}`}</p>
          </div>

          <div className="product_buttons-container">
            <button className="product_buttons-add">Add to cart</button>
            <button className="product_buttons-favourite"></button>
          </div>

          <div className="product_info">
            <div className="product_info-title-container">
              <p className="product_info-title">Screen</p>
              <p className="product_info-title">Resolution</p>
              <p className="product_info-title">Processor</p>
              <p className="product_info-title">RAM</p>
            </div>
            <div className="product_info-text-container">
              <p className="product_info-text">{product.screen}</p>
              <p className="product_info-text">{product.resolution}</p>
              <p className="product_info-text">{product.processor}</p>
              <p className="product_info-text">{product.ram}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="product_additional-info">
        <div className="product_about">
          <h2 className="product_about_title">About</h2>
          <hr className="product_about_line" />
          {product.description.map((article) => (
            <div className="product_about_article-container">
              <h3 className="product_about_article-title">{article.title}</h3>
              {article.text.map((articleText) => (
                <div>
                  <p className="product_about_article-text">{articleText}</p>
                  <br />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="product_tech-specs">
          <h2 className="product_tech-specs_title">Tech specs</h2>
          <hr className="product_tech-specs_line" />
          <div className="product_tech-specs_information-container">
            <div className="product_tech-specs_information-titles">
              <p className="product_tech-specs_information-title">Screen</p>
              <p className="product_tech-specs_information-title">Resolution</p>
              <p className="product_tech-specs_information-title">Processor</p>
              <p className="product_tech-specs_information-title">RAM</p>
              <p className="product_tech-specs_information-title">
                Built in memory
              </p>
              <p className="product_tech-specs_information-title">Camera</p>
              <p className="product_tech-specs_information-title">Zoom</p>
              <p className="product_tech-specs_information-title">Cell</p>
            </div>
            <div className="product_tech-specs_information-texts">
              <p className="product_tech-specs_information-text">
                {product.screen}
              </p>
              <p className="product_tech-specs_information-text">
                {product.resolution}
              </p>
              <p className="product_tech-specs_information-text">
                {product.processor}
              </p>
              <p className="product_tech-specs_information-text">
                {product.ram}
              </p>
              <p className="product_tech-specs_information-text">
                {product.capacity}
              </p>
              <p className="product_tech-specs_information-text">
                {product.camera}
              </p>
              <p className="product_tech-specs_information-text">
                {product.zoom}
              </p>
              <p className="product_tech-specs_information-text">{`${product.cell.map(
                (cell) => cell
              )}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
