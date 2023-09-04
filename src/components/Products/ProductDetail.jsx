import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../App.css'; // Sesuaikan dengan nama file CSS Anda

const ProductDetail = ({ product, onClose }) => {
  const [quantity, setQuantity] = React.useState(1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleSubmit = () => {
    console.log(`Anda akan membeli ${quantity} produk "${product.title}" seharga Rp.${product.price * quantity}`);
  };

  return (
    <CSSTransition
      in={true} // Tambahkan logika untuk mengontrol kapan komponen muncul
      timeout={300}
      classNames="product-detail"
      unmountOnExit
    >
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-black bg-opacity-70 fixed inset-0"></div>
        <div className="bg-white p-4 rounded-lg shadow-lg relative z-10">
          <button
            className="absolute font-bold mr-2 top-2 right-2 text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            X
          </button>
          <img
            src={product.image}
            alt={product.title}
            className="w-48 h-48 mx-auto my-6 rounded-lg shadow-md"
          />
          <h2 className="text-3xl font-bold mb-2 text-center">{product.title}</h2>
          <p className="text-gray-700 w-5/6 mx-auto text-center">{product.description}</p>
          <div className="flex items-center justify-center my-4">
            <button
              className="flex items-center justify-center text-white text-xl font-bold rounded-full w-12 h-12 bg-red-500 hover:bg-red-600 transition duration-300"
              onClick={decrementQuantity}
            >
              -
            </button>
            <span className="mx-4 text-xl font-semibold">{quantity}</span>
            <button
              className="flex items-center justify-center text-white text-xl bg-green-500 rounded-full w-12 h-12 font-bold hover:bg-green-600 transition duration-300"
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>
          <p className="text-gray-900 text-2xl font-bold mt-4 text-center">Total: Rp.{product.price * quantity}</p>
          <button
            className="bg-[#000000] text-white px-6 py-3 my-8 rounded-lg hover:bg-primary-800 transition duration-300"
            onClick={handleSubmit}
          >
            Lanjut ke Pembayaran
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ProductDetail;
