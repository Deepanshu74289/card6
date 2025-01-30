import React from 'react'

export default function Form() {
  return (<>
    <div
      className="bg-cover w-full  bg-center  h-full "
      style={{
        backgroundImage: `url(https://tecdn.b-cdn.net/img/new/standard/city/041.jpg)`,

      }}
    >

    <div className='flex justify-center  '>
    <div className='flex justify-center items-center  border-spacing-2 border-4 border-black h-[500px]  w-[400px] mt-[100px]  mb-[100px]'>

<div className=" jsutify-between  ">
  <h1 className='font-bold text-7xl ml-[100px] mb-6 justify-center text-red-700  '>Form</h1>

  <input className='p-2 border-black w-[330px] ml-[20px] bg-black text-white mt-2  rounded-lg border-separate' type="Email" placeholder=' Email' />

  <div className=''>
    <input className='p-2 w-[330px] ml-[20px] bg-black text-white mt-2 rounded-lg' type="Email" placeholder ='password' />
  </div>
  <div>
    <input className='p-2  w-[330px] ml-[20px] bg-black text-white mt-2 rounded-lg' type="Email" placeholder='confirm your password' />
  </div>
  <div>
    <button className='w-[330px] border-black border-2 p-2 mt-3   font-semibold hover:text-green-500 rounded-lg ml-[20px] bg-blue-500 '> login</button>
  </div>
  <h2 className='font-bold  justify-center mt-8 ml-4'>we hope that your life become a god blessing</h2>

</div>
</div>
    </div>
    </div>
  </>

  )
}
