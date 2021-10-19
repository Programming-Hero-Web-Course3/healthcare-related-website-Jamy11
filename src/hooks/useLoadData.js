import {useState,useEffect} from 'react'

const useLoadData = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch('./datas/services.json')
        .then(res =>res.json())
        .then(result => setData(result))
    }, [])

    return [data, setData]
}

export default useLoadData
