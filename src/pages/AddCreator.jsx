import React, { useState } from 'react'
import { supabase } from '../client'


function AddCreator() {
  const [ name, setName ] = useState("");
  const [ url, setURL ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ imageURL, setimageURL ] = useState("");

  
  const handleSubmit = async ( e )=>{
    e.preventDefault();
  
    const { error } = await supabase
      .from('creators')
      .insert([
         { name , url , description , imageURL }
      ])
    }
  

  return (
    <div className='container'>
      <form onSubmit={ handleSubmit }>
        <label>name
          <input type='text' onChange={ ( e )=> setName( e.target.value )} />
        </label>

        <label>URL
          <input type='text' onChange={ ( e )=> setURL( e.target.value )}/>
        </label>


        <label>description
          <input type='text' onChange={ ( e )=> setDescription( e.target.value )}/>
        </label>

       <label>imageUrl
          <input type='text'  onChange={ ( e )=> setimageURL( e.target.value )}/>
        </label>
        <button type='submit'>Submit</button>
      </form>



    </div>
  )
}

export default AddCreator