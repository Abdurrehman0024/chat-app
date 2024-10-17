import React, { useState } from 'react';
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
import useSignup from '../../components/hooks/useSignup';


const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  });

  const { loading, signup } = useSignup();

    const handleSubmit = async (e) => {
      e.preventDefault();
      await signup(inputs); 
    };

    const handleCheckboxChange = (gender)=>{
      setInputs({...inputs, gender});
    };


  return (
    <div className="bg-main bg-cover min-h-screen flex items-center justify-center">
      <div className="w-96 shadow-2xl shadow-slate-900 text-white bg-clip-padding backdrop-filter bg-white bg-opacity-10 backdrop-blur-md py-10 px-8 rounded-md">
        <div className="text-center text-3xl">
          SignUp
          <span className='text-blue-500'> ChatApp</span>
        </div>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label htmlFor="fullname" className='block text-left '>
              Fullname:
            </label>
            <input
              id="fullname"
              type="text"
              placeholder="John Doe"
              className="bg-white mt-1 bg-opacity-10 hover:bg-opacity-20 transition duration-500 shadow-inner shadow-slate-600/90 rounded-md p-3 outline-none w-full"
              value={inputs.fullname}
              onChange={(e)=> setInputs({...inputs, fullname: e.target.value})}
            />

          </div>
          <div className="mb-4">
            <label htmlFor="username" className='block text-left'>
              Username:
            </label>
            <input
              id="username"
              type="text"
              placeholder="john_doe"
              className="bg-white mt-1 bg-opacity-10 hover:bg-opacity-20 transition duration-500 shadow-inner shadow-slate-600/90 rounded-md p-3 outline-none w-full"
              value={inputs.username}
              onChange={(e)=> setInputs({...inputs, username: e.target.value})}
            />

          </div>
          <div className="mb-4">
            <label htmlFor="password" className='block text-left'>
              Password:
            </label>
            <input
              id="password"
              type="password"
              placeholder='Enter Password'
              className="bg-white mt-1 bg-opacity-10 hover:bg-opacity-20 transition duration-500 shadow-inner shadow-slate-600/90 rounded-md p-3 outline-none w-full"
              value={inputs.password}
              onChange={(e)=> setInputs({...inputs, password: e.target.value})}
            />

          </div>
          <div className="mb-4">
            <label htmlFor="confirm_password" className='block text-left'>
              Confirm Password:
            </label>
            <input
              id="confirm_password"
              type="password"
              placeholder='Confirm Password'
              className="bg-white mt-1 bg-opacity-10 hover:bg-opacity-20 transition duration-500 shadow-inner shadow-slate-600/90 rounded-md p-3 outline-none w-full"
              value={inputs.confirmPassword}
              onChange={(e)=> setInputs({...inputs, confirmPassword: e.target.value})}
            />

          </div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

          <button className="mt-1 bg-white bg-opacity-30 hover:bg-opacity-40 transition duration-500 rounded-md shadow-md shadow-slate-600/70 p-3 w-8/12 font-semibold mx-auto block"
            disabled={loading}
          >
            {loading ? <span className='loading loading-spinner'></span>: "Sign up"}

          </button>
        </form>
        <Link to='/login' className="text-center pt-4 text-sm">
          Already have an account?
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
