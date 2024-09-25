const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.static('static'));
app.use(cors());

let products = [
  {
    id: 1,
    name: 'Xiaomi iPhone 12',
    brand: 'Xiaomi',
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 2,
    name: 'Oppo Mi 10',
    brand: 'Xiaomi',
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 3,
    name: 'Samsung Mi 10',
    brand: 'Oppo',
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 4,
    name: 'Apple Find X2',
    brand: 'Samsung',
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 48,
  },
  {
    id: 5,
    name: 'Oppo Mi 11',
    brand: 'Xiaomi',
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 6,
    name: 'OnePlus Find X3',
    brand: 'Apple',
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 7,
    name: 'Apple Pixel 5',
    brand: 'Apple',
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 8,
    name: 'Google Mi 10',
    brand: 'Oppo',
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 108,
  },
  {
    id: 9,
    name: 'Oppo Mi 11',
    brand: 'Samsung',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 10,
    name: 'Xiaomi Mi 10',
    brand: 'Oppo',
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 11,
    name: 'OnePlus Pixel 5',
    brand: 'Apple',
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 12,
    name: 'Xiaomi OnePlus 8',
    brand: 'Xiaomi',
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: 'Android',
    camera: 48,
  },
  {
    id: 13,
    name: 'Xiaomi Pixel 6',
    brand: 'Oppo',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 14,
    name: 'Samsung Find X2',
    brand: 'Oppo',
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: 'Android',
    camera: 48,
  },
  {
    id: 15,
    name: 'Google OnePlus 8',
    brand: 'Apple',
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 16,
    name: 'OnePlus iPhone 12',
    brand: 'OnePlus',
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 17,
    name: 'Google Mi 11',
    brand: 'Oppo',
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 18,
    name: 'Google OnePlus 9',
    brand: 'Apple',
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 64,
  },
  {
    id: 19,
    name: 'Oppo Galaxy S22',
    brand: 'Samsung',
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: 'Android',
    camera: 12,
  },
  {
    id: 20,
    name: 'Apple Pixel 5',
    brand: 'Oppo',
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: 'Android',
    camera: 108,
  },
];

// Get the products sorted by popularity
function sortedProducts(prod1, prod2) {
  return prod2.rating - prod1.rating;
}
app.get('/products/sort/popularity', (req, res) => {
  products.sort(sortedProducts);
  res.json(products);
});

// Get the products sorted by “high-to-low” price
function sortedProductsByPriceDesc(prod1, prod2) {
  return prod2.price - prod1.price;
}
app.get('/products/sort/price-high-to-low', (req, res) => {
  products.sort(sortedProductsByPriceDesc);
  res.json(products);
});

// Get the products sorted by “low-to-high” price
function sortedProductsByPriceAsc(prod1, prod2) {
  return prod1.price - prod2.price;
}
app.get('/products/sort/price-low-to-high', (req, res) => {
  products.sort(sortedProductsByPriceAsc);
  res.json(products);
});

// Filter the products based on the “RAM” option.
function ramBasedFiltering(product, ram1) {
  return product.ram === ram1;
}
app.get('/products/filter/ram/:ram1', (req, res) => {
  let ram1 = parseFloat(req.params.ram1);
  let ramFilter = products.filter((product) =>
    ramBasedFiltering(product, ram1)
  );
  res.json(ramFilter);
});

// Filter the products based on the “rom” option.
function romBasedFiltering(product, rom1) {
  return product.rom === rom1;
}
app.get('/products/filter/rom/:rom1', (req, res) => {
  let rom1 = parseFloat(req.params.rom1);
  let romFilter = products.filter((product) =>
    romBasedFiltering(product, rom1)
  );
  res.json(romFilter);
});

// Filter the products based on the “brand” option.
function brandBasedFiltering(product, brand1) {
  return product.brand.toLowerCase() === brand1.toLowerCase();
}
app.get('/products/filter/brand/:brand1', (req, res) => {
  let brand1 = req.params.brand1;
  let brandFilter = products.filter((product) =>
    brandBasedFiltering(product, brand1)
  );
  res.json(brandFilter);
});

// Filter the products based on the “os” option.
function osBasedFiltering(product, os1) {
  return product.os.toLowerCase() === os1.toLowerCase();
}
app.get('/products/filter/os/:os1', (req, res) => {
  let os1 = req.params.os1;
  let osFilter = products.filter((product) => osBasedFiltering(product, os1));
  res.json(osFilter);
});

// Filter the products based on the “price” option.
function priceBasedFiltering(product, price1) {
  return product.price <= price1;
}
app.get('/products/filter/price/:price1', (req, res) => {
  let price1 = parseFloat(req.params.price1);
  let priceFilter = products.filter((product) =>
    priceBasedFiltering(product, price1)
  );
  res.json(priceFilter);
});

// send origianl array of products
app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
