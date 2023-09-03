import coffeeImage from '../../images/background.jpg';
import images from '../../images/cupcoffee.png';
import coffeeLeaf from '../../images/coffeeleaf.png';

const Hero = () => {
  const windowHeight = window.innerHeight; // Mendapatkan tinggi layar

  const sectionStyle = {
    backgroundImage: `url(${coffeeImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: `${windowHeight}px`,
    position: 'relative',
    display: 'flex', // Menambahkan flex container
    flexDirection: 'column', // Membuat elemen anak menjadi kolom
    justifyContent: 'center', // Pusatkan vertikal
    alignItems: 'center', // Pusatkan horizontal
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Warna gelap dengan tingkat kegelapan yang sesuai
  };

  const logoStyle = {
    position: 'absolute',
    bottom: '0px', // Atur jarak dari bawah
    right: '0px', // Atur jarak dari kanan
    width: '60%', // Sesuaikan ukuran logo sesuai kebutuhan
    height: 'auto',
  };

  const coffeeLeafStyle = {
    position: 'absolute',
    bottom: '0px', // Atur jarak dari bawah
    left: '0px', // Atur jarak dari kanan
    width: '40%', // Sesuaikan ukuran logo sesuai kebutuhan
    height: 'auto',
  };

  return (
    <section style={sectionStyle} className='bg-white'>
      <div className='lg:mt-0 lg:col-span-5 lg:flex'>
        <img src={images} alt='mockup' style={logoStyle} />
      </div>
      <div className='lg:mt-0 lg:col-span-5 lg:flex'>
        <img src={coffeeLeaf} alt='mockup' style={coffeeLeafStyle} />
      </div>
      <div style={overlayStyle}>
        <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
          <div className='mr-auto place-self-center lg:col-span-7'>
            <a href='/'>
              <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
                Arts Coffee
              </h1>
              <p className='max-w-2xl my-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl'>
                Kami adalah sebuah usaha mikro, kecil, dan menengah (UMKM) yang
                berdedikasi untuk menghadirkan biji kopi terbaik dari seluruh
                penjuru Indonesia. Dalam perjalanan kami yang penuh gairah ini,
                kami mengusung visi untuk memperkenalkan kekayaan rasa kopi
                Indonesia kepada dunia, satu cangkir kopi pada satu waktu.
              </p>
            </a>

            <a
              href='#buy'
              scroll='true'
              className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-bold text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'
            >
              Beli Kopi
              <svg
                className='w-5 h-5 ml-2 -mr-1'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
