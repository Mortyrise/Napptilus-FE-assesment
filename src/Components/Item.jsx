import React from 'react';

// const details = 'No Details yet';

function Item({ phone }) {
  return (
    <div>
      <img src={phone.imgUrl} alt='ProductImage' />
      <p>Marca: {phone.brand}</p>
      <p>Modelo: {phone.model}</p>
      <p>Precio : {phone.price}</p>
    </div>
  );
}

export default Item;
