import React from 'react';
import '../Styles/ProductView.css';
import Actions from '../Components/Actions';
import { getProductDetailsByID } from '../Services/Service';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Description from '../Components/Description';

function ProductView() {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  // Async function to fetch de data from the API
  const getData = async () => {
    try {
      let data = await getProductDetailsByID(id);
      setProductData(data);
    } catch (err) {
      console.log(err);
    }
  };

  //fetching the Data from the API
  useEffect(() => {
    getData();
  }, []);

  console.log(productData, 'data');

  return (
    <div className='product-container'>
      <div className='product-image-container'>
        {productData ? (
          <img src={productData.imgUrl} alt='' width='375px' />
        ) : (
          <p>Loading Image...</p>
        )}
      </div>
      <div className='product-info-container'>
        <div className='actions-container'>
          <Description productData={productData} />
          <Actions productData={productData} />
        </div>
      </div>
    </div>
  );
}

export default ProductView;
