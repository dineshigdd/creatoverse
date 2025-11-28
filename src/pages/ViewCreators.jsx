import React, { useEffect, useState } from 'react'
import { supabase } from '../client'

function ViewCreators({ id }) {

  const [ creator, setCreators ] = useState([])
  useEffect (()=>{
    const  fetchCreators = async ()=>{
        const { data, error } = await supabase
        .from('creators')
        .select('*')
        

        if(error){
          console.log("error",error)
          return;
        }
    
      
      setCreators(data.filter( ( creator ) => creator.id == id ));    
  }
  fetchCreators();
  },[]);
  return (
    <div>View  a single creator
      {
        creator
      }

    </div>
  )
}

export default ViewCreators