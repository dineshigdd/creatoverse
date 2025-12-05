import React, { useEffect, useState } from 'react'
import ShowCreators from './ShowCreators'
import AddCreator from './AddCreator'
import { Link, Outlet } from 'react-router-dom'
import '../styles/Main.css'


function Main() {
 
  return (
    <main>
    <div id="hero" className='container-fluid center'>
      <div className="hero-text">
          <h1>CREATOVERSE</h1>
          <Link 
            role="button" 
            to='/creators'      
            >view all creators
          </Link>

          <Link role="button" to='new'>add a creator</Link>
      </div>            
    </div>
    <section>
      <Outlet />
    </section>
    </main>
  )
}

export default Main