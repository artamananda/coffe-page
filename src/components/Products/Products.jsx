import Product from './Product';
import sumatera from '../../images/sumatera.jpg';
import java from '../../images/java.jpg';
import bali from '../../images/bali.jpg';
import toraja from '../../images/toraja.jpg';
import papua from '../../images/papua.jpg';
import flores from '../../images/flores.jpg';
import gayo from '../../images/gayo.jpg';
import sulawesi from '../../images/sulawesi.jpg';
import lampung from '../../images/lampung.jpg';

const Products = () => {
  const data = [
    {
      title: 'Kopi Sumatera',
      description:
        'Kopi Sumatera adalah salah satu jenis kopi paling terkenal di Indonesia. Rasakan cita rasa kuat dan khas dengan sentuhan rempah-rempah.',
      price: 30000,
      image: sumatera,
    },
    {
      title: 'Kopi Java',
      description:
        'Kopi Java dikenal dengan rasa ringan dan aroma yang menggoda. Cocok untuk yang suka kopi dengan tingkat keasaman yang seimbang.',
      price: 25000,
      image: java,
    },
    {
      title: 'Kopi Bali',
      description:
        'Kopi Bali memiliki cita rasa manis dengan sentuhan buah-buahan tropis. Ideal untuk penggemar kopi yang mencari sesuatu yang unik.',
      price: 28000,
      image: bali,
    },
    {
      title: 'Kopi Toraja',
      description:
        'Kopi Toraja berasal dari daerah Sulawesi Selatan dan memiliki rasa penuh tubuh dengan sentuhan bunga dan rempah.',
      price: 32000,
      image: toraja,
    },
    {
      title: 'Kopi Papua',
      description:
        'Kopi Papua memiliki karakteristik rasa yang khas dengan keasaman yang seimbang dan rasa manis yang menyegarkan.',
      price: 26000,
      image: papua,
    },
    {
      title: 'Kopi Flores',
      description:
        'Kopi Flores dikenal dengan rasa yang lembut dan nutty. Rasakan keindahan alam pulau Flores dalam setiap tegukan.',
      price: 28000,
      image: flores,
    },
    {
      title: 'Kopi Gayo',
      description:
        'Kopi Gayo berasal dari Aceh dan memiliki cita rasa penuh dengan sentuhan coklat dan karamel yang hangat.',
      price: 35000,
      image: gayo,
    },
    {
      title: 'Kopi Sulawesi',
      description:
        'Kopi Sulawesi memiliki rasa yang kompleks dengan sentuhan buah-buahan tropis dan coklat hitam.',
      price: 32000,
      image: sulawesi,
    },
    {
      title: 'Kopi Lampung',
      description:
        'Kopi Lampung dikenal dengan rasa yang seimbang dan aroma yang menggoda. Cocok untuk semua penikmat kopi.',
      price: 26000,
      image: lampung,
    },
  ];
  return (
    <section id='buy' className='py-16 bg-gray-100'>
      <div className='container w-5/6 mx-auto text-center'>
        <h2 className='text-4xl font-extrabold mb-8'>AYO BELI KOPI!</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {data.map((item) => (
            <Product
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
