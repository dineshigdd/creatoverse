import React from 'react'
import Card from '../components/Card'
import '../styles/ShowCreators.css'


function ShowCreators( { creators }) {
    
  return (
    <div className='container'>
        <div className='grid'>
            { creators?.length == 0 ? (<div>No creators</div>) : creators?.map( (creator) => (
                    
                          <article className='grid-item'>
                            <Card 
                            key={creator.id  }
                            name={creator.name}
                            url={creator.url}
                            description={creator.description}
                            imageURL={creator.imageURL}
                            />
                          </article>               
                        
            ))}
       </div>
    </div>  

  )
}

export default ShowCreators