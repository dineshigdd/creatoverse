import React, { useEffect, useState } from 'react'
import { supabase } from '../client'
import { useParams } from 'react-router-dom';

function ViewCreator() {

  const [ creator, setCreator ] = useState(null)
  const { id } = useParams();

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
    <div>View  a single creator
     {
        creator?.map( creator => (<div key={ creator.id }>
              <li>{ creator.name }</li>
              <li>{ creator.url }</li>
              <li>{ creator.description }</li>
          </div>
          
        ))
     
     }

    </div>
  )
}

export default ViewCreator