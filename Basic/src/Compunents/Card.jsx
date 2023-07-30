import React from 'react'
import img from '../Image/img.jpg'
import img1 from '../Image/junaid.jpg'

function Card() {
  return (
    // <div className='flex justify-center py-12 bg-pink-400'>
    //   <div className='bg-white p-4 w-56 rounded-2xl flex flex-col items-center justify-center'>
    //   <img src={img1} className=''></img>
    //   <img src={img} className='w-24 h-24 rounded-full absolute mb-20 '></img>
    //   <h1 className='text-blue-900 text-xl mt-14 font-semibold'>Junaid Ur Rahman</h1>
    //   <p>Software Engineer</p>
    //   <div className='flex gap-6 font-extrabold'>
    //     <p className='text-gray-700 text-sm'>12</p>
    //     <p className='text-gray-700 text-sm px-4'>10M</p>
    //     </div>
    //   <div className='flex'>
    //     <p className='text-gray-700 text-sm'>Follwers</p>
    //     <p className='text-gray-700 text-sm px-4'>Follwing</p>
    //   </div>
       
      
    //   <button className='bg-yellow-400 px-16 py-1 rounded-2xl'>Follow</button>
    //   <p className='px-2'>My Name is Junaid Ur Rahman. And I belong to Lower Dir khall</p>
    //   </div>
    // </div>
    <div className='flex flex-col justify-center mx-auto items-center h-72 bg-black text-white'>
      <div className='flex justify-center flex-col mt-6'>
        <div className='flex gap-32'>
          <p>Here's how you're doing</p>
          <p>(?)</p>
        </div>
        <div className='flex gap-x-40'>
          <p>Seller Level</p>
          <p>New Seller</p>
        </div>
        <div className='flex gap-28'>
          <p>Next evaluation</p>
          <p className='text-green-600'>15-Aug-2023</p>
        </div>
        <div className='flex gap-40'>
          <p>Response Time</p>
          <p className='text-green-600'>1 hour</p>
        </div>
        <div className='flex gap-4'>
         <div> <p className='h-16 w-16 rounded-full bg-black flex justify-center items-center border-green-600 border-4 text-white mt-8'>
            100%
          </p>
          <p>Response<br/>  Rate
          </p>
          </div>
          <div>
          <p className='h-16 w-16 rounded-full bg-black flex justify-center items-center border-green-600 border-4 text-white mt-8'>
            100%
          </p>
          <p>Order <br/>Complition</p>
          </div>
          <div>
          <p className='h-16 w-16 rounded-full bg-black flex justify-center items-center border-green-600 border-4 text-white mt-8'>
            100%
          </p>
          <p>On-time <br/> Delivery</p>
          </div>
          <div>
          <p className='h-16 w-16 rounded-full bg-black flex justify-center items-center border-4 text-white mt-8'>
            N/A
          </p>
          <p>
            Positive <br/>Rating
          </p>
          </div>
        </div>
        <p>_________________________________________________</p>
        <select className='bg-black w-100%' >
          <option value='1'>Reach Your Top level</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
        </select>
      </div>
    </div>
  )
}

export default Card
