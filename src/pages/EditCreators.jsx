import React, { useEffect, useState } from 'react'
import { supabase } from '../client'
import { useParams } from 'react-router-dom';


function EditCreators() {
  const [ name, setName ] = useState("");
  const [ url, setURL ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ imageURL, setimageURL ] = useState("");  
  const { id } = useParams();

  useEffect (()=>{
    
      const  fetchCreator = async ()=>{
          const { data, error } = await supabase
          .from('creators')
          .select('*')          
          .eq('id', id )
          .single()

          if( data ){
            setName( data.name )
            setURL( data.url );
            setDescription( data.description )
            setimageURL( data.imageURL )
          }

          if(error){
            console.log("error",error)            
            return;
          }      
      
         
          
         
    }
    fetchCreator();  
   
    },[]);


  const handleSubmit = async ( e )=>{
    e.preventDefault();
  
    const { error } = await supabase
      .from('creators')
      .update({ name , url , description , imageURL })
      .eq('id', id )
    }
  

  return (
    <div className='container'>
      <form onSubmit={ handleSubmit }>
        <label>Name
          <input type='text' value={ name } onChange={ ( e )=> setName( e.target.value )} />
        </label>

        <label>URL
          <input type='text' value={ url } onChange={ ( e )=> setURL( e.target.value )}/>
        </label>


        <label>Description
          <input type='text' value = { description } onChange= { ( e )=> setDescription( e.target.value )}/>
        </label>

       <label>image Url
          <input type='text' value={ imageURL } onChange={ ( e )=> setimageURL( e.target.value )}/>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default EditCreators