import React, { useEffect, useState } from 'react'
import ShowCreators from './ShowCreators'
import AddCreator from './AddCreator'
import { Link, Outlet } from 'react-router-dom'
import '../styles/Main.css'


function Main() {
  const [ state, setState ] = useState();
  useEffect(()=>{
      
  },[])
  return (
    <main>
    <div id="hero" className='container-fluid center'>
      <div className="hero-text">
          <h1>CREATOVERSE</h1>
          <Link 
            role="button" 
            to='/'
            onClick={ ()=>setState( <ShowCreators /> )} 
            >view all creators
          </Link>

          <Link role="button" to='add-creator'>add a creator</Link>
      </div>            
    </div>
    <section>
      <Outlet />
    </section>
    </main>
  )
}

export default Main