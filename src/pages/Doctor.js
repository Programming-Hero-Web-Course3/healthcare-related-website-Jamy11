import { Button, Card } from 'react-bootstrap'
import React from 'react'
import { useHistory, useParams } from 'react-router'
import {useState,useEffect} from 'react'

const Doctor = () => {
    const {id} = useParams()

    const [data, setData] = useState([])

    const [item,setItem] = useState([])

    useEffect(() => {
        fetch('../datas/services.json')
        .then(res =>res.json())
        .then(result => {
            setData(result)
            setItem(result.filter(re=>re.id==id))
        })
    }, [])

   const history = useHistory()
   const goToHome =()=>{
       history.push('/')
   }
    return (
        <>
        {item.length>=1?
        
            <div className="container items-center px-5 py-12 lg:px-20">
                <div className="p-6 mx-auto bg-white border rounded-lg shadow-xl lg:w-1/2">
                    <div className="flex flex-col items-start py-2 rounded-lg lg:flex-row">
                        <div className="flex items-center justify-center w-full lg:justify-start lg:w-1/2">
                            <img src={`../images/${item[0].image}`} alt="placeholder" className="rounded-lg" />
                        </div>
                        <div className="flex flex-col w-full text-blueGray-500 lg:ml-4">
                            <h2 className="mt-4 mb-8 text-xs font-semibold tracking-widest text-black uppercase lg:mt-0 title-font"> Course Name : {item[0].name}</h2>
                            <p className="mb-3 text-base leading-relaxed text-blueGray-500">
                                Description : {item[0].description} <br />
                            </p>
                        </div>

                    </div>
                    <Button onClick={goToHome}>Back To Home Page</Button>
                </div>

            </div>
            :
            'Loading'
            } 
        </>
    )
}

export default Doctor
