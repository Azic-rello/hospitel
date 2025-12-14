import React from 'react'
import Rasm from '../../public/assets/rasm3.png'
import Icon from '../../public/assets/icon.png'
import Icon1 from '../../public/assets/icon1.png'
import Icon2 from '../../public/assets/icon2.png'
import Doctor from '../../public/assets/doctor.png'
import Doctor1 from '../../public/assets/doctor1.png'

const OurDoctors = () => {
  return (
    <div>
      <h3 className='ml-[42%] mt-[4%] text-blue-600 font-bold'>TRUSTED CARE</h3>
      <h1 className='ml-[40%] text-3xl text-blue-950 font-bold'>Our Doctors</h1>
      <div className='flex flex-wrap gap-20'>
        <div>
        <div className=' h-100 border-black'>
          <img className='w-[270px] h-65 ml-[85%]' src={Rasm} alt="" />
          <div className='w-[18%] h-30 bg-blue-300 ml-[15%] mt-[-1%] absolute'>
            <h1 className='ml-[30%] mt-[5%] text-blue-600 relative'>Doctor's Name</h1>
          <h1 className='ml-[25%] font-bold text-blue-900'>N E U R O L O G Y</h1>
         <div className='flex flex-wrap gap-4'>
           <img className='ml-[28%] ' src={Icon} alt="" />
          <img className=' ' src={Icon1} alt="" />
          <img src={Icon2} alt="" />
         </div>
         <div className='w-full h-10 bg-blue-950 mt-[12%] absolute '>
          <h1 className='ml-[30%] mt-[3%] text-white relative'>View Profile</h1>
         </div>
          </div>
        </div>
      </div>
      <div>
        <div className=' h-100 border-black'>
          <img className='w-[270px] h-65 ml-[85%]' src={Doctor} alt="" />
          <div className='w-[18%] h-30 bg-blue-300 ml-[15%] mt-[-1%] absolute'>
            <h1 className='ml-[30%] mt-[5%] text-blue-600 relative'>Doctor's Name</h1>
          <h1 className='ml-[25%] font-bold text-blue-900'>N E U R O L O G Y</h1>
         <div className='flex flex-wrap gap-4'>
           <img className='ml-[28%] ' src={Icon} alt="" />
          <img className=' ' src={Icon1} alt="" />
          <img src={Icon2} alt="" />
         </div>
         <div className='w-full h-10 bg-blue-950 mt-[12%] absolute '>
          <h1 className='ml-[30%] mt-[3%] text-white relative'>View Profile</h1>
         </div>
          </div>
        </div>
      </div>
      <div>
        <div className=' h-100 border-black'>
          <img className='w-[270px] h-65 ml-[85%]' src={Doctor1} alt="" />
          <div className='w-[18%] h-30 bg-blue-300 ml-[15%] mt-[-1%] absolute'>
            <h1 className='ml-[30%] mt-[5%] text-blue-600 relative'>Doctor's Name</h1>
          <h1 className='ml-[25%] font-bold text-blue-900'>N E U R O L O G Y</h1>
         <div className='flex flex-wrap gap-4'>
           <img className='ml-[28%] ' src={Icon} alt="" />
          <img className=' ' src={Icon1} alt="" />
          <img src={Icon2} alt="" />
         </div>
         <div className='w-full h-10 bg-blue-950 mt-[12%] absolute '>
          <h1 className='ml-[30%] mt-[3%] text-white relative'>View Profile</h1>
         </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default OurDoctors