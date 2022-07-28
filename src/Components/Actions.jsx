import React from 'react';
import '../Styles/Actions.css';
import { useState } from 'react';
import { addProductToCart } from '../Services/Service';

function Actions({ productData }) {
  // console.log(productData, 'data');
  const [phoneColor, setPhoneColor] = useState('');
  const [phoneStorage, setPhoneStorage] = useState('');

  const handleColor = (e) => {
    e.preventDefault();
    setPhoneColor(e.target.value);
  };

  const handleStorage = (e) => {
    e.preventDefault();
    setPhoneStorage(e.target.value);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    let productToAdd = {
      id: productData.id,
      colorCode: phoneColor,
      storageCode: phoneStorage,
    };
    console.log(productToAdd, 'productToAdd');
    addProductToCart(productToAdd);
  };

  return (
    <div className='actions-container'>
      <div className='options-container'>
        <div>
          {productData ? (
            productData.options.colors.map((color, index) => {
              return (
                <>
                  <input
                    className='action-input'
                    key={productData.id + index}
                    defaultChecked={index === 0}
                    value={color.code}
                    type='radio'
                    name='color'
                    onClick={() => handleColor()}
                  ></input>
                  <label>{color.name}</label>
                </>
              );
            })
          ) : (
            <p>Loading info</p>
          )}
        </div>
        <div>
          {productData ? (
            productData.options.storages.map((storage, index) => {
              return (
                <>
                  <input
                    className='action-input'
                    key={productData.id + index}
                    defaultChecked={index === 0}
                    type='radio'
                    name='storage'
                    value={storage.code}
                    onClick={() => handleStorage()}
                  ></input>
                  <label>{storage.name}</label>
                </>
              );
            })
          ) : (
            <p>Loading info</p>
          )}
        </div>
      </div>
      <button onClick={() => handleAddToCart()}>ADD TO CART</button>
    </div>
  );
}

export default Actions;
