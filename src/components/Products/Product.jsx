import React, { useState } from 'react';
import ProductDetail from './ProductDetail';

const Product = (props) => {
  const [isProductDetailOpen, setProductDetailOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setProductDetailOpen(true);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
    setProductDetailOpen(false);
  };
  return (
    <div className='p-4 bg-white rounded-lg shadow-md relative'>
      <div className='absolute top-0 left-0 bg-green-500 text-white py-1 px-2 rounded-tl rounded-br text-xs font-semibold'>
        Recommended
      </div>
      <div className='w-48 h-48 mx-auto my-4 rounded-full overflow-hidden'>
        <img
          src={props.image}
          alt={props.title}
          className='object-cover w-full h-full'
        />
      </div>
      <h3 className='text-2xl font-bold mb-2 text-center text-gray-900'>
        {props.title}
      </h3>
      <p className='text-gray-700 text-center my-4'>{props.description}</p>
      <p className='text-lg font-light text-center text-gray-600'>
        IDR{props.price}
      </p>
      <button
        onClick={() => openProductDetail(props)}
        className='bg-[#000000] text-white px-4 py-2 mt-4 mb-8 block mx-auto hover:bg-gray-200 hover:text-black transition duration-300'
      >
        Beli Sekarang
      </button>
      {isProductDetailOpen && (
        <ProductDetail product={selectedProduct} onClose={closeProductDetail} />
      )}
    </div>
  );
};

export default Product;
