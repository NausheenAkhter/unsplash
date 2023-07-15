import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import styles from './Search.module.css'

function Search({setQuery = () => {}}) {
  const [querySearched, setQuerySearched] = useState('')
  const submitQuery = () => setQuery(querySearched)
  const updateQuery = (e) => setQuerySearched(e?.target?.value)

  return ( 
    <section className={styles['search-section']}>
        <input className={styles['search-input']} type={'text'} placeholder='enter your string' value={querySearched} onChange={updateQuery} />
        <button className={styles['search-button']}  type='submit' onClick={submitQuery}> <FaSearch /> </button>
    </section>
  )
}

export default Search
