import React from 'react'

const SearchResultList = ({resultlist}) => {
  return (
    <div className='search_list'>
        {resultlist.map((items,id)=>{
            return(
                <div key={id} onClick={(e)=>resultlist.name}>{items.name}</div>
            )
        })}
    </div>
  )
}

export default SearchResultList