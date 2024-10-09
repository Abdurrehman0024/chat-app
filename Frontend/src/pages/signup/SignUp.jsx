import React from 'react';
import GenderCheckbox from './GenderCheckbox';

const SignUp = () => {
  return (
    <div className="bg-main bg-cover min-h-screen flex items-center justify-center">
      <div className="w-96 shadow-2xl shadow-slate-900 text-white bg-clip-padding backdrop-filter bg-white bg-opacity-10 backdrop-blur-md py-10 px-8 rounded-md">
        <div className="text-center text-3xl">
          SignUp
          <span className='text-blue-500'> ChatApp</span>
        </div>
        <form className="mt-6">
          <div className="mb-4">
            <label htmlFor="fullname" className='block text-left '>
              Fullname:
            </label>
            <input
              id="fullname"
              type="text"
              placeholder="John Doe"
              className="bg-white mt-1 bg-opacity-10 hover:bg-opacity-20 transition duration-500 shadow-inner shadow-slate-600/90 rounded-md p-3 outline-none w-full"
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
            />
          </div>

          <GenderCheckbox />

          <button className="mt-1 bg-white bg-opacity-30 hover:bg-opacity-40 transition duration-500 rounded-md shadow-md shadow-slate-600/70 p-3 w-8/12 font-semibold mx-auto block">
            Sign Up
          </button>
        </form>
        <div className="text-center pt-4 text-sm">
          Already have an account?
        </div>
      </div>
    </div>
  );
}

export default SignUp;
