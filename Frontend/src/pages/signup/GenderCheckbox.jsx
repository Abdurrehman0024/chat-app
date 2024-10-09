const GenderCheckbox = () => {
  return (
    <div className='flex justify-between mb-4'>
      <div className='flex items-center'>
        <input
          type='checkbox'
          id='male'
          className='checkbox border-slate-900 mr-2 w-5 h-5' // Adjust size here
        />
        <label htmlFor='male' className='label-text text-left'>
          Male
        </label>
      </div>
      <div className='flex items-center'>
        <input
          type='checkbox'
          id='female'
          className='checkbox border-slate-900 mr-2 w-5 h-5' // Adjust size here
        />
        <label htmlFor='female' className='label-text text-left'>
          Female
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
