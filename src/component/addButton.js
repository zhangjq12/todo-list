import React, { useState } from 'react';

const AddButton = ({props, todolistcallback}) => {

  const [isHover, setIsHover] = useState(false);

  const _onClick = () => {
    todolistcallback()
  }

  return (
    <button
      {...props}
      style={{
        backgroundColor: isHover ? 'rgb(6, 116, 219)' : 'rgb(0, 140, 255)',
        color: 'white',
        border: 'none',
        minWidth: '150px',
        height: '65px',
        maxWidth: '250px',
        borderRadius: '5px',
        outline: 'none',
        transition: 'all 0.5s'
      }}
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
      onClick={_onClick}
    >
      Add Todos
    </button>
  )
}

export default AddButton