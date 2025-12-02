import React from 'react'
import { FaYoutube } from 'react-icons/fa'
import '../styles/Card.css'

function Card({ name, url, description, imageURL}) {
  return (
    <div className='card'>     
             <img src={ imageURL }/>
             <div className='content-container'>
                   <div className='content'>
                  <div className='name'>{name}</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                  <div>
                      <a href={ url } target="_blank" rel="noopener noreferrer">
                        <FaYoutube
                        size={ 30 }
                        color='#FF0000'        
                      />   
                    </a>
                  </div>
                  <div className='description'>{ description}</div>           
            </div>

             </div>
            
    </div> 
  )
}

export default Card