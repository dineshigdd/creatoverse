import React, { useState } from 'react'
import { supabase } from '../client'
import { useNavigate  } from 'react-router-dom';
import '../styles/AddCreator.css';


function AddCreator({onSave }) {
  const [ name, setName ] = useState("");
  const [ url, setURL ] = useState({ youtube: '', x: '', instagram: '' });
  const [ description, setDescription ] = useState("");
  const [ imageURL, setimageURL ] = useState("");
  const navigate = useNavigate();


  
  const handleSubmit = async ( e )=>{
    e.preventDefault();
  
    const { error } = await supabase
      .from('creators')
      .insert([
         { name , url , description , imageURL }
      ]);

     
    if(error){
      console.log("error", error);
      return;
    } 
    
    onSave();
    navigate('/')
    }
  

  return (
    <div className='container'>     
      <form onSubmit={ handleSubmit }>
        <h2>Add new Creator</h2>
        <label>Name
          <input type='text' onChange={ ( e )=> setName( e.target.value )} />
        </label>

         <label>Social Media Links
          <p>Enter Social Media handle without the '@'</p>
         </label>
         <label>YouTube
            <input type='text' placeholder='youTube' onChange={ ( e )=> setURL( prev => ({...prev, youtube: e.target.value }) ) }/>
          </label>

        <label>x ( Twitter )
          <input type='text' placeholder='X' onChange={ ( e )=> setURL( prev => ({...prev, x: e.target.value }) ) }/>
        </label>
         
         <label>Instagram
          <input type='text' placeholder='Instagram' onChange={ ( e )=> setURL( prev => ({...prev, instagram: e.target.value }) ) }/>
         </label>
         

        <label>Description
          <textarea onChange={ ( e )=> setDescription( e.target.value )}/>        
        </label>

       <label>image Url
          <input type='text'  onChange={ ( e )=> setimageURL( e.target.value )}/>
        </label>
      <button style={{ width:'100%', margin : 0}} type='submit'>Submit</button>        
      </form>



    </div>
  )
}

export default AddCreator