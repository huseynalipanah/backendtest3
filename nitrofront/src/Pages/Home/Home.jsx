import React from 'react'
import { Helmet } from 'react-helmet-async'
import OurServices from '../../Components/OurServices/OurServices'

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Home</title>
    </Helmet>
    <div>
        <OurServices/>
    </div>
    </>
  )
}
export default Home