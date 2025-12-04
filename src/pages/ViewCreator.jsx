import React, { useEffect, useState } from 'react'
import { supabase } from '../client'
import { useParams } from 'react-router-dom';
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'
import socialMediaBaseUrl from '../config/baseUrls.json'
import '../styles/ViewCreator.css'

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
    <div className='container'>                
        {
            creator?.map( creator => (<figure className='grid profile-container' key={ creator.id }>
                  <div className='profile-image-container'>
                        <img src={ creator.imageURL } />
                  </div>
                  <div>
                        <h2 className='name'>{ creator.name }</h2>
                        <p>{ creator.description }</p>
                        <div className='social-media-links-container'>
                              <a href={ socialMediaLinks.youtube + creator.url  }
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <FaYoutube
                                    size={ 30 }
                                    color='#FFFFFF'                         
                                  /> 
                                  <span>@{  creator.url }</span>                    
                              </a>
                            
                            <a href={ socialMediaLinks.x + creator.url  }
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <FaTwitter
                                    size={ 30 }
                                    color='#FFFFFF'                         
                                  /> 
                                  <span>@{  creator.url }</span>                    
                              </a>

                              <a href={ socialMediaLinks.instagram + creator.url  }
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <FaInstagram
                                    size={ 30 }
                                    color='#FFFFFF'                         
                                  /> 
                                  <span>@{  creator.url }</span>                    
                              </a>
                          </div>
                      </div>
              </figure>
              
            ))
        
        }      
    </div>
  )
}

export default ViewCreator