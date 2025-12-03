import React, { useState } from 'react'
import { FaPen, FaInfoCircle, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'
import '../styles/Card.css'
import { Link } from 'react-router-dom'
import ViewCreators from '../pages/ViewCreator'
import EditCreators from '../pages/EditCreators'

function Card( { creator } ) {
  const { id, name, url, description, imageURL } =  creator ;

  return (
    <div className='card'>     
             <img src={ imageURL }/>
             <div className='content-container'>
                    <div className='content'>
                      <div className="name-info-edit-links-container">
                            <div className='name'>{name}</div>   
                            <div className='info-edit-links'>
                                <Link to={`view-creator/${ id }`}>
                                  <FaInfoCircle  
                                    size={ 25 }
                                    color="#FFFFFF"
                                  />
                                </Link>
                                <Link>
                                  <FaPen
                                    size={ 25 }
                                    color="#FFFFFF"
                                  />
                                </Link>
                            </div>  
                      </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                    <div className='social-media-links-container'>
                      <a href={ url } target="_blank" rel="noopener noreferrer">
                        <FaYoutube
                        size={ 30 }
                        color='#FFFFFF'   
                             
                      />                      
                    </a>
                     <a href={ url } target="_blank" rel="noopener noreferrer">
                        <FaTwitter
                        size={ 30 }
                        color='#FFFFFF'        
                      />   
                    </a> 
                     <a href={ url } target="_blank" rel="noopener noreferrer">
                        <FaInstagram
                        size={ 30 }
                        color='#FFFFFF'        
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