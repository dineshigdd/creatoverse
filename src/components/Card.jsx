import React from 'react'

function Card({ name, url, description, imageURL}) {
  return (
    <div>   
        <div>{name}</div>
      <div>{ url }</div>
        <div>{ description}</div>
        <div><img src={ imageURL }/></div>
    </div>
  )
}

export default Card