import React from 'react'
import Card from '../components/Card'
import '../styles/ShowCreators.css'

 

function ShowCreators( { creators }) { 

  return (
    <div className='container'>
        <div className='grid'>
            { creators?.length == 0 ? (<div>No creators</div>) : creators?.map( (creator) => (                    
                         
                            <Card 
                             key={creator.id  }
                             creator = { creator }
                            />         
                        
            ))}
       </div>
    </div>  

  )
}

export default ShowCreators