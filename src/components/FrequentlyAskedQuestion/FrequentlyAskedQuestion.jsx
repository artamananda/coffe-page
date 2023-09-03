import FaqElement from './FaqElement';

const FrequentlyAskedQuestion = () => {
  const data = [
    {
      question: 'Apa jenis biji kopi yang digunakan dalam produk kopi Anda?',
      answer:
        'Kami menggunakan biji kopi berkualitas terbaik dari berbagai daerah penghasil kopi. Setiap produk kami memiliki varian biji kopi yang berbeda, namun kualitasnya selalu tinggi.',
    },
    {
      question: 'Bagaimana cara pesan produk kopi Anda?',
      answer:
        'Anda dapat memesan produk kami melalui situs web kami atau menghubungi layanan pelanggan kami. Selain itu, produk kami juga tersedia di beberapa toko fisik di sekitar daerah tertentu.',
    },
    {
      question: 'Apakah produk kopi Anda ramah lingkungan?',
      answer:
        'Ya, kami sangat peduli tentang keberlanjutan lingkungan. Kami menggunakan packing yang ramah lingkungan dan berupaya untuk mengurangi jejak karbon dalam proses produksi dan pengiriman kami.',
    },
    {
      question: 'Apakah ada opsi kopi organik atau kopi dekaf?',
      answer:
        'Ya, kami menawarkan opsi kopi organik untuk mereka yang peduli tentang produk alami dan kopi dekaf untuk yang ingin menghindari kafein.',
    },
    {
      question:
        'Bagaimana cara menyeduh kopi yang benar untuk mendapatkan hasil terbaik?',
      answer:
        'Kami menyediakan petunjuk penyeduhan yang disertakan dengan setiap produk kami. Namun, secara umum, gunakan biji kopi segar, air bersih, dan ikuti petunjuk penyeduhan yang kami berikan untuk mencapai hasil terbaik.',
    },
  ];
  return (
    <section className='py-16 bg-gray-100'>
      <div className='container w-5/6 mx-auto text-center'>
        <h2 className='text-2xl font-bold mb-8'>Pertanyaan Umum (FAQ)</h2>
        {data.map((item) => (
          <FaqElement question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestion;
