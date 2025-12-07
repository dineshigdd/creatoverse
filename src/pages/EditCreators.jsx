import React, { useEffect, useState } from 'react'
import { supabase } from '../client'
import { useNavigate, useParams } from 'react-router-dom';
import Modal from '../components/Modal';

function EditCreators({ onSave }) {
  const [ name, setName ] = useState("");
  const [ url, setURL ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ imageURL, setimageURL ] = useState("");  
  const { id } = useParams();
  const navigate = useNavigate();
  // const [ state, setState ] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      .eq('id', id );

     if(error){
      console.log("error", error);
      return;
    }

     onSave();
     navigate('/');
    
    }

    
  const deleteCreator = async () =>{
    
     const { error } = await supabase
      .from('creators')
      .delete()
      .eq('id',id)

      if(error){   
        console.log("error", error);
        return;
      }
      
    setIsModalOpen(false);
    onSave();
    navigate('/')
      

  }

  const closeModal = ()=>{
   setIsModalOpen( false)
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
          <textarea value = { description } onChange={ ( e )=> setDescription( e.target.value )}/>    
        </label>

       <label>image Url
          <input type='text' value={ imageURL } onChange={ ( e )=> setimageURL( e.target.value )}/>
        </label>
        <div className='grid'>
            <button className='submit-button'  type='submit'>Submit</button>
            <button type='button' onClick={ ()=> setIsModalOpen( true )}           
              className='delete-button'>Delete
            </button>
        </div>        
      </form>
   
    {isModalOpen && (
      <Modal 
        closeModal={closeModal}
        deleteCreator={deleteCreator}
      />
    )}
    </div>
  )
}

export default EditCreators