import React from 'react'
import useLoadData from '../../hooks/useLoadData'
import Service from './Service'

const Services = () => {
    const [data] = useLoadData()

    return (
        <div id='services'>
            <h1 className='text-center font-bold pt-6'>Some Of Our Doctors</h1>
            {data.map(item=> <Service item={item} key={item.id}/>)}
        </div>
    )
}

export default Services
