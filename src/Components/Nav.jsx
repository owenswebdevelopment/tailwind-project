import { Link, ScrollLink } from "react-scroll";

const Nav = () => {
  const content = <>
  <div className="">
<ul>

  <Link to="Search">
  <li>Search</li>
  <div className="flex items-center">
  </div>   
  </Link>

  <Link to="Signin">
  <button>Signin</button>
  </Link>

  <Link to="Register">
  <li>Register</li>
  </Link>
</ul>
  </div>
  </>

  return (
<div className="w-full">
<nav className="border-b border-gray-200">
<div className="h-10vh flex justify-between z-50 text-color-[#255bb3] lg:py-5 px-20 py-4">
  <div className="flex flex-col items-center flex-1">
    <span className="text-sm ml-2 text-[#255bb3]">工場の「困った」イマ解決する</span>
    <span className="text-3xl font-bold">ASNARO</span>
  </div>
  <div className="lg:flex md:flex lg:flex-1 items-center justify-end">
  
  <div className="">
    
  <ul className="flex gap-4 mr-16 text-[15px]">

  <Link to="Search">
  <div className="flex items-center">
  <input
          type="date"
          placeholder="From"
          className="border rounded-l px-2 py-2 focus:outline-none focus:ring focus:border-blue-100"
        />
        <input
          type="date"
          placeholder="To"
          className="border px-2 py-2 focus:outline-none focus:ring focus:border-blue-100"
        />

        {/* Keyword input field */}
        <input
          type="text"
          placeholder="Keyword"
          className="border px-2 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />

        {/* This is the dropdown but i'm not sure its the best solution */}
        <select className="border px-2 py-2 focus:outline-none focus:ring focus:border-blue-300">
          <option value="Teacher">Teacher</option>
          <option value="keyword">Doctor</option>
          <option value="dropdown">Nurse</option>
        </select>

        {/* This is the Search button */}
        <button className="bg-[#255bb3] text-white px-2 py-2 rounded-r">
          Search
        </button>
  </div>  

  </Link>
<div className="flex items-center whitespace-nowrap">
<Link to="Signin">
  <button className=" bg-[#d9d9d9] p-2 mr-2">ログイン</button>
  </Link>
  <Link to="Register">
 <button className=" bg-[#ffaa00] p-2 text-white">新規登録</button>
  </Link>
</div>
</ul>
</div>
  </div>
</div>
   </nav>
  </div>
  );
};

export default Nav;






