import { useRoutes } from 'react-router-dom'
import Main from './pages/Main'
import ShowCreators from './pages/ShowCreators'   
import AddCreator from './pages/AddCreator'
import EditCreators from './pages/EditCreators'
import ViewCreator from './pages/ViewCreator'
import {  useEffect, useState } from 'react'
import { supabase } from './client'





// import './App.css'


function App() {
  const [ creators , setCreators ] = useState([]);
  const [ revalidateKey , setRevalidateKey ] = useState(0);

 
  useEffect (()=>{
    const  fetchCreators = async ()=>{
        const { data, error } = await supabase
        .from('creators')
        .select('*')
        

        if(error){
          console.log("error",error)
          return;
        }

      setCreators(data);    
  }
  fetchCreators();
  
  },[ revalidateKey ]);


  
  let element = useRoutes([ 
        {
        path:"/",
        element:<Main/>,        
        children:[
        {
          index:'true',   
          element:<ShowCreators creators = { creators.slice(0,5)} />        
        },
        {
          path:"creators", 
          element:<ShowCreators creators = { creators } />        
        },
        
        {
          path:"new", 
          element:<AddCreator onSave = { ()=> setRevalidateKey( k => k + 1)}/>
        },
        { 
          path:"edit/:id",
          element:<EditCreators onSave = { ()=> setRevalidateKey( k => k + 1)} />
          // element:<EditCreators  />
        },
        {
          path:"creator/:id",
          element:<ViewCreator />
        }    
      ]
    },
    // Any route *outside* this structure (like a 404 page) would go here
      // { path: "*", element: <NotFound /> }
  ]);


  return element;
}

export default App
