import React from 'react'

const Points = (props) => {
  return (
    <div className='pointTite'>
        {props.title}
        <div className='pointInfo'>
            <div className='emoji'>{props.emoji}</div>
            <div className='info'>{props.info}</div>
        </div>
    </div>
  )
}

export default Points