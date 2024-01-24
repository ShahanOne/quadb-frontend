import React from 'react'

const Card = ({number,platform,lastTraderPrice,buyPrice,sellPrice,difference,savings}) => {
  return (
    <div className='rounded-lg py-3 px-4 grid grid-cols-6 bg-[#2e3241]'>
<p className='text-white text-2xl font-bold'>{number}</p>
<p className='text-white text-2xl font-bold'>{platform}</p>
<p className='text-white text-2xl font-bold'>₹ {lastTraderPrice}</p>
<p className='text-white text-2xl font-bold text-end'>₹ {buyPrice} / ₹ {sellPrice}</p>
<p className='text-[#d95656] text-2xl font-bold text-end'>{difference}</p>
<p className='text-[#d95656] text-2xl font-bold text-end'>₹ {savings}</p>
    </div>
  )
}

export default Card