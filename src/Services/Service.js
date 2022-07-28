const URL = 'https://front-test-api.herokuapp.com/';

async function getAllProducts() {
  try {
    const res = await fetch(URL + 'api/product');
    const data = await res.text();
    return JSON.parse(data);
  } catch (err) {
    throw new Error(err);
  }
}

async function getProductDetailsByID(id) {
  try {
    const res = await fetch(URL + 'api/product/' + id);
    const data = await res.text();
    return JSON.parse(data);
  } catch (err) {
    throw new Error(err);
  }
}

async function addProductToCart(element) {
  try {
    const res = await fetch(URL + 'cart/' + element, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(element),
    });
    console.log(res, 'res');
    return res.json;
  } catch (err) {
    throw new Error(err);
  }
}

export { getAllProducts, getProductDetailsByID, addProductToCart };
