import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import '../styles.css';
import aloe from '../assets/aloe.jpg';
import peaceLily from '../assets/peace-lily.jpg';
import snakePlant from '../assets/snake-plant.jpg';


const products = [
  { id: 1, name: 'Aloe Vera', price: 10, image: aloe, category: 'Succulent' },
  { id: 2, name: 'Peace Lily', price: 15, image: peaceLily, category: 'Flowering' },
  { id: 3, name: 'Snake Plant', price: 12, image: snakePlant, category: 'Air Purifier' },
];


const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
<img src={product.image} alt={product.name} />
<h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
