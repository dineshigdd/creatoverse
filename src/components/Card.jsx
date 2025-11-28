import React from 'react'

function Card({ name, url, description, imageUrl }) {
  return (
    <div>   
        <div>{name}</div>
      <div>{ url }</div>
        <div>{ description}</div>
        <div>{ imageUrl }</div>
    </div>
  )
}

export default Card