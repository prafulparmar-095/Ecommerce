import React from 'react';

const AddSeller = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen flex items-center justify-center">
      <div className="text-white bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl">
        <h2 className='text-center p-4 font-bold font text-2xl'>📦Add New Seller</h2>
         <span className=''>Seller Name</span> 
         <input type='text' placeholder='e.g, Rahul Traders' className='block w-full rounded-lg p-2'></input>
           <span className=''>Email Address</span> 
         <input type='email' placeholder='Seller@email.com' className='block  w-full p-2 rounded-lg'></input>
         <span className=''>Shop Name</span> 
         <input type='text' placeholder='e.g, Rahul kirana store' className='block w-full p-2 rounded-lg '></input>
         <span className=''>Phone Number</span> 
         <input type='number' placeholder='9876543210' className='w-full p-2 rounded-lg '></input>
          <span className=''>Shop Address</span>
         <input type='textarea' placeholder='city, street, Pincode 'className='w-full inline-block p-2 rounded-lg'></input>
         <button className='bg-white block text-fuchsia-950   p-2 rounded-xl text-center w-full text-lg font-bold mt-4'>✅Add Seller</button>
        </div>
    </div>
  );
};

export default AddSeller;
