import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Nav = () => {
 const [nav, setNav] = useState(false);

const handleNav = () => {
  setNav(!nav);
} 



  return (
<div className="w-full h-100vh">

<form className="border-b border-gray-200">
<div className="h-100vh flex justify-between z-100 text-color-[#255bb3] lg:py-5 px-20 py-4">
  <div className="flex flex-col items-center flex-1  ml-[-20rem]">
    <span className="text-sm ml-2 text-[#255bb3] p-2">工場の「困った」イマ解決する</span>
    <span className="text-3xl font-bold pr-12">ASNARO</span>
  </div>
  <div className="lg:flex md:flex lg:flex-1 items-center justify-end">
  
    
  <ul className="hidden md:flex gap-4 mr-16 text-[15px]">

  
  <div className="flex items-center">
  <input
          type="date"
          placeholder="From"
          className="border rounded-l px-2 py-2 focus:outline-none focus:ring focus:border-yellow-100"
        />
        <input
          type="date"
          placeholder="To"
          className="border px-2 py-2 focus:outline-none focus:ring focus:border-yellow-100"
        />

        {/* Keyword input field */}
        <input
          type="text"
          placeholder="Keyword"
          className="border px-2 py-2 focus:outline-none focus:ring focus:border-yellow-300"
        />

        {/* This is the dropdown but i'm not sure its the best solution */}
        <select className="border px-2 py-2 focus:outline-none focus:ring focus:border-yellow-300">
          <option value="Teacher">絞り込み</option>
          <option value="keyword">Doctor</option>
          <option value="dropdown">Nurse</option>
        </select>

        {/* This is the Search button */}
        <button className="bg-[#255bb3] text-white px-2 py-2 rounded-r">
          Search
        </button>
  </div>  

 
<div className="flex items-center whitespace-nowrap">
<button className=" bg-[#d9d9d9] p-2 mr-2">ログイン</button>
  
 <button className=" bg-[#ffaa00] p-2 text-white">新規登録</button>
  
</div>
</ul>

  </div>
  <div onClick={handleNav} className='block md:hidden'>
  {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={25}/>}
</div>
<div className={!nav ? 'md:hidden px-4 fixed top-0 left-0 w-[60%] h-full border-r border-r-green-50 bg-gray-500 ease-in-out duration-500' : 'fixed left-[-100%]' }>
<div className=" pt-5 pb-2">
    <span className="">工場の「困った」イマ解決する</span>
    <h1 className="w-full text-3xl font-bold">ASNARO</h1>
  </div>
  <ul className='pt-2 uppercase font-bold'>
    <li className='p-4 border-b hover:border-gray-500'>Home</li>
    <li className='p-4 border-b hover:border-gray-500'>Search</li>
    <li className='p-4 border-b hover:border-gray-500'>Sign-in</li>
    <li className='p-4 border-b hover:border-gray-500'>Register</li>
  </ul>
</div>
</div>
</form>

  </div>

  );
};

export default Nav;






