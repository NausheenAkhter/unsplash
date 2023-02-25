import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Search() {
  return (
    <section>
        <input type={'text'} placeholder='enter your string'  />
        <button type='submit'> <FaSearch /> </button>
      
    </section>
  )
}

export default Search
