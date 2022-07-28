import React from 'react';

function Description({ productData }) {
  let details = 'Product details not loaded yet';
  return (
    <div className='product-description-container'>
      {productData ? (
        <>
          <p>Marca: {productData.brand}</p>
          <p>Modelo: {productData.model}</p>
          <p>Precio: {productData.price}€</p>
          <p>CPU: {productData.cpu}</p>
          <p>RAM: {productData.ram}</p>
          <p>Sistema Operativo: {productData.os}</p>
          <p>Resolución: {productData.displayResolution}</p>
          <p>Batería: {productData.battery}</p>
          <p>Cámara: {productData.primaryCamera}</p>
          <p>Tamaño: {productData.dimentions}</p>
          <p>Peso: {productData.weight} g</p>
        </>
      ) : (
        <p>{details}</p>
      )}
    </div>
  );
}

export default Description;
