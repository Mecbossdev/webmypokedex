import React from 'react';

export const PokemonThumb = ({id, name, image, type}) => {
  const style = `thumb-container ${type}`;

    <div className={style}>
      <div className='number'>
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name}/>
      <div className='detail-wrapper'>
          <h3>{name}</h3>
          <small>type: {type}</small>
      </div>

    </div>
  
}