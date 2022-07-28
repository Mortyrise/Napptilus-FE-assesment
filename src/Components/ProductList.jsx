import React from 'react';
import { getAllProducts } from '../Services/Service';
import { useState, useEffect } from 'react';
import Searchbar from '../Components/Searchbar';
import Item from '../Components/Item';

function ProductList() {
  const [searchInput, setSearchInput] = useState('hithere');
  const [phoneList, setPhoneList] = useState([]);
  const [filteredPhoneList, setFilteredPhoneList] = useState([]);

  // TODO:
  // In local storage save the data + a timestamp (lastfetch) of when saved + setTimeOut of 1 hour to delete it
  // Before fetching check localstorage and if timestamp <1 hour, delete localstorage and fetch again with a newtimestamp

  // Async function to fetch de data from the API
  const getData = async () => {
    try {
      let data = await getAllProducts();
      setPhoneList(JSON.parse(data));
      setFilteredPhoneList(JSON.parse(data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    //fetching the Data from the API
    getData();
  }, []);

  useEffect(() => {
    //Filtering the Array, dependening on the searchbar text
    const filteredData = phoneList?.filter((el) => {
      return (
        el.brand.toLowerCase().includes(searchInput) ||
        el.model.toLowerCase().includes(searchInput)
      );
    });
    // Making usre if the Searchbar text is empty to print all the data
    if (searchInput.length) {
      setFilteredPhoneList(filteredData);
    } else {
      setFilteredPhoneList(phoneList);
    }
  }, [searchInput]);

  return (
    <>
      <Searchbar setSearchInput={setSearchInput} />
      <div className='list-container'>
        {filteredPhoneList &&
          filteredPhoneList.map((phone, index) => {
            return <Item phone={phone} key={phone.id} />;
          })}
      </div>
      <p>No List loaded</p>
    </>
  );
}

export default ProductList;
