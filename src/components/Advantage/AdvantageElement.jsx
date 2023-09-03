const AdvantageElement = (props) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md'>
      <h3 className='text-lg font-semibold my-4'>{props.title}</h3>
      <p className='text-gray-600'>{props.description}</p>
    </div>
  );
};

export default AdvantageElement;
