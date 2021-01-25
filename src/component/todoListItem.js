import React, { useEffect, useState } from 'react';
import DeleteButton from './deleteButton';

const TodoListItem = ({props, item, key, deleteItemCallback, selected}) => {

  const [isHover, setIsHover] = useState(false);
  // const [isActive, setIsActive] = useState(false);

  const deleteCallback = () => {
    deleteItemCallback(key);
  }

  return (
    <div
      {...props}
      style={{
        flex: 1,
        width: '100%',
        height: '50px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          backgroundColor: item.select ? 'gray' : isHover ? 'lightgray' : 'white',
          display: 'flex',
          flexDirection: 'row',
          transition: 'all 0.3s',
          alignContent: 'center',
          boxShadow: '2px 2px 1px lightgray',
          border: '1px solid lightgray'
        }}
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        onMouseDown={() => {
          selected(key);
        }}
      >
        {/* <span
          style={{
            width: 15,
            display: 'flex',
            visibility: isActive ? 'visible' : 'hidden',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          √
        </span> */}
        <span
          style={{
            borderColor: 'white',
            borderStyle: 'solid',
            borderWidth: '0 2px 2px 0',
            transform: 'rotate(45deg)',
            height: '15px',
            width: '7px',
            marginLeft: '10px',
            visibility: item.select ? 'visible' : 'hidden',
            alignSelf: 'center'
          }}
        >
        </span>
        <span
          style={{
            fontSize: '24px',
            color: isHover || item.select ? 'white' : 'black',
            textDecoration: item.select ? 'line-through' : 'none',
            transition: 'all 0.3s',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            marginLeft: '10px',
            alignSelf: 'center'
          }}
        >
          {item.value}
        </span>
        <DeleteButton deleteCallback={deleteCallback}></DeleteButton>
      </div>
    </div>
  )
}

export default TodoListItem