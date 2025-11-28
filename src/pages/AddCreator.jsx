import React from 'react'
import { supabase } from '../client'

function AddCreator() {
  return (
    <div>Add Creator
      <form>
        <label>name
          <input type='text' />
        </label>

        <label>URL
          <input type='text' />
        </label>


        <label>description
          <input type='text' />
        </label>

       <label>imageUrl
          <input type='text' />
        </label>
      </form>



    </div>
  )
}

export default AddCreator