import React, { useEffect, useState } from 'react'
import './Detail.scss'
import { useParams } from 'react-router-dom'
const Detail = () => {
   const {id} = useParams()
   const [detail, setDetail] = useState([])
   useEffect(() => {
     fetch("http://localhost:3000/service/" +id)
     .then(res=>res.json())
     .then(data => setDetail(data))
   }, [])
   
  return (
    <div>
         <i className={detail.icon}></i>
          <span>{detail.name}</span>
          <p>{detail.about}</p>
    </div>
  )
}

export default Detail