import React from 'react'
import logo from '../../../assets/logo.png'

const ZapShiftLogo = () => {
  return (
    <div className='flex items-end'>
        <img className='mb-2' src={logo} alt="Logo" />
        <p className='text-3xl -mt-2 font-extrabold'>ZapShift</p>
    </div>
  )
}

export default ZapShiftLogo