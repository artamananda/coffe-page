import TestimonialElement from './TestimonialElement';
import arya from '../../images/arya.jpg';
import achmad from '../../images/achmad.jpg';
import annisa from '../../images/annisa.jpg';

const Testimonial = () => {
  const data = [
    {
      name: 'Arya Yunanta',
      title: 'Sangat Baik',
      comment:
        'Kopi mereka selalu membuat pagi saya lebih cerah. Rasa yang nikmat dan segar, dan saya juga merasa senang mendukung petani lokal.',
      imageSrc: arya,
    },
    {
      name: 'Achmad Mario Sunjabar',
      title: 'Sangat Baik',
      comment:
        'Saya seorang pecinta kopi sejati, dan kopi dari produk mereka tidak pernah mengecewakan. Kualitasnya konsisten, dan varian rasa yang beragam membuat saya ingin mencoba semuanya!',
      imageSrc: achmad,
    },
    {
      name: 'Annisa Fatihah Salsabila',
      title: 'Sangat Baik',
      comment:
        'Kopi mereka memang lezat, tapi yang lebih saya hargai adalah komitmen mereka terhadap lingkungan. Packaging ramah lingkungan adalah nilai tambah besar.',
      imageSrc: annisa,
    },
  ];
  return (
    <section className='py-16'>
      <div className='container mx-auto text-center'>
        <h2 className='text-2xl font-bold mb-4'>Testimoni Pelanggan</h2>
        {data.map((item) => (
          <TestimonialElement
            name={item.name}
            title={item.title}
            comment={item.comment}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
