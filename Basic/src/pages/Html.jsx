import React from 'react'

function Html() {
  return (
    <div className='bg-[#ff4500] py-24'>
      <h1 className='text-[50px] text-center font-extrabold'>Junaid & Aziz's Task</h1>
      <div className='flex justify-center py-4 ' >
      <form className='flex flex-col border py-10 bg-slate-100 gap-y-3 w-[40%]  rounded-3xl shadow-3xl'>
      <h1 className='text-[25px] mx-7 text-[#ff4500]  py-3 '>FANCY TEXT INPUTS</h1>

        <input className='border px-2 rounded-2xl shadow-md hover:bg-[#ff4500] outline-none w-[94%] mx-auto py-1 ' type='text' placeholder='Fist Name ' />
        
        <input className='border px-2 rounded-2xl shadow-md hover:bg-[#ff4500] outline-none w-[94%] mx-auto py-1' type='text' placeholder='Last Name ' />
        
        <input className='border px-2 rounded-2xl shadow-md hover:bg-[#ff4500] outline-none w-[94%] mx-auto py-1' type='text' placeholder='Email Adress' />
        
        <input className='border px-2 rounded-2xl shadow-md hover:bg-[#ff4500] outline-none w-[94%] mx-auto py-1' type='text' placeholder='Confirm Email Adress' /> 
        <button className='border px-2 rounded-2xl w-1/6 mx-5 shadow-md hover:bg-[#ff4500] py-1 'type='submit'>Submit</button>
      </form>
      </div>

    </div>
  )
}

export default Html
