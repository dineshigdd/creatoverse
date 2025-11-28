import React from 'react'
import Card from '../components/Card'


function ShowCreators( { creators }) {
    
  return (
    <div>show all creators

        { creators?.length == 0 ? (<div>No creators</div>) : creators?.map( (creator) => (
            
                    <Card 
                    key={creator.id  }
                    name={creator.name}
                    url={creator.url}
                    description={creator.description}
                    imageUrl={creator.imageUrl}
                    />
                    
           
        )) }
    </div>

  )
}

export default ShowCreators