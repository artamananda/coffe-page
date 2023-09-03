const NotFound = () => {
  return (
    <div className='bg-gray-200 min-h-screen flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg shadow-md'>
        <h2 className='text-3xl font-semibold mb-4'>Halaman Tidak Ditemukan</h2>
        <p className='text-gray-600'>
          Maaf, halaman yang Anda cari tidak ditemukan. Silakan periksa kembali
          URL atau kembali ke halaman beranda.
        </p>
        <button
          className='bg-blue-500 text-white px-6 py-2 mt-4 hover:bg-blue-700 hover:text-white transition duration-300'
          onClick={() => (window.location.href = '/')}
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
};

export default NotFound;
