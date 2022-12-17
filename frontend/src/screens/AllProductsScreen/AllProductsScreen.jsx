import { useEffect, useReducer } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import { ProductCard } from '../../components/ProductCard/';
import './AllProductsScreen.css';
import { Link } from 'react-router-dom';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export function AllProductsScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="phones_routes">
        <Link to="/">
          <img src="img/home_icon.svg" alt="" />
        </Link>
        <img src="img/arrow_right_icon.svg" alt="" />
        <p className="phone_routes-text">Phones</p>
      </div>
      <h2 className="products_title">Mobile Phones</h2>
      <p className="products_count-of-phones">{`${products.length} models`}</p>
      <div className="products">
        {loading ? (
          <div>loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((product) => <ProductCard product={product} />)
        )}
      </div>
    </div>
  );
}
