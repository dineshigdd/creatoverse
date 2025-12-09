import React, { useState } from 'react'
import { FaPen, FaInfoCircle, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'
import '../styles/Card.css'
import { Link } from 'react-router-dom'
import socialMediaBaseUrl from '../config/baseUrls.json'

function Card( { creator } ) {
  const { id, name, url, description, imageURL } =  creator ;
  const socialMediaLinks = {
    youtube: `https://${ socialMediaBaseUrl.youtube}/`,
    x: `https://${ socialMediaBaseUrl.x }/`,
    instagram: `https://${ socialMediaBaseUrl.instagram}/`,
  }

  return (
    <div className='card'>     
             <img src={ imageURL }/>
             <div className='card-content-container'>
                    <div className='card-content'>
                      <div className="card-name-info-edit-links-container">
                            <div className='card-name'>{name}</div>   
                            <div className='card-info-edit-links'>
                                <Link to={`/creator/${ id }`}>
                                  <FaInfoCircle  
                                    size={ 25 }
                                    color="#FFFFFF"
                                  />
                                </Link>
                                <Link to={`/edit/${ id }`}>
                                  <FaPen
                                    size={ 25 }
                                    color="#FFFFFF"
                                  />
                                </Link>
                            </div>  
                      </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                    <div className='card-social-media-links-container'>
                      { url.youtube && 
                      <a href={  socialMediaLinks.youtube + '@'+ url.youtube  } target="_blank" rel="noopener noreferrer">
                        <FaYoutube
                        size={ 30 }
                        color='#FFFFFF'   
                             
                      />                      
                    </a>
                    }
                     { url.x && 
                     <a href={ socialMediaLinks.x +  url.x } target="_blank" rel="noopener noreferrer">
                        <FaTwitter
                        size={ 30 }
                        color='#FFFFFF'        
                      />   
                    </a> 
                    }
                     { url.instagram && 
                      <a href={ socialMediaLinks.instagram + url.instagram } target="_blank" rel="noopener noreferrer">
                        <FaInstagram
                        size={ 30 }
                        color='#FFFFFF'        
                      />   
                    </a> 
                    }
                  </div>
                  <div className='card-description'>{ `${ description.substring(0,100)}...`}</div>           
            </div>

             </div>
            
    </div> 
  )
}

export default Card