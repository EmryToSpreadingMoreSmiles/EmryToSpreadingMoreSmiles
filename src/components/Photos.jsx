import React from 'react'

const Photos = ({data}) => {
  return (
    <div className='grid grid-cols-3'>
        {data.map((item, index) => (
            <div className='m-2' key={index}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            </div>
        ))}
    </div>
  )
}

export default Photos