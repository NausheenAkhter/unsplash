import React from 'react'

function Photo({details = {}}) {
const { urls = {}, alt_description = '' }  = details
const {  small = ''} = urls
  return (
    <div>
      <img width={300} height={300} src={small} alt={alt_description} /> 
    </div>
  )
}

export default Photo
