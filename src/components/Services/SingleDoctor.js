import Button from '@restart/ui/esm/Button'
import React from 'react'
import { useParams } from 'react-router'
import useLoadData from '../../hooks/useLoadData'

const SingleDoctor = () => {
    const {id} = useParams()


    // const [data] = useLoadData()
    // console.log(data)
    // const item = data.filter(doctor=>doctor.id===id)
    // console.log(item)
    return (
        <>
            {/* <div className="container items-center px-5 py-12 lg:px-20">
                <div className="p-6 mx-auto bg-white border rounded-lg shadow-xl lg:w-1/2">
                    <div className="flex flex-col items-start py-2 rounded-lg lg:flex-row">
                        <div className="flex items-center justify-center w-full lg:justify-start lg:w-1/2">
                            <img src={`images/${item.image}`} alt="placeholder" className="rounded-lg" />
                        </div>
                        <div className="flex flex-col w-full text-blueGray-500 lg:ml-4">
                            <h2 className="mt-4 mb-8 text-xs font-semibold tracking-widest text-black uppercase lg:mt-0 title-font"> Course Name : {item.name}</h2>
                            <p className="mb-3 text-base leading-relaxed text-blueGray-500">
                                Description : {item.description} <br />
                            </p>
                        </div>

                    </div>
                    <Button>Back To Home Page</Button>
                </div>

            </div> */}
        </>
    )
}

export default SingleDoctor
