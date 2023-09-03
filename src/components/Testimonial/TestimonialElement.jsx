const TestimonialElement = (props) => {
  return (
    <div className='bg-white w-2/3 mx-auto p-6 rounded-lg shadow-lg text-center mb-8'>
      <div className='mx-auto mb-4 w-20 h-20 rounded-full overflow-hidden'>
        <img
          src={props.imageSrc}
          alt={props.name}
          className='object-cover w-full h-full'
        />
      </div>
      <p className='text-lg font-semibold'>{props.name}</p>
      <p className='text-gray-600'>{props.title}</p>
      <p className='text-gray-800 text-base mt-4'>{props.comment}</p>
    </div>
  );
};

export default TestimonialElement;
