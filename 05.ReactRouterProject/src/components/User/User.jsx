import React from 'react'

// It is a React router hook that is used to create and access multiple parameters of a website.
// The useParams hook gives access to multiple contents in the same URL path. 
import {useParams} from "react-router-dom"

function User() {
  const {id} = useParams() 
  return (
    <div className='bg-gray-700 text-white text-3xl p-4'>User: {id} </div>
  )
}

export default User