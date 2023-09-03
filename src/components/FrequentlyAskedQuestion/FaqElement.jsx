const FaqElement = (props) => {
  return (
    <div className='mb-6 w-5/6 mx-auto text-left'>
      <h3 className='text-lg font-semibold'>{props.question}</h3>
      <p className='text-gray-600 italic'>{props.answer}</p>
    </div>
  );
};

export default FaqElement;
