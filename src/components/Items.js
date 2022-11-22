import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Item from './Item'

const Items = (props) =>  {
  const param = useParams().categoryType;
  let filteredItems = props.items.filter(item => item.category === param)
  let list;
  if (param) {
    list = filteredItems
  } else {
    list = props.items
}
    return (
      <main>
        <div className='main__container'>
        <div className='items__box'>
        {list.map(el => (
            <Item key={el.id} item = {el}/>
        ))}
        </div>
        </div>
      </main>
    )
  }

export default Items;