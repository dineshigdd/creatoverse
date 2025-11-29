import React from 'react'
import { FaYoutube } from 'react-icons/fa'
import '../styles/Card.css'

function Card({ name, url, description, imageURL}) {
  return (
    <div>  
        <div className='card' style={{ backgroundImage: `url(${ imageURL })`}}>
            <div>{name}</div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            <div>
                <a href={ url } target="_blank" rel="noopener noreferrer">
                  <FaYoutube
                  size={ 30 }
                  color='#FF0000'        
                />   
              </a>
            </div>
            <div>{ description}</div>
            {/* <div><img src={ imageURL }/></div> */}
      </div>
    </div> 
  )
}

export default Card