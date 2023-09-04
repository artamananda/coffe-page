const BuyProduct = () => {
  return (
    <section className='py-16 bg-gray-300 text-black'>
      <div className='container w-5/6 mx-auto text-center'>
        <p className='text-2xl font-semibold mb-4'>
          Dapatkan Produk Kami Hari Ini!
        </p>
        <p className='text-lg'>
          Jangan lewatkan kesempatan untuk memiliki produk berkualitas ini.
        </p>
        <form action='#buy'>
          <button className='bg-white text-black-500 px-6 py-2 mt-8 hover:bg-[#000000] hover:text-white transition duration-300'>
            Beli Sekarang
          </button>
        </form>
      </div>
    </section>
  );
};

export default BuyProduct;
