import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#071952] flex items-center justify-between'>
      <div className='flex list-none  gap-x-8 px-4  py-2 text-white font-semibold'>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Detail</li>

    </div>
    <div className='px-4 flex gap-x-4'>
      <button className='bg-green-700 px-4 py-1 hover:bg-slate-500 text-white font-semibold rounded-md' >Login</button>
      <button className='bg-green-700 px-4 py-1 hover:bg-slate-500 text-white font-semibold rounded-md' >SignUp</button>

    </div>
    </div>
  )
}

export default Navbar
