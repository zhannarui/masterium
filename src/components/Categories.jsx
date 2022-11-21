import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

const Categories = (props) =>  {
    return (
    <div className='main__container'>
      <div className='categories'>
      <NavLink to='/'><div className='categories__item'>Все</div></NavLink>
      {props.categories.map(el => (
           <NavLink to={`/${el.key}`}><div className='categories__item' key={el.key}>{el.name}</div></NavLink>
        ))}
        </div>
      </div>
    )
 }

export default Categories;