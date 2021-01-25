import React, { useState } from 'react';

const DeleteButton = ({props, deleteCallback}) => {
  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const _onClick = () => {
    deleteCallback();
  }

  return (
    <button
      {...props}
      style={{
        backgroundColor: isHover ? 'rgb(255, 0, 0)' : isActive ? 'rgb(172, 0, 0)' : 'transparent',
        color: isHover ? 'white': 'black',
        border: 'none',
        width: '35px',
        height: '50px',
        borderRadius: '5px',
        outline: 'none',
        transition: 'all 0.5s',
        right: 0,
        position: 'absolute',
      }}
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
      onMouseDown={() => {
        setIsActive(true);
      }}
      onMouseUp={() => {
        setIsActive(false);
      }}
      onClick={_onClick}
    >
      ×
    </button>
  )
}

export default DeleteButton