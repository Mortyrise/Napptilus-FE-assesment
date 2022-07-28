import React from 'react';
import '../Styles/Item.css';
import { useNavigate } from 'react-router-dom';

// const details = 'No Details yet';
function Item({ phone }) {
  const redirect = useNavigate();
  return (
    <div className='item-container'>
      <img
        src={phone.imgUrl}
        alt='ProductImage'
        onClick={() => redirect(`/product/${phone.id}`)}
      />
      <p>Marca: {phone.brand}</p>
      <p>Modelo: {phone.model}</p>
      <p>Precio : {phone.price}</p>
    </div>
  );
}

export default Item;
