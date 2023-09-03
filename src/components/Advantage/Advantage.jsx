import AdvantageElement from './AdvantageElement';
const Advantage = () => {
  const data = [
    {
      title: 'Rasa yang Kaya dan Aromatik',
      description:
        'Nikmati setiap tegukan dari kopi kami yang dikenal dengan rasa kaya dan aroma yang memikat. Dipanggang dengan hati-hati untuk memberikan pengalaman kopi terbaik yang pernah Anda rasakan.',
    },
    {
      title: 'Kualitas Biji Kopi Terbaik',
      description:
        'Kami hanya menggunakan biji kopi berkualitas terbaik dari berbagai sudut dunia. Dipilih secara selektif untuk memberikan cita rasa kopi yang luar biasa.',
    },
    {
      title: 'Dukungan untuk Petani Lokal',
      description:
        'Kami berkomitmen untuk mendukung petani kopi lokal. Dengan setiap pembelian produk kami, Anda turut berkontribusi pada kesejahteraan komunitas petani dan keberlanjutan lingkungan.',
    },
  ];

  return (
    <section className='py-16 pb-16 bg-gray-100'>
      <div className='container w-5/6 mx-auto text-center'>
        <h2 className='text-2xl font-extrabold mb-8'>Kelebihan Produk Kami</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {data.map((item) => (
            <AdvantageElement
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantage;
