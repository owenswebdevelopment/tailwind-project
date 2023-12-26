import React from 'react';

const Signup = () => {
  return (
    
      <div className='flex items-center justify-center mt-24 mb-24'>
        <form className=" w-[300px] md:w-[400px] h-[590px] flex-shrink-0 p-4 flex flex-col bg-red-100 shadow-md rounded-md">
        
      <div>
      <div className="mb-4 text-center">
      <p className='my-10 text-2xl text-blue-500 text-center font-bold mr-[40px] md:mr-[114px] '>Login Screen</p>
        <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-4 mr-[100px] md:mr-[164px]">
          Email Address 
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-[70%] px-3 py-2 border rounded-md focus:outline-none focus:border-gray-500"
          placeholder="Asarno@gmail.com"
          required
        />
      </div>

      <div className="text-center">
      
        <label htmlFor="passsword" className='block font-semibold text-gray-600 text-sm mb-4 mr-[125px] md:mr-48'>Password</label>
        <input type="text" 
        id='password'
        name='password'
        className='w-[70%] px-3 py-2 rounded-md focus:outline-none focus:border-gray-500 mb-5'
        placeholder='Enter Password'
        />
      </div>

      <div className='text-center mb-6'>
        <label htmlFor="checkbox"　className='flex justify-center text-gray-600 text-sm p-4'>
        <input type="checkbox"  id="record_email" name="record_email"className='mr-2'/>
        メールアドレスを記録する 
        </label>
      </div>

      <div className=' text-center'>
      <button type="submit"
      className='w-[70%] bg-[#255bb3] hover:bg-[#6d94d1] text-white text-md font-serif rounded-sm p-2'>SUBMIT</button>
      </div>

      <div　className='flex justify-between py-8'>
<a href="/newregistration" className='hover:underline text-blue-500 text-[12px] ml-14 '>新規会員登録</a>
<a href="/forgotpassword" className='hover:underline text-blue-500 text-[12px] mr-14'>パスワード忘れた方はこちら</a>
      </div>
      </div>

      </form>
      </div>
  
  );
};

export default Signup;