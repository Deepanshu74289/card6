import React from 'react'

export default function Footer() {
    return (
      <footer className='flex justify-between bg-black text-white   '>
       
            
        <div className=' ml-2'>
            <h1 className='font-bold text-2xl ml-2'>Don't miss out</h1>
            <h2 className='ml-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, hic!</h2>

            <div className='flex  gap-3 mt-3 ml-2' >

                <input className='p-2' type="Email" placeholder='Enter your Email' /> <input type="date" placeholder='dd/mm/yyy' />
                
            </div>
            <button className='w-[400px] border-white border-2 p-2 mt-3 ml-2 font-semibold '> login</button>
            <h2 className='font-bold mt-3 text-xl ml-10'>find us on</h2>
           
        <div  className='flex p-7 gap-6'>
        <img className='h-10 mt-2 rounded-full border-green-400 border-2' src="https://tse2.mm.bing.net/th?id=OIP.Xn27U1Y5z0KR-wPnCt-v0QHaG0&pid=Api&P=0&h=180" alt="" />
        <img className='h-10 mt-2 rounded-full border-green-400 border-2' src="https://tse3.mm.bing.net/th?id=OIP.xa0FgRBsvMi7bmVNCDYsCgHaHa&pid=Api&P=0&h=180" alt="" />
        <img className='h-10 mt-2 rounded-full border-green-400 border-2' src="https://tse1.mm.bing.net/th?id=OIP.jb8oOU0pmh-3RW-1fDMDKAHaGn&pid=Api&P=0&h=180" alt="" />
        <img className='h-10 mt-2 rounded-full border-green-400 border-2' src="https://tse1.mm.bing.net/th?id=OIP.zOCcVTv6jKMsTbljKTNnZgHaHa&pid=Api&P=0&h=180" alt="" />
        <img className='h-10 mt-2 rounded-full border-green-400 border-2' src="https://tse4.mm.bing.net/th?id=OIP.G3_44aidH53m48s1KHQDtgHaHa&pid=Api&P=0&h=180" alt="" />
        </div>

        </div>

      


        <ul className='  gap-4'>
             <li className='font-extrabold '>Company</li>
            <li className='mt-4 mb-2'>background</li>
            <li className='mb-2' >frontend</li>
            <li className=''>backend</li>
        </ul>
        <ul>
            <li className='font-extrabold  '>Custom Service</li>
            <li className='mb-2 mt-4 '>contact no.</li>
            <li className='mb-2'>email id</li>
            <li>whatsapp no.</li>
        </ul>
        <ul className='mr-2'>
            <li className='font-extrabold '>Social services</li>
            <li className='mt-4 mb-2'>room service</li>
            <li className='mb-2'>breakfast service</li>
            <li className='mb-2'>lunch service</li>
            <li> dinner service</li>
        </ul>


      </footer>
    )
}
