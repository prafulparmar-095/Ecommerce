import React from 'react';

const Login = () => {
   return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-700 h-screen flex items-center justify-center">
      <div className="text-white w-94 bg-gradient-to-r from-purple-500 to-blue-700 p-3 rounded-2xl">
        <h2 className='text-center p-4 font-bold font text-2xl'>🔐Welcome Back</h2>
          <div className='pt-1'>
         <label className='block mb-1'>Email Address</label> 
         <input type='text' placeholder='you@example.com' className='block w-full rounded-lg p-2'></input>
           </div>
          <div className='pt-3'>
          <label className='block mb-1'>Password</label>
         <input type='email' placeholder='*******'  className='block  w-full p-2 rounded-lg'></input>
          </div>

         <div className='flex items-center gap-x-20 pt-1'>       
         <label>
         <input type='checkbox' className=''></input>Remember Me</label>
         <a href="#" className="text-purple-200 hover:underline">Forgot password?</a>
         </div>  
         <button className='bg-white block text-fuchsia-950   p-2 rounded-xl text-center w-full text-lg font-bold mt-4'>🚀Login</button>
         <div className='text-center pt-3'>
         <span>Don't have an account ?<a href='#' className='text-yellow-400'>Register</a> </span>
         </div>
        </div>
    </div>
  );
};


export default Login;
