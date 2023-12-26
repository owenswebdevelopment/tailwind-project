import React from 'react';

const Footer = () => {
  return (
    <div className='mx-w-[1240px] mx-auto bg-[#255bb3] py-16 px-4 lg:grids-3 gap-8 text-gray-300'>

      <div>
        <h1 className="w-full md:flex text-3xl font-bold pr-12 sm:mr-2">ASNARO</h1>
        <p className="py-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className='ml-auto'>
          <a href="/inquiry">問い合わせ</a>
          <a href="/Company"className='p-4'>運営会社</a>
          <a href="/Policy"className='p-4'>利用規約</a>
          <a href="/Company"className='p-4'>特定商取引法に基</a>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;