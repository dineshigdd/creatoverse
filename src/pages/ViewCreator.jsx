import React, { useEffect, useState } from 'react'
import { supabase } from '../client'
import { useParams } from 'react-router-dom';
import { FaYoutube, FaTwitter, FaInstagram, FaPen } from 'react-icons/fa'
import socialMediaBaseUrl from '../config/baseUrls.json'
import '../styles/ViewCreator.css'
import { Link } from 'react-router-dom'
import profileImagePlaceholder from '../assets/profileImagePlaceholder.png';

function ViewCreator() {

  const [ creator, setCreator ] = useState(null)
  const { id } = useParams();
  const socialMediaLinks = {
    youtube: `https://${ socialMediaBaseUrl.youtube}/`,
    x: `https://${ socialMediaBaseUrl.x }/`,
    instagram: `https://${ socialMediaBaseUrl.instagram}/`,
  }

  

  useEffect (()=>{
    const  fetchCreator = async ()=>{
        const { data, error } = await supabase
        .from('creators')
        .select('*')
        

        if(error){
          console.log("error",error)
          setCreator(null)
          return;
        }
    
       
      data && setCreator( data.filter( ( element ) => element.id == id ));  
     
       
  }
  fetchCreator();
 
 
  
 
  },[]);


  return (
    <div className='container profile-container'>                
        {
            creator?.map( creator => (<figure className='grid profile-container' key={ creator.id }>
                  <div className='profile-image-container'>
                        { creator.imageURL ? <img src={ creator.imageURL } /> : 
                        <img src={ profileImagePlaceholder } className='no-image-placeholder' />
                        
                        }
                        <div className='profile-button-container'>
                            <Link to={`/edit/${ creator.id }`} className='edit-button' role="button">
                                Edit Profile <FaPen 
                                        size={  16 }
                                        color="#FFFFFF"
                                      />
                          </Link>                        
                   </div> 
                  </div>
                  <div>
                        <h2 className='profile-name'>{ creator.name }</h2>
                        <p>{ creator.description }</p>
                        <div className='social-media-links-container'>
                              { creator.url.youtube  && 
                                <a href={ socialMediaLinks.youtube + '@' + creator.url.youtube  }
                                  target="_blank" 
                                  rel="noopener noreferrer">
                                      <FaYoutube
                                      size={ 30 }
                                      color='#FFFFFF'                         
                                    /> 
                                    <span>@{  creator.url.youtube }</span>                    
                                </a>
                            }
                            { creator.url.x  && 
                              <a href={ socialMediaLinks.x +  creator.url.x  }
                                  target="_blank" 
                                  rel="noopener noreferrer">
                                      <FaTwitter
                                      size={ 30 }
                                      color='#FFFFFF'                         
                                    /> 
                                    <span>@{  creator.url.x }</span>                    
                                </a>
                            }
                            { creator.url.instagram  &&
                              <a href={ socialMediaLinks.instagram + creator.url.instagram  }
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <FaInstagram
                                    size={ 30 }
                                    color='#FFFFFF'                         
                                  /> 
                                  <span>@{  creator.url.instagram }</span>                    
                              </a>
                            } 
                        </div>
                    </div>                    
              </figure>
              
            ))        
        }
                      
    </div>
  )
}

export default ViewCreator