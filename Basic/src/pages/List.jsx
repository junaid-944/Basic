import React from 'react'

function List() {
  return (
    <div>
      <h1 className='text-center text-[50px] font-extrabold'>Thses are Ordered list and Unorderd list Examples</h1>
      <div>
      <h1>Ordered List Example</h1>
      <ol className='list-decimal flex justify-center gap-5'>
      {/* this is ordered list and flex mean align in one row and also justified at center */}
        <li>Junaid Ur Rahman</li>
        <li>Ihsan Ur Rahman</li>
        <li>haroon Sadiq</li>
        <li>Hamdan Sadiq</li>
        <li>Irha Muqaddas</li>
      </ol>
    </div>
    <div>
        <h1>Unordered List Example</h1>
        <ul className='px-5 list-disc'>
          <li>Junaid Ur Rahman</li>
          <li>Ihsan Ur Rahman</li>
          <li>haroon Sadiq</li>
          <li>Hamdan Sadiq</li>
          <li>Irha Muqaddas</li>
        </ul>
  
    </div>
    </div>
  )
}

export default List
