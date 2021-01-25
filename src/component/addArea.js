import React, { useState } from 'react';
import AddButton from './addButton';
import AddText from './addText';

const AddArea = ({props, getvalue}) => {

  const [value, setValue] = useState('')

  const todoListCallback = () => {
    getvalue({value: value, select: false});
  }

  const valueCallback = (value) => {
    setValue(value);
  }

  return (
    <div
      {...props}
      style={{
        width: '100%',
        height: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        margin: '20px 20px',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <h1>Insert Your Todos</h1>
      </div>
      <div
        style={{
          width: '100%',
          height: '150px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <AddText valuecallback={valueCallback}></AddText>
        <AddButton todolistcallback={todoListCallback}></AddButton>
      </div>
    </div>
  )
}

export default AddArea