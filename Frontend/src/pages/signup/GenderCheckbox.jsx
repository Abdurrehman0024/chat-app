const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className='flex justify-between mb-4'>
      <div className='flex items-center'>

        <input
          type='checkbox'
          id='male'
          className='checkbox border-slate-200 mr-2 w-5 h-5'
          checked={selectedGender === "male"}
					onChange={() => onCheckboxChange("male")} 
        />

        <label htmlFor='male' className={`label-text text-left text-white ${selectedGender === "male" ? "selected" : ""} `}>
          Male
        </label>
      </div>

      <div className='flex items-center'>
        <input
          type='checkbox'
          id='female'
          className='checkbox border-slate-200 mr-2 w-5 h-5' 
          checked={selectedGender === "female"}
					onChange={() => onCheckboxChange("female")} 
        />

        <label htmlFor='female' className={`label-text text-left text-white ${selectedGender === "female" ? "selected" : ""} `}>
          Female
        </label>

      </div>
    </div>
  );
};

export default GenderCheckbox;
