import React from 'react'
import { useParams } from 'react-router-dom'
import SectionData from '../../section/SectionData';


const SingleCard = () => {
    const {id} = useParams();
    console.log(SectionData[id-1]); 
  return (
    <div>
    hello    
    </div>
  )
}

export default SingleCard