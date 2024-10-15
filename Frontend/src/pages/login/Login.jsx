import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="bg-main bg-cover min-h-screen flex items-center justify-center" style={{ textShadow: "0px 1px 4px #77A" }}>
      <div className="w-96 shadow-2xl shadow-slate-900 text-white bg-clip-padding backdrop-filter bg-white bg-opacity-10 backdrop-blur-md py-10 px-8 rounded-md">
        <div className="text-center text-3xl">
          Login
          <span className='text-blue-500'> ChatApp</span>
        </div>
        <form className="mt-6">
          <div className="mb-4">
            <label htmlFor="email" className='block text-left'>
              Email:
            </label>
            <input
              id="email"
              type="email"
              className="bg-white mt-4 bg-opacity-10 hover:bg-opacity-20 transition duration-500 shadow-inner shadow-slate-600/90 rounded-md p-3 outline-none w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className='block text-left'>
              Password:
            </label>
            <input
              id="password"
              type="password"
              className="bg-white mt-4 bg-opacity-10 hover:bg-opacity-20 transition duration-500 shadow-inner shadow-slate-600/90 rounded-md p-3 outline-none w-full"
            />
          </div>
          <button className="mt-1 bg-white bg-opacity-30 hover:bg-opacity-40 transition duration-500 rounded-md shadow-md shadow-slate-600/70 p-3 w-8/12 font-semibold">
            Login
          </button>
        </form>
        <Link to='/signup' className="text-center pt-4 text-sm">
          Forgot your password?
        </Link>
      </div>
    </div>
  );
};

export default Login;
