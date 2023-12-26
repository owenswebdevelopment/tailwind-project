import React from 'react';

const Signup = () => {
  return (
    
      <div className='flex items-center justify-center mt-24'>
        <form className=" w-[400px] h-[500px] flex-shrink-0  mx-auto p-4 flex flex-col bg-red-100 shadow-md rounded-md">
        
      <div>
      <div className="mb-4 text-center">
      <p className='my-10 text-lg text-center font-bold'>Login Screen</p>
        <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-4 mr-32">
          Email Address 
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-[60%] px-3 py-2 border rounded-md focus:outline-none focus:border-gray-500"
          placeholder="Asarno@gmail.com"
          required
        />
      </div>

      <div className="text-center">
      
        <label htmlFor="passsword" className='block font-semibold text-gray-600 text-sm mb-4 mr-40'>Password</label>
        <input type="text" 
        id='password'
        name='password'
        className='w-[60%] px-3 py-2 rounded-md focus:outline-none focus:border-gray-500 mb-20'
        placeholder='Enter Password'
        />
      </div>

      <div className=' text-center'>
      <button type="submit"
      className='w-[60%] bg-[#255bb3] hover:bg-[#6d94d1] text-white text-md font-serif rounded-sm p-2'>
SUBMIT
</button>

      </div>
      </div>

      </form>
      </div>
  
  );
};

export default Signup;