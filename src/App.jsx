import { NavLink } from 'react-router'
import { useRoutes } from 'react-router-dom'
import Main from './pages/Main'
import ShowCreators from './pages/ShowCreators'   
import AddCreator from './pages/AddCreator'
import EditCreators from './pages/EditCreators'
import ViewCreator from './pages/ViewCreator'
import { Children, useEffect, useState } from 'react'
import { supabase } from './client'

// import './App.css'


function App() {
  const [ creators , setCreators ] = useState([]);

  useEffect (()=>{
    const  fetchCreators = async ()=>{
        const { data, error } = await supabase
        .from('creators')
        .select('*')

        if(error){
          console.log("error",error)
          return;
        }
      console.log( data)
      setCreators(data);    
  }
  fetchCreators();
  },[]);

  let element = useRoutes([ 
        {
        path:"/",
        element:<Main/>,        
        children:[
        {
          path:"/",   
          element:<ShowCreators creators = { creators }/>
        },
        {
          path:"add-creator", 
          element:<AddCreator />
        },
        { 
          path:"edit-creators",
          element:<EditCreators />
        },
        {
          path:"view-creator/:id",
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
